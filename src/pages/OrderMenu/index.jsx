import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DishApi from '~/api/dishApi'
import ReservationApi from '~/api/reservationApi'
import { Button } from '~/components/ui/Button'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { routes } from '~/routes'

export default function OrderMenu() {
  const location = useLocation()
  const { date, time, guests } = location.state || {}

  const [cart, setCart] = useState([])
  const [note, setNote] = useState('')
  const [menuData, setMenuData] = useState({})
  const [loading, setLoading] = useState(true)
  const { token } = useSelector((state) => state.user)
  const navigate = useNavigate()

  const categories = [
    'pizza',
    'appetizer',
    'salad',
    'pasta',
    'drinks',
    'topping',
    'delivery-combo',
    'seasonal',
    'desserts',
    'market',
  ]

  const formatDate = (dateString) => {
    if (!dateString) return 'Chưa chọn'
    const dateObj = new Date(dateString)
    return dateObj.toLocaleDateString('vi-VN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem._id === item._id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id))
  }

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  const handleSubmitReservation = async () => {
    if (!date || !time || !guests) {
      toast.error('Vui lòng kiểm tra lại thông tin đặt bàn.')
      return
    }

    const formattedDate = dayjs(date).format('YYYY-MM-DD')
    const formattedTime = dayjs(time, 'HH:mm').format('HH:mm')

    const reservationData = {
      date: formattedDate,
      time: formattedTime,
      numGuests: guests,
      note,
      listDishes: cart.map((item) => ({
        dishId: item._id,
        quantity: item.quantity,
      })),
    }

    try {
      const response = await ReservationApi.createReservation(reservationData, token)
      toast.success('Đặt bàn thành công!')
      console.log('Response:', response)
      navigate(`${routes.HOME}`)
      window.scrollTo(0, 0)
    } catch (error) {
      toast.error(error.response?.data?.message || 'Đã xảy ra lỗi khi đặt bàn.')
    }
  }

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true)
        const data = {}
        for (const category of categories) {
          const response = await DishApi.searchDish(100, 1, '', category, [])
          data[category] = response.dishes
        }
        setMenuData(data)
      } catch (error) {
        console.error('Lỗi khi lấy danh sách món ăn:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMenuData()
  }, [])

  return (
    <div className='flex justify-between px-[138px] py-10'>
      <div className='w-2/3 pr-10'>
        {/* Thông tin đặt bàn */}
        <h1 className='text-4xl font-bold mb-5'>Thông tin đặt bàn</h1>
        <p>
          <strong>Ngày:</strong> {formatDate(date)}
        </p>
        <p>
          <strong>Giờ:</strong> {time}
        </p>
        <p>
          <strong>Số lượng khách:</strong> {guests}
        </p>
        {/* Danh sách món ăn */}
        <h1 className='text-4xl font-bold my-5'>Đặt món</h1>
        {loading ? (
          <p>Đang tải dữ liệu...</p>
        ) : (
          categories.map((category) => (
            <div key={category} className='mb-10'>
              <h2 className='text-2xl font-bold mb-5 capitalize'>{category}</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                {menuData[category]?.map((item) => (
                  <div key={item.id} className='p-3 rounded-lg flex flex-col items-center bg-white'>
                    <img
                      src={item.dishImg?.url}
                      alt={item.name}
                      className='w-52 h-52 object-cover mb-3 rounded-md'
                    />
                    <h3 className='text-lg font-bold text-center h-14'>{item.name}</h3>
                    <p className='text-descText'>{item.price.toLocaleString()} VND</p>
                    <Button
                      variant='outline'
                      className='mt-3 w-full bg-third rounded-md'
                      onClick={() => addToCart(item)}
                    >
                      Thêm vào giỏ
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Giỏ hàng */}
      <div className='w-1/3 border-l pl-5 sticky top-36 h-full'>
        <h2 className='text-2xl font-bold mb-3'>Giỏ hàng</h2>
        {cart.length === 0 ? (
          <p>Giỏ hàng trống</p>
        ) : (
          <div className='max-h-[500px] overflow-y-auto'>
            {cart.map((item) => (
              <div key={item.id} className='flex items-center justify-between mb-3 border-b pb-3'>
                <img
                  src={item.dishImg?.url}
                  alt={item.name}
                  className='w-16 h-16 object-cover rounded-md'
                />
                <div className='flex-1 ml-3'>
                  <h3 className='font-bold'>{item.name}</h3>
                  <p>
                    {item.quantity} x {item.price.toLocaleString()} VND
                  </p>
                </div>
                <div className='flex items-center space-x-2'>
                  <Button
                    variant='outline'
                    className='bg-third px-4'
                    onClick={() => addToCart(item)}
                  >
                    +
                  </Button>
                  <Button
                    variant='outline'
                    className='bg-third px-4'
                    onClick={() => {
                      if (item.quantity > 1) {
                        setCart((prevCart) =>
                          prevCart.map((cartItem) =>
                            cartItem._id === item._id
                              ? { ...cartItem, quantity: cartItem.quantity - 1 }
                              : cartItem,
                          ),
                        )
                      } else {
                        removeFromCart(item._id)
                      }
                    }}
                  >
                    -
                  </Button>
                </div>
              </div>
            ))}
            <div className='mt-5'>
              <p className='font-bold text-lg'>Tổng tiền: {totalPrice.toLocaleString()} VND</p>
              <textarea
                className='w-full mt-3 p-2 border rounded-md'
                placeholder='Nhập chú thích cho giỏ hàng...'
                onChange={(e) => setNote(e.target.value)}
              />
              <Button
                variant='outline'
                className='mt-3 w-full bg-third rounded-md'
                onClick={handleSubmitReservation}
              >
                Tiếp tục
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
