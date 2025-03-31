import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '~/components/ui/Button'

const menuData = [
  {
    category: 'Pizza',
    items: [
      {
        id: 1,
        name: 'Pizza Tôm sốt tỏi cay',
        price: 254000,
        image: 'https://pizza4ps.com/wp-content/uploads/2024/04/BYO_Garlic-Shrimp-Pizza-1.jpg',
      },
      {
        id: 2,
        name: 'Phô mai Burrata thịt nguội',
        price: 298000,
        image: 'https://pizza4ps.com/wp-content/uploads/2023/07/PizzaBYO-1.png',
      },
    ],
  },
  {
    category: 'Appetizers & Salads',
    items: [
      {
        id: 3,
        name: 'Các loại phô mai nhà làm (S)',
        price: 109000,
        image: 'https://pizza4ps.com/wp-content/uploads/2023/07/BYO_Assorted-Cheese_S-2-scaled.jpg',
      },
      {
        id: 4,
        name: 'Set thịt nguội và phô mai',
        price: 172000,
        image: 'https://pizza4ps.com/wp-content/uploads/2023/08/BYO_Cold-Cuts_S-2-scaled.jpg',
      },
    ],
  },
  {
    category: 'Drink/Alcohol',
    items: [
      {
        id: 5,
        name: 'Rượu Sake tự nhiên (Ly)',
        price: 120000,
        image: 'https://pizza4ps.com/wp-content/uploads/2023/07/40950006_2.jpg',
      },
      {
        id: 6,
        name: 'Sangria Đỏ (Ly)',
        price: 99000,
        image: 'https://pizza4ps.com/wp-content/uploads/2023/07/1-APPLY-24-Red-SangriaGlass.jpg',
      },
    ],
  },
]

export default function OrderMenu() {
  const location = useLocation()
  const reservationDetails = location.state || {}
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className='flex justify-between px-[138px] py-10'>
      {/* Danh sách món ăn */}
      <div className='w-2/3 pr-10'>
        <h1 className='text-4xl font-bold mb-5'>Đặt món</h1>
        <div className='mb-5'>
          <p>
            <strong>Ngày:</strong> {reservationDetails.date}
          </p>
          <p>
            <strong>Giờ:</strong> {reservationDetails.time}
          </p>
          <p>
            <strong>Số lượng khách:</strong> {reservationDetails.guests}
          </p>
        </div>

        {menuData.map((category) => (
          <div key={category.category} className='mb-10'>
            <h2 className='text-2xl font-bold mb-3'>{category.category}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
              {category.items.map((item) => (
                <div key={item.id} className=' p-3 rounded-lg flex flex-col items-center bg-white'>
                  <img
                    src={item.image}
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
        ))}
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
                  src={item.image}
                  alt={item.name}
                  className='w-16 h-16 object-cover rounded-md'
                />
                <div className='flex-1 ml-3'>
                  <h3 className='font-bold'>{item.name}</h3>
                  <p>
                    {item.quantity} x {item.price.toLocaleString()} VND
                  </p>
                </div>
                <div className='flex items-center'>
                  <Button
                    variant='outline'
                    className='bg-third px-4'
                    onClick={() => addToCart(item)}
                  >
                    +
                  </Button>
                  <Button
                    variant='outline'
                    className='bg-third px-4 ml-2'
                    onClick={() => {
                      if (item.quantity > 1) {
                        setCart((prevCart) =>
                          prevCart.map((cartItem) =>
                            cartItem.id === item.id
                              ? { ...cartItem, quantity: cartItem.quantity - 1 }
                              : cartItem,
                          ),
                        )
                      } else {
                        removeFromCart(item.id)
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
              <Button variant='outline' className='mt-3 w-full bg-third rounded-md'>
                Tiếp tục
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
