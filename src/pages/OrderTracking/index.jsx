import React, { useEffect, useState } from 'react'
import Navigation from './_components/Navigation'
import { toast } from 'react-toastify'
import ReservationApi from '~/api/reservationApi'
import { Button } from '~/components/ui/Button'
import { useLocation } from 'react-router-dom'

export default function OrderTracking() {
  const tabLabels = ['Chờ xác nhận', 'Đã xác nhận', 'Bị từ chối', 'Đã hủy']
  const [selectedTab, setSelectedTab] = useState(0)
  const [reservations, setReservations] = useState([])
  const location = useLocation()

  const fetchReservations = async () => {
    try {
      const statusMap = ['pending', 'confirmed', 'rejected', 'canceled']
      const status = statusMap[selectedTab]

      const response = await ReservationApi.getReservations(status)

      if (response && response.success) {
        const filteredReservations = Array.isArray(response.data)
          ? response.data.filter((reservation) => reservation.status === status)
          : []
        setReservations(filteredReservations)
      } else {
        setReservations([])
      }
    } catch (error) {
      toast.error('Lỗi khi tải danh sách đặt bàn.')
      console.log('Lỗi: ', error)
    }
  }

  const handleCancelReservation = async (id) => {
    try {
      await ReservationApi.cancelReservation(id)
      toast.success('Hủy đặt bàn thành công!')
      fetchReservations()
    } catch (error) {
      toast.error('Không thể hủy đặt bàn.')
      console.log('Lỗi: ', error)
    }
  }

  const handleChangePaymentMethod = async (id, paymentMethod) => {
    try {
      await ReservationApi.changePaymentMethod(id, paymentMethod)
      toast.success('Thay đổi phương thức thanh toán thành công!')
      fetchReservations()
    } catch (error) {
      toast.error('Không thể thay đổi phương thức thanh toán.')
      console.log('Lỗi: ', error)
    }
  }

  const handleCreatePaymentLink = async (reservation) => {
    try {
      const paymentData = {
        reservationid: reservation._id,
        amount: reservation.totalPrice,
        description: `Thanh toán cho đơn đặt bàn #${reservation._id}`,
        items: reservation.listDishes.map((dish) => ({
          name: dish.dishId.name,
          quantity: dish.quantity,
          price: dish.dishId.price,
        })),
      }

      const response = await ReservationApi.createPaymentLink(paymentData)
      if (response.url) {
        window.location.href = response.url
      } else {
        toast.error('Không thể tạo liên kết thanh toán.')
      }
    } catch (error) {
      console.error('Lỗi khi tạo liên kết thanh toán:', error)
      toast.error('Đã xảy ra lỗi khi tạo liên kết thanh toán.')
    }
  }

  const handleTabChange = (_event, newValue) => {
    setSelectedTab(newValue)
  }

  useEffect(() => {
    fetchReservations()
  }, [selectedTab])

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const status = params.get('status')
    const reservationId = params.get('reservationid')
    if (status === 'PAID' && reservationId) {
      ReservationApi.changePaymentStatus(reservationId)
        .then(() => {
          window.history.replaceState({}, document.title, location.pathname)
          fetchReservations()
        })
        .catch(() => {
          toast.error('Thanh toán thất bại!')
        })
    }
  }, [location.search])

  return (
    <div className='w-full flex flex-col items-center my-6 px-4 space-y-4'>
      <div className='w-full max-w-[800px] shadow-md'>
        <Navigation labels={tabLabels} value={selectedTab} onChange={handleTabChange} />
      </div>

      <div className='bg-[#fdf8e7] w-full max-w-[800px] min-h-[350px] shadow-md rounded-lg p-4'>
        {reservations.length === 0 ? (
          <p className='text-center text-gray-500'>Không có đơn đặt bàn nào.</p>
        ) : (
          <div className='space-y-4'>
            {reservations.map((reservation) => (
              <div
                key={reservation._id}
                className='p-4 border rounded-md shadow-sm bg-white hover:shadow-md transition-shadow'
              >
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                  <p>
                    <strong>Thời gian:</strong> {new Date(reservation.time).toLocaleString()}
                  </p>
                  <p>
                    <strong>Số lượng khách:</strong> {reservation.numGuests}
                  </p>
                  <p>
                    <strong>Phương thức thanh toán:</strong>{' '}
                    {reservation.paymentMethod === 'direct' ? 'Trực tiếp' : 'Online'}
                  </p>
                  <p>
                    <strong>Trạng thái thanh toán:</strong>{' '}
                    {reservation.paymentStatus === 'pending' ? 'Đang chờ' : 'Đã thanh toán'}
                  </p>
                  <p>
                    <strong>Ghi chú:</strong> {reservation.note || 'Không có'}
                  </p>
                </div>
                <p className='mt-2'>
                  <strong>Món ăn:</strong>
                </p>
                <table className='w-full border-collapse border mt-2 text-sm'>
                  <thead>
                    <tr>
                      <th className='border px-2 py-1'>Tên món</th>
                      <th className='border px-2 py-1'>Số lượng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservation.listDishes.map((dish) => (
                      <tr key={dish.dishId._id}>
                        <td className='border px-2 py-1'>{dish.dishId.name}</td>
                        <td className='border px-2 py-1'>{dish.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className='mt-3'>
                  <strong>Tổng tiền:</strong> {reservation.totalPrice.toLocaleString()} VND
                </p>
                {reservation.status === 'pending' && (
                  <div className='mt-3 flex flex-wrap gap-2 justify-end'>
                    <Button
                      variant='outline'
                      className='bg-red-500 hover:bg-red-700 text-white'
                      onClick={() => handleCancelReservation(reservation._id)}
                    >
                      Hủy đặt bàn
                    </Button>
                    <Button
                      variant='outline'
                      className='bg-blue-500 hover:bg-blue-700 text-white'
                      onClick={() =>
                        handleChangePaymentMethod(
                          reservation._id,
                          reservation.paymentMethod === 'direct' ? 'online' : 'direct',
                        )
                      }
                    >
                      Đổi sang {reservation.paymentMethod === 'direct' ? 'Online' : 'Trực tiếp'}
                    </Button>
                  </div>
                )}
                {reservation.status === 'confirmed' && reservation.paymentMethod === 'online' && (
                  <div className='mt-3 flex flex-wrap gap-2 justify-end'>
                    <Button
                      variant='outline'
                      className='bg-green-500 hover:bg-green-700 text-white'
                      onClick={() => handleCreatePaymentLink(reservation)}
                      disabled={reservation.paymentStatus === 'paid'}
                    >
                      Thanh toán
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
