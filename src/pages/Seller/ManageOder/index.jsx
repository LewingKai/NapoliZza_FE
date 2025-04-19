import { useState } from 'react'
import TablePagination from '@mui/material/TablePagination'

const requests = [
  {
    _id: '1',
    accountId: { name: 'Nguyễn Văn A', phone: '0123456789' },
    deliveryAddress: '10/03/2025',
    status: 'pending',
    items: [
      { _id: 'item1', menuItemId: { title: 'Bánh mì' }, quantity: 2 },
      { _id: 'item2', menuItemId: { title: 'Phở bò' }, quantity: 1 },
    ],
  },
  {
    _id: '2',
    accountId: { name: 'Trần Thị B', phone: '0987654321' },
    deliveryAddress: '10/03/2025',
    status: 'in-progress',
    items: [{ _id: 'item3', menuItemId: { title: 'Cơm tấm' }, quantity: 1 }],
  },
  {
    _id: '1',
    accountId: { name: 'Nguyễn Văn A', phone: '0123456789' },
    deliveryAddress: '10/03/2025',
    status: 'pending',
    items: [
      { _id: 'item1', menuItemId: { title: 'Bánh mì' }, quantity: 2 },
      { _id: 'item2', menuItemId: { title: 'Phở bò' }, quantity: 1 },
    ],
  },
  {
    _id: '2',
    accountId: { name: 'Trần Thị B', phone: '0987654321' },
    deliveryAddress: '10/03/2025',
    status: 'in-progress',
    items: [{ _id: 'item3', menuItemId: { title: 'Cơm tấm' }, quantity: 1 }],
  },
  {
    _id: '1',
    accountId: { name: 'Nguyễn Văn A', phone: '0123456789' },
    deliveryAddress: '10/03/2025',
    status: 'pending',
    items: [
      { _id: 'item1', menuItemId: { title: 'Bánh mì' }, quantity: 2 },
      { _id: 'item2', menuItemId: { title: 'Phở bò' }, quantity: 1 },
    ],
  },
  {
    _id: '2',
    accountId: { name: 'Trần Thị B', phone: '0987654321' },
    deliveryAddress: '10/03/2025',
    status: 'in-progress',
    items: [{ _id: 'item3', menuItemId: { title: 'Cơm tấm' }, quantity: 1 }],
  },
  {
    _id: '1',
    accountId: { name: 'Nguyễn Văn A', phone: '0123456789' },
    deliveryAddress: '10/03/2025',
    status: 'pending',
    items: [
      { _id: 'item1', menuItemId: { title: 'Bánh mì' }, quantity: 2 },
      { _id: 'item2', menuItemId: { title: 'Phở bò' }, quantity: 1 },
    ],
  },
  {
    _id: '2',
    accountId: { name: 'Trần Thị B', phone: '0987654321' },
    deliveryAddress: '10/03/2025',
    status: 'in-progress',
    items: [{ _id: 'item3', menuItemId: { title: 'Cơm tấm' }, quantity: 1 }],
  },
]

export default function ManageOder() {
  const orderList = requests
  const [status, setStatus] = useState('pending')
  const [skipPage, setSkipPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleStatus = (event) => setStatus(event.target.value)

  const handleChangePage = (_, newPage) => setSkipPage(newPage)

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setSkipPage(0)
  }

  return (
    <div className='w-full flex flex-col justify-center items-center gap-5'>
      <h1 className='text-[45px] uppercase font-bold text-center'>Quản lý đơn hàng</h1>
      <div className='bg-white shadow-md rounded-[16px] px-10 py-5 w-[75vw] mb-10'>
        <div className='flex justify-between items-center mb-4'>
          <div className='border-2 flex items-center rounded-md px-3 py-1 border-[#212B36] border-opacity-60'>
            <i className='bx bx-search-alt-2 text-2xl'></i>
            <input
              className='outline-none placeholder:text-slate-400 px-3 py-2'
              placeholder='Tìm kiếm đơn hàng...'
            />
          </div>
          <select value={status} onChange={handleStatus} className='border p-2 rounded-md'>
            <option value='pending'>Đợi duyệt</option>
            <option value='in-progress'>Đang giao</option>
            <option value='completed'>Hoàn thành</option>
            <option value='canceled'>Đã hủy</option>
          </select>
        </div>

        <table className='w-full border-collapse border border-gray-500'>
          <thead>
            <tr className='bg-secondary'>
              <th className='p-2 border-2 border-gray-500 font-bold text-[20px]'>Tên người đặt</th>
              <th className='p-2 border-2 border-gray-500 font-bold text-[20px]'>Thông tin</th>
              <th className='p-2 border-2 border-gray-500 font-bold text-[20px]'>Các món ăn</th>
              <th className='p-2 border-2 border-gray-500 font-bold text-[20px]'>Tổng hóa đơn</th>
              <th className='p-2 border-2 border-gray-500 font-bold text-[20px]'>Tình trạng</th>
            </tr>
          </thead>
          <tbody>
            {orderList.length > 0 ? (
              orderList.slice(skipPage * rowsPerPage, (skipPage + 1) * rowsPerPage).map((val) => (
                <tr key={val._id} className='border-t'>
                  <td className='border border-gray-500 p-2 w-[200px] text-center text-[20px]'>
                    {val.accountId.name}
                  </td>
                  <td className='border border-gray-500 p-2 w-[350px] '>
                    <strong>Thời gian: </strong>
                    {val.deliveryAddress}
                    <br />
                    <strong>Số khẩu phần: </strong> {val.accountId.phone}
                    <br />
                    <strong>Email: </strong> {val.accountId.phone}
                    <br />
                    <strong>SDT: </strong> {val.accountId.phone}
                    <br />
                    <strong>Lưu ý: </strong> {val.accountId.phone}
                  </td>
                  <td className='border border-gray-500 p-2 w-[150px] flex-col text-center justify-center items-center '>
                    <button className='bg-blue-500 text-white px-3 py-1 rounded-md'>
                      Xem chi tiết
                    </button>
                  </td>
                  <td className='border border-gray-500 p-2 w-[200px] text-center'>
                    <div className='font-bold text-center text-[20px] text-red-500'>500.000vnđ</div>
                  </td>

                  <td className=' border border-gray-500 p-2  text-center'>
                    <select
                      value={status}
                      onChange={handleStatus}
                      className={`p-2 rounded-md ${val.status === 'pending' ? 'bg-yellow-500' : val.status === 'in-progress' ? 'bg-blue-500' : val.status === 'completed' ? 'bg-green-500' : 'bg-red-500'}`}
                    >
                      <option value='pending'>Đợi duyệt</option>
                      <option value='in-progress'>Đang giao</option>
                      <option value='completed'>Hoàn thành</option>
                      <option value='canceled'>Đã hủy</option>
                    </select>
                  </td>
                </tr>
              ))
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
