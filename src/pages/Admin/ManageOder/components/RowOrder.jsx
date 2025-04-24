import { useEffect, useState } from 'react'
import { Modal, Box } from '@mui/material'
import AdminApi from '~/api/adminApi'
import { toast } from 'react-toastify'

const RowOrder = ({ val, key, index, fetchOrder, setLoading }) => {
  const [orderItems, setOrderItems] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [status, setStatus] = useState(val.status)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const handleStatus = async (e) => {
    setLoading(true)
    const newStatus = e.target.value
    setStatus(newStatus)
    const update = {
      reservationId: val._id,
      status: newStatus,
    }
    try {
      await AdminApi.changeStatusReservation(update)
      toast.success('Cập nhật trạng thái đơn thành công!')
    } catch (error) {
      toast.error('Cập nhật trạng thái đơn thất bại!')
      console.error('Không thể update status: ', error)
    } finally {
      fetchOrder()
      setLoading(false)
    }
  }

  useEffect(() => {
    setOrderItems(val.listDishes)
  }, [])
  return (
    <>
      <tr key={key} className='border-t'>
        <td className='border border-gray-500 p-2 text-center text-[20px]'>{index}</td>
        <td className='border border-gray-500 p-2'>
          <strong>Tên: </strong>
          {val.accountId != null ? val.accountId.name : null}
          <br />
          <strong>Email: </strong> {val.accountId != null ? val.accountId.email : null}
          <br />
          <strong>SDT: </strong> {val.accountId != null ? val.accountId.phone : null}
        </td>
        <td className='border border-gray-500 p-2 w-[250px] '>
          <strong>Mã đơn: </strong> <br />
          {val._id}
          <br />
          <strong>Đặt bàn lúc : </strong> <br />
          {val.createdAt}
          <br />
          <strong>Nhận bàn lúc: </strong> <br />
          {val.time}
        </td>
        <td className='border border-gray-500 p-2 w-[150px] flex-col text-center justify-center items-center '>
          <button className='bg-blue-500 text-white px-3 py-1 rounded-md' onClick={openModal}>
            Xem chi tiết
          </button>
        </td>
        <td className='border border-gray-500 p-2 w-[200px] text-center'>
          <div className='font-medium text-center text-[20px] text-red-700'>
            {val.totalPrice} vnđ
          </div>
        </td>

        <td className=' border border-gray-500 p-2  text-center'>
          <select
            value={status}
            onChange={handleStatus}
            className={`p-2 rounded-md text-white ${status === 'canceled' ? 'bg-red-500' : status === 'confirmed' ? 'bg-blue-500' : status === 'paid' ? 'bg-green-500' : status === 'delivery' ? 'bg-purple-500' : status === 'completed' ? 'bg-teal-500' : 'bg-yellow-500'}`}
          >
            <option value='pending'>Đợi duyệt</option>
            <option value='confirmed'>Duyệt</option>
            <option value='rejected'>Từ chối</option>
          </select>
        </td>
      </tr>
      <Modal open={isModalOpen} onClose={closeModal}>
        <Box className='bg-white p-6 rounded-md shadow-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[35vw]'>
          <h2 className='text-3xl font-bold text-center uppercase text-blue-800 mb-5'>
            Chi tiết đơn đặt bàn
          </h2>
          <div className='space-y-2'>
            <p>
              <strong>Tên khách hàng:</strong> {val.accountId != null ? val.accountId.name : null}
            </p>
            <p>
              <strong>Email:</strong> {val.accountId != null ? val.accountId.email : null}
            </p>
            <p>
              <strong>SDT:</strong> {val.accountId != null ? val.accountId.phone : null}
            </p>
            <p>
              <strong>Đặt lúc:</strong> {val.createdAt}
            </p>
            <p>
              <strong>Nhận bàn lúc:</strong> {val.time}
            </p>
            <p>
              <strong>Mã đơn hàng:</strong> {val._id}
            </p>
            <table>
              <tr className='border bottom-1 bg-blue-400'>
                <th className='border bottom-1 text-white p-2'>STT</th>
                <th className='border bottom-1 text-white p-2'>Thông tin món ăn</th>
                <th className='border bottom-1 text-white p-2'>Số lượng</th>
              </tr>
              {orderItems.map((item, index) => {
                return (
                  <tr className='border bottom-1'>
                    <td className='border bottom-1  text-center p-2'>{index + 1}</td>
                    <td className='border bottom-1 p-2'>
                      <p>
                        <strong>Mã số:</strong> {item.dishId ? item.dishId._id : null}
                      </p>
                      <p>
                        <strong>Tên:</strong> {item.dishId ? item.dishId.name : null}
                      </p>
                    </td>
                    <td className='border bottom-1  text-center p-2'>{item.quantity}</td>
                  </tr>
                )
              })}
            </table>
            <p className='flex gap-3 justify-end mt-3'>
              Tổng tiền: <p className='text-red-700 font-bold'>{val.totalPrice}vnđ</p>
            </p>
          </div>
          <div className='w-full flex justify-center'>
            <button
              onClick={closeModal}
              className='mt-4 px-4 py-2 bg-green-500 text-white rounded-md w-[10vw]'
            >
              Đóng
            </button>
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default RowOrder
