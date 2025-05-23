import { useEffect, useState } from 'react'
import TablePagination from '@mui/material/TablePagination'
import AdminApi from '~/api/adminApi'
import RowOrder from './components/RowOrder'
import LoadingComponent from '~/components/ui/LoadingComponent'

export default function ManageOder() {
  const [orderList, setOrderList] = useState([])
  const [status, setStatus] = useState('pending')
  const [skipPage, setSkipPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangeStatus = (event) => setStatus(event.target.value)

  const handleChangePage = (_, newPage) => setSkipPage(newPage)

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setSkipPage(0)
  }
  const [loading, setLoading] = useState(false)
  const fetchOrder = async () => {
    setLoading(true)
    try {
      const orders = await AdminApi.getAllReservation(status)
      console.log(orders.data.data)
      setOrderList(orders.data.data)
      setLoading(false)
      return orders
    } catch (error) {
      setOrderList([])
      setLoading(false)
      console.log('Lỗi lấy đơn hàng: ', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOrder()
  }, [status])

  if (loading) {
    return <LoadingComponent />
  }

  return (
    <div className='w-full flex h-[88vh] flex-col items-center gap-5 bg-gray-200 py-5'>
      <h1 className='text-[40px] uppercase font-bold text-center'>Quản lý đơn đặt bàn</h1>
      <div className='bg-white shadow-md rounded-[10px] px-10 py-5 w-[75vw] mb-10'>
        <div className='flex justify-between items-center mb-4'>
          {/* <div className='border-2 flex items-center rounded-md px-3 py-1 border-[#212B36] border-opacity-60'>
            <i className='bx bx-search-alt-2 text-2xl'></i>
            <input
              className='outline-none placeholder:text-slate-400 px-3 py-2'
              placeholder='Tìm kiếm đơn hàng...'
            />
          </div> */}
          <select value={status} onChange={handleChangeStatus} className='border p-2 rounded-md'>
            <option value='pending'>Đợi duyệt</option>
            <option value='confirmed'>Duyệt</option>
            <option value='rejected'>Từ chối</option>
            <option value=''>All</option>
          </select>
        </div>

        <table className='w-full border-collapse border border-gray-500'>
          <thead>
            <tr className='bg-secondary'>
              <th className='p-2 border-2 border-gray-500 font-bold text-[20px]'>STT</th>
              <th className='p-2 border-2 border-gray-500 font-bold text-[20px]'>Tên người đặt</th>
              <th className='p-2 border-2 border-gray-500 font-bold text-[20px]'>
                Thông tin chi tiết
              </th>
              <th className='p-2 border-2 border-gray-500 font-bold text-[20px]'>Đơn hàng</th>
              <th className='p-2 border-2 border-gray-500 font-bold text-[20px]'>Tổng hóa đơn</th>
              <th className='p-2 border-2 border-gray-500 font-bold text-[20px]'>Tình trạng</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <p>Đang tải...</p>
            ) : orderList.length > 0 ? (
              orderList
                .slice(skipPage * rowsPerPage, (skipPage + 1) * rowsPerPage)
                .map((val, index) => {
                  return (
                    <RowOrder
                      val={val}
                      key={val._id}
                      index={skipPage * rowsPerPage + index}
                      fetchOrder={fetchOrder}
                      setLoading={setLoading}
                    />
                  )
                })
            ) : (
              <tr>
                <td colSpan='5' className='text-center p-4'>
                  Chưa có đơn hàng nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className='mt-1'>
          <TablePagination
            component='div'
            page={skipPage}
            count={orderList.length}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </div>
  )
}
