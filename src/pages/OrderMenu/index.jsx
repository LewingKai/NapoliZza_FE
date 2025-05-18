import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import DishApi from '~/api/dishApi'
import ReservationApi from '~/api/reservationApi'
import { Button } from '~/components/ui/Button'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { routes } from '~/routes'
import LoadingSpinner from '~/components/ui/LoadingSpinner'
import { FaShoppingCart } from 'react-icons/fa'

export default function OrderMenu() {
  const location = useLocation()
  const { date, time, guests } = location.state || {}

  const [cart, setCart] = useState([])
  const [note, setNote] = useState('')
  const [menuData, setMenuData] = useState({})
  const [loading, setLoading] = useState(true)
  const [isCartOpen, setIsCartOpen] = useState(false)
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
    const formattedDate = dayjs(date).format('YYYY-MM-DD')

    const reservationData = {
      date: formattedDate,
      time: time,
      numGuests: guests,
      note,
      listDishes: cart.map((item) => ({
        dishId: item._id,
        quantity: item.quantity,
      })),
    }

    try {
      const response = await ReservationApi.createReservation(reservationData)
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
    <div className='relative'>
      {/* Nội dung chính */}
      <div className='flex flex-col lg:flex-row justify-between px-5 py-10'>
        <div className='w-full px-5 lg:px-10'>
          <h1 className='text-2xl lg:text-4xl font-bold mb-5'>Thông tin đặt bàn</h1>
          <p>
            <strong>Ngày:</strong> {formatDate(date)}
          </p>
          <p>
            <strong>Giờ:</strong> {time}
          </p>
          <p>
            <strong>Số lượng khách:</strong> {guests}
          </p>
          <h1 className='text-2xl lg:text-4xl font-bold my-5'>Đặt món</h1>
          {loading ? (
            <LoadingSpinner />
          ) : (
            categories.map((category) => (
              <div key={category} className='mb-10'>
                <h2 className='text-xl lg:text-2xl font-bold mb-5 capitalize'>{category}</h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5'>
                  {menuData[category]?.map((item) => (
                    <div
                      key={item.id}
                      className='p-3 rounded-lg flex flex-col items-center bg-white shadow-md'
                    >
                      <img
                        src={item.dishImg?.url}
                        alt={item.name}
                        className='w-32 h-32 lg:w-52 lg:h-52 object-cover mb-3 rounded-md'
                      />
                      <h3 className='text-sm lg:text-lg font-bold text-center h-14'>{item.name}</h3>
                      <p className='text-sm lg:text-base text-descText mt-2'>
                        {item.price.toLocaleString()} VND
                      </p>
                      <Button
                        variant='default'
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
      </div>

      {/* Nút nổi giỏ hàng */}
      <Button
        variant='default'
        className='h-16 w-16 fixed bottom-5 right-5 text-white p-3 lg:p-4 rounded-full shadow-lg flex items-center justify-center'
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <FaShoppingCart size={20} lg:size={24} />
        {cart.length > 0 && (
          <span className='absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold w-4 h-4 lg:w-5 lg:h-5 rounded-full flex items-center justify-center'>
            {cart.length}
          </span>
        )}
      </Button>
      {/* Drawer giỏ hàng */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 lg:w-4xl bg-white shadow-lg transform ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <div className='p-5'>
          <h2 className='text-xl lg:text-2xl font-bold mb-3'>Giỏ hàng</h2>
          <button
            className='w-8 h-8 lg:w-10 lg:h-10 absolute top-3 right-3 text-2xl lg:text-3xl text-gray-500 hover:text-black'
            onClick={() => setIsCartOpen(false)}
          >
            ✕
          </button>
          {cart.length === 0 ? (
            <p>Giỏ hàng trống</p>
          ) : (
            <div>
              <div className='max-h-64 lg:max-h-96 overflow-y-auto'>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className='flex items-center justify-between mb-3 border-b pb-3'
                  >
                    <img
                      src={item.dishImg?.url}
                      alt={item.name}
                      className='w-12 h-12 lg:w-16 lg:h-16 object-cover rounded-md'
                    />
                    <div className='flex-1 ml-3'>
                      <h3 className='text-sm lg:text-base font-bold'>{item.name}</h3>
                      <p className='text-xs lg:text-sm'>
                        {item.quantity} x {item.price.toLocaleString()} VND
                      </p>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Button
                        variant='default'
                        className='h-10 w-10 rounded-full bg-third px-2 lg:px-4 text-2xl'
                        onClick={() => addToCart(item)}
                      >
                        +
                      </Button>
                      <Button
                        variant='default'
                        className='h-10 w-10 rounded-full bg-third px-2 lg:px-4 text-2xl'
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
              </div>
              <div className='mt-5'>
                <p className='text-sm lg:text-lg font-bold'>
                  Tổng tiền: {totalPrice.toLocaleString()} VND
                </p>
                <textarea
                  className='w-full mt-3 p-2 border rounded-md text-sm lg:text-base'
                  placeholder='Nhập chú thích cho giỏ hàng...'
                  onChange={(e) => setNote(e.target.value)}
                />
                <Button
                  variant='default'
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
    </div>
  )
}
