import React, { useEffect, useState } from 'react'
import Navigation from './_components/Navigation'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import ReservationApi from '~/api/reservationApi'
import { Button } from '~/components/ui/Button'

const OrderTracking = () => {
  const tabLabels = ['Chờ xác nhận', 'Đã xác nhận', 'Bị từ chối', 'Đã hủy']
  const [selectedTab, setSelectedTab] = useState(0)
  const [reservations, setReservations] = useState([])
  const [loading, setLoading] = useState(true)
  const { token } = useSelector((state) => state.user)

  const fetchReservations = async () => {
    try {
      const statusMap = ['pending', 'confirmed', 'rejected', 'canceled']
      const status = statusMap[selectedTab]

      // Gọi API để lấy danh sách đặt bàn
      const response = await ReservationApi.getReservations(token, status)

      // Kiểm tra và lọc dữ liệu trả về
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
      setReservations([])
    }
  }

  const handleCancelReservation = async (id) => {
    try {
      await ReservationApi.cancelReservation(id, token)
      toast.success('Hủy đặt bàn thành công!')
      fetchReservations()
    } catch (error) {
      toast.error('Không thể hủy đặt bàn.')
    }
  }

  const handleChangePaymentMethod = async (id, paymentMethod) => {
    try {
      await ReservationApi.changePaymentMethod(id, paymentMethod, token)
      toast.success('Thay đổi phương thức thanh toán thành công!')
      fetchReservations()
    } catch (error) {
      toast.error('Không thể thay đổi phương thức thanh toán.')
    }
  }

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue)
  }

  useEffect(() => {
    fetchReservations()
  }, [selectedTab])

  return (
    <div className='w-full flex flex-col items-center my-12 space-y-2'>
      <div className='w-full max-w-[800px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <Navigation labels={tabLabels} value={selectedTab} onChange={handleTabChange} />
      </div>

      <div className='bg-[#fdf8e7] w-full max-w-[800px] min-h-[350px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-5'>
        {reservations.length === 0 ? (
          <p>Không có đơn đặt bàn nào.</p>
        ) : (
          <div className='space-y-5'>
            {reservations.map((reservation) => (
              <div key={reservation._id} className='p-5 border rounded-md shadow-md'>
                <p>
                  <strong>Thời gian:</strong> {new Date(reservation.time).toLocaleString()}
                </p>
                <p>
                  <strong>Số lượng khách:</strong> {reservation.numGuests}
                </p>
                <p>
                  <strong>Tổng tiền:</strong> {reservation.totalPrice.toLocaleString()} VND
                </p>
                <p>
                  <strong>Phương thức thanh toán:</strong> {reservation.paymentMethod}
                </p>
                <p>
                  <strong>Ghi chú:</strong> {reservation.note || 'Không có'}
                </p>
                <p>
                  <strong>Món ăn:</strong>
                </p>
                <ul className='list-disc pl-5'>
                  {reservation.listDishes.map((dish) => (
                    <li key={dish.dishId._id}>
                      {dish.dishId.name} - {dish.quantity} phần
                    </li>
                  ))}
                </ul>
                {reservation.status === 'pending' && (
                  <div className='mt-3 flex gap-3'>
                    <Button
                      variant='outline'
                      className='bg-third text-white'
                      onClick={() => handleCancelReservation(reservation._id)}
                    >
                      Hủy đặt bàn
                    </Button>
                    <Button
                      variant='outline'
                      className='bg-third text-white'
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderTracking
