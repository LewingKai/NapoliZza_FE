import { TablePagination } from '@mui/material'
import { useEffect, useState } from 'react'
import AdminApi from '~/api/adminApi'
import DishApi from '~/api/dishApi'
import RowProduct from './components/RowProduct'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import PopupAddProduct from './components/PopupAddProduct'

export default function ManageFood() {
  const [category, setCategory] = useState('Pizza')
  const [skipPage, setSkipPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(20)
  const [pageNumber, setPageNumber] = useState(1)
  const [searchValue, setSearchValue] = useState('')
  const [dishList, setDishList] = useState([])
  const [sortList, setSortList] = useState([1])
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleChangeCategoryFilter = (event) => setCategory(event.target.value)
  const handleChangePage = (_, newPage) => setSkipPage(newPage)
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setSkipPage(0)
  }

  const handleOpenModal = () => setIsModalOpen(true)
  const onCloseModal = () => setIsModalOpen(false)

  const fetchProducts = async () => {
    setIsLoading(true)
    try {
      const res = await DishApi.searchDish(
        rowsPerPage,
        skipPage + 1,
        searchValue,
        category,
        sortList,
      )
      setDishList(res.dishes)
      setPageNumber(res.pagination.totalPages)
    } catch (error) {
      console.log('Có lỗi xảy ra', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmitSearch = () => {
    setSkipPage(0)
    fetchProducts()
  }

  useEffect(() => {
    fetchProducts()
  }, [skipPage, rowsPerPage, category, sortList])

  return (
    <div className='w-full flex flex-col items-center gap-5 bg-[#F5F6FA] py-5'>
      <h1 className='text-[35px] uppercase font-bold text-center'>Quản lý sản phẩm</h1>
      <div className='bg-white shadow-md rounded-[10px] px-10 py-5 w-[75vw] mb-10 border-2 border-[#D5D5D5]'>
        <div className='flex justify-between items-center mb-4'>
          <div className='flex gap-5'>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmitSearch()
              }}
              className='border-2 flex items-center rounded-md w-[20vw] px-3 py-1 border-[#212B36] border-opacity-60'
            >
              <i className='bx bx-search-alt-2 text-2xl'></i>
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className='outline-none placeholder:text-slate-400 px-3 py-2 w-full'
                placeholder='Tìm kiếm tên sản phẩm...'
              />
            </form>

            <select
              value={category}
              onChange={handleChangeCategoryFilter}
              className='border-2 py-2 px-5 rounded-md border-[#212B36]'
            >
              <option value='Pizza'>Pizza</option>
              <option value='Appetizer'>Appetizer</option>
              <option value='Salad'>Salad</option>
              <option value='Pasta'>Pasta</option>
              <option value='Drinks'>Drinks</option>
              <option value='Topping'>Topping</option>
              <option value='Delivery-combo'>Delivery-combo</option>
              <option value='Seasonal'>Seasonal</option>
              <option value='Desserts'>Desserts</option>
              <option value='Market'>Market</option>
              <option value='All'>All</option>
            </select>
          </div>

          <button
            onClick={handleOpenModal}
            className='flex justify-center items-center rounded-3xl gap-2 p-2 bg-blue-800'
          >
            <FontAwesomeIcon
              icon={faPlus}
              size='lg'
              color='black'
              className='w-[20px] h-[20px] p-2 bg-white rounded-full'
            />
            <p className='text-white'>Thêm sản phẩm</p>
          </button>
        </div>

        <table className='w-full border-collapse border border-[#D5D5D5]'>
          <thead>
            <tr>
              <th className='p-2 border-y-2 border-[#D5D5D5] border-l-2 font-bold text-[15px] text-center'>
                STT
              </th>
              <th className='p-2 border-y-2 border-[#D5D5D5] font-bold text-[15px] text-center'>
                Ảnh
              </th>
              <th className='p-2 border-y-2 border-[#D5D5D5] font-bold text-[15px] text-center'>
                Tên sản phẩm
              </th>
              <th className='p-2 border-y-2 border-[#D5D5D5] font-bold text-[15px] text-center'>
                Thông tin chi tiết
              </th>
              {/* <th className='p-2 border-y-2 border-[#D5D5D5] font-bold text-[15px] text-center'>Nguyên liệu</th> */}
              <th className='p-2 border-y-2 border-[#D5D5D5] font-bold text-[15px] text-center'>
                Đã bán
              </th>
              <th className='p-2 border-y-2 border-[#D5D5D5] font-bold text-[15px] text-center'>
                Giá
              </th>
              <th className='p-2 border-y-2 border-[#D5D5D5] border-r-2 font-bold text-[15px] text-center'>
                Công cụ
              </th>
            </tr>
          </thead>
          <tbody>
            {dishList.length > 0 ? (
              dishList.map((val, index) => (
                <RowProduct
                  key={val._id}
                  val={val}
                  index={skipPage * rowsPerPage + index + 1}
                  fetchProducts={fetchProducts}
                />
              ))
            ) : (
              <tr>
                <td colSpan='8' className='text-center p-4'>
                  Không có sản phẩm nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className='mt-1'>
          <TablePagination
            component='div'
            page={skipPage}
            count={pageNumber * rowsPerPage}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[5, 10, 20, 50]}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>

      <PopupAddProduct isOpen={isModalOpen} onClose={onCloseModal} fetchProducts={fetchProducts} />
    </div>
  )
}
