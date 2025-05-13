import * as React from 'react'
import FoodCard from '~/components/ui/FoodCard'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
} from '@mui/material'
import SearchBar from '~/components/ui/SearchBar'
import DishApi from '~/api/dishApi'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faFilter } from '@fortawesome/free-solid-svg-icons'
import { useSearchParams, useNavigate } from 'react-router-dom'

const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
    },
  },
}

const sortValue = [
  { value: 1, label: 'Giá: Tăng dần' },
  { value: 2, label: 'Giá: Giảm dần' },
  { value: 3, label: 'Số lượng: Tăng dần' },
  { value: 4, label: 'Số lượng: Giảm dần' },
]

export default function Menu() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [category, setCategory] = React.useState('')
  const itemPrePage = 20
  const [pages, setPages] = React.useState(1)
  const [pageNumber, setPageNumber] = React.useState(0)
  const [searchValue, setSearchValue] = React.useState('')
  const [dishList, setDishList] = React.useState([])
  const [sortList, setSortList] = React.useState([1])
  const [isFilterBox, setIsFilterBox] = React.useState(false)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event
    setSortList(value)
  }

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value)
  }
  const handleSubmit = () => {
    getDish()
  }
  const handleChangeCategory = (e) => {
    const value = e.target.value
    searchParams.set('category', value)
    navigate(`/mon-an?category=${value}`)
  }

  const getDish = async () => {
    try {
      const res = await DishApi.searchDish(itemPrePage, pages, searchValue, category, sortList)
      console.log(res)
      setDishList(res.dishes)
      setPageNumber(res.pagination.totalPages)
    } catch (error) {
      console.error('Lỗi khi search ', error)
    }
  }

  React.useEffect(() => {
    const categoryParam = searchParams.get('category') || 'Pizza'
    setCategory(categoryParam)
    setPages(1)
  }, [searchParams])

  React.useEffect(() => {
    if (category !== '') {
      window.scrollTo(0, 0)
      getDish()
    }
  }, [pages, category, sortList])
  return (
    <div className='py-10 p-[5vw]'>
      <div className='px-5'>
        <h1 className='text-[45px] md:text-[70px] text-black font-bold text-center '>
          Menu của chúng tôi
        </h1>
        <p className='text-center italic font-light'>
          Chào mừng bạn đến với NapoliZza – nơi hội tụ những hương vị pizza truyền thống Ý và sáng
          tạo độc đáo!
        </p>
      </div>
      <div className='mt-10 mb-5 w-full flex justify-between gap-2 px-5 md:px-10 '>
        <div className='hidden sm:flex'>
          <FormControl sx={{ m: 1, maxWidth: 300, minWidth: 150 }}>
            <InputLabel id='demo-multple-chip-label'>Xếp theo</InputLabel>
            <Select
              labelId='demo-multiple-chip-label'
              id='demo-multiple-chip'
              multiple
              value={sortList}
              onChange={handleChange}
              input={<OutlinedInput id='select-multiple-chip' label='Xếp theo' />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((item) => (
                    <Chip label={sortValue[item - 1].label} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {sortValue.map((value) => (
                <MenuItem value={value.value}>{value.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className='w-[80vw] md:w-[40vw] mx-auto flex justify-between'>
          <div className='w-[70vw] md:w-full'>
            <SearchBar
              handleChangeSearch={handleChangeSearch}
              handleSubmit={handleSubmit}
              searchValue={searchValue}
            />
          </div>
          <div className='flex sm:hidden'>
            <FontAwesomeIcon icon={faFilter} size='2xl' onClick={() => setIsFilterBox(true)} />
          </div>
        </div>
        <div className='w-[10vw] hidden sm:flex'>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Danh mục</InputLabel>
            <Select value={category} label='Danh mục' onChange={handleChangeCategory}>
              <MenuItem value='Pizza'>Pizza</MenuItem>
              <MenuItem value='Appetizer'>Appetizer</MenuItem>
              <MenuItem value='Salad'>Salad</MenuItem>
              <MenuItem value='Pasta'>Pasta</MenuItem>
              <MenuItem value='Drinks'>Drinks</MenuItem>
              <MenuItem value='Topping'>Topping</MenuItem>
              <MenuItem value='Delivery-combo'>Delivery-combo</MenuItem>
              <MenuItem value='Seasonal'>Seasonal</MenuItem>
              <MenuItem value='Desserts'>Desserts</MenuItem>
              <MenuItem value='Market'>Market</MenuItem>
              <MenuItem value='All'>All</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      {/* kết quả */}
      <div className='w-full flex flex-col items-center mt-10'>
        {dishList.length != 0 ? (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8'>
            {dishList.map((item) => (
              <FoodCard item={item} />
            ))}
          </div>
        ) : (
          <p className='text-[20px] italic'>Không có món nào phù hợp với yêu cầu của bạn!</p>
        )}
        <Stack spacing={2} className='mt-10'>
          <Pagination
            count={pageNumber}
            variant='outlined'
            shape='rounded'
            page={pages}
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'black',
                borderColor: '#555',
              },
              '& .Mui-selected': {
                backgroundColor: '#233000', // xanh dương
                color: 'white',
                borderColor: '#000',
                '&:hover': {
                  backgroundColor: '#233000',
                },
              },
            }}
            onChange={(e, value) => setPages(value)}
          />
        </Stack>
      </div>
      <Modal open={isFilterBox} className='w-[70vw] h-[30vh] m-auto'>
        <div className=' h-full w-full bg-white p-5 rounded-xl items-center'>
          <div className='flex justify-between'>
            <p className='text-[20px] font-bold uppercase text-primary'>Bộ lọc tìm kiếm</p>
            <FontAwesomeIcon icon={faClose} size='xl' onClick={() => setIsFilterBox(false)} />
          </div>
          <div className='flex flex-col gap-5 items-start mt-10'>
            <div className='w-[40vw] '>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Danh mục</InputLabel>
                <Select value={category} label='Danh mục' onChange={handleChangeCategory}>
                  <MenuItem value='Pizza'>Pizza</MenuItem>
                  <MenuItem value='Appetizer'>Appetizer</MenuItem>
                  <MenuItem value='Salad'>Salad</MenuItem>
                  <MenuItem value='Pasta'>Pasta</MenuItem>
                  <MenuItem value='Drinks'>Drinks</MenuItem>
                  <MenuItem value='Topping'>Topping</MenuItem>
                  <MenuItem value='Delivery-combo'>Delivery-combo</MenuItem>
                  <MenuItem value='Seasonal'>Seasonal</MenuItem>
                  <MenuItem value='Desserts'>Desserts</MenuItem>
                  <MenuItem value='Market'>Market</MenuItem>
                  <MenuItem value='All'>All</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ m: 1, maxWidth: 400, minWidth: 150 }}>
                <InputLabel id='demo-multple-chip-label'>Xếp theo</InputLabel>
                <Select
                  labelId='demo-multiple-chip-label'
                  id='demo-multiple-chip'
                  multiple
                  value={sortList}
                  onChange={handleChange}
                  input={<OutlinedInput id='select-multiple-chip' label='Xếp theo' />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((item) => (
                        <Chip label={sortValue[item - 1].label} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {sortValue.map((value) => (
                    <MenuItem value={value.value}>{value.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
