import * as React from 'react'
import FoodCard from '~/components/ui/FoodCard'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import SearchBar from '~/components/ui/SearchBar'
import DishApi from '~/api/dishApi'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

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
  const [category, setCategory] = React.useState('pizza')
  const [itemPrePage, setItemPerPage] = React.useState(20)
  const [pages, setPages] = React.useState(1)
  const [pageNumber, setPageNumber] = React.useState(0)
  const [searchValue, setSearchValue] = React.useState('')
  const [dishList, setDishList] = React.useState([])
  const [sortList, setSortList] = React.useState([1])

  const handleChange = (event) => {
    const {
      target: { value },
    } = event
    setSortList(value)
  }

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value)
  }
  const handleSubmit = (e) => {
    getDish()
  }
  const handleChangeCategory = (e) => {
    setCategory(e.target.value)
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
    console.log('render')
    getDish()
  }, [pages, category, sortList])
  return (
    <div className='p-[1vw] sm:p-[5vw]'>
      <div className='px-10'>
        <h1 className='text-[70px] text-black font-bold text-center '>Menu của chúng tôi</h1>
        <p className='text-center'>
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
          <div className='flex sm:hidden '>
            <FontAwesomeIcon icon={faFilter} size='2xl' />
          </div>
        </div>
        <div className='w-[10vw] hidden sm:flex'>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Danh mục</InputLabel>
            <Select value={category} label='Danh mục' onChange={handleChangeCategory}>
              <MenuItem value='pizza'>Pizza</MenuItem>
              <MenuItem value='appetizer'>Appetizer</MenuItem>
              <MenuItem value='salad'>Salad</MenuItem>
              <MenuItem value='pasta'>Pasta</MenuItem>
              <MenuItem value='drinks'>Drinks</MenuItem>
              <MenuItem value='topping'>Topping</MenuItem>
              <MenuItem value='delivery-combo'>Delivery-combo</MenuItem>
              <MenuItem value='seasonal'>Seasonal</MenuItem>
              <MenuItem value='desserts'>Desserts</MenuItem>
              <MenuItem value='market'>Market</MenuItem>
              <MenuItem value='all'>All</MenuItem>
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
      {/* <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={-70}
            slidesPerView={4}
            navigation // Nút điều hướng
            pagination={{ clickable: true }} // Thanh chuyển slide
            className=' mt-10 max:w-90vw h-[540px]'
          >
            {food.map((item, index) => (
              <SwiperSlide key={index}>
                <FoodCard item={item} />
              </SwiperSlide>
            ))} 
          </Swiper> */}
    </div>
  )
}
