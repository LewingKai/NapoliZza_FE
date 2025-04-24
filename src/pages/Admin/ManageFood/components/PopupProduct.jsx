import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Chip,
  FormControl,
  MenuItem,
  Modal,
  Select,
  TextareaAutosize,
  TextField,
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'
import AdminApi from '~/api/adminApi'

export default function PopupProduct({ isOpen, product, onClose, fetchProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  const [name, setName] = useState('')
  const [available, setAvailable] = useState('')
  const [price, setPrice] = useState('')
  const [desc, setDesc] = useState('')
  const [category, setCategory] = useState('pizza')
  const [dishImgPreview, setDishImgPreview] = useState('')
  const [dishImgFile, setDishImgFile] = useState(null)

  const [ingredient, setIngredient] = useState('')
  const [ingredientList, setIngredientList] = useState([])

  const [ingredientImagePreviews, setIngredientImagePreviews] = useState([null, null])
  const [ingredientImageFiles, setIngredientImageFiles] = useState([null, null])

  useEffect(() => {
    setIsModalOpen(isOpen)
    if (product) {
      setName(product.name || '')
      setAvailable(product.available || '')
      setPrice(product.price || '')
      setDesc(product.description || '')
      setCategory(product.category || 'pizza')
      setDishImgPreview(product?.dishImg?.url || '')
      setIngredientList(product.ingredients || [])
      setIngredientImagePreviews([
        product.ingredientImgs?.[0]?.url || null,
        product.ingredientImgs?.[1]?.url || null,
      ])
    }
  }, [isOpen, product])

  const handleClose = () => {
    setIsModalOpen(false)
    onClose()
  }

  const handleAddIngredient = (e) => {
    if (e.key === 'Enter' && ingredient.trim() !== '') {
      e.preventDefault()
      setIngredientList((prev) => [...prev, ingredient.trim()])
      setIngredient('')
    }
  }

  const handleDeleteChip = (item) => {
    setIngredientList((prevList) => prevList.filter((i) => i !== item))
  }

  const handleUploadDishImage = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setDishImgFile(file)
    setDishImgPreview(URL.createObjectURL(file))
  }

  const handleUploadIngredientImage = (e, index) => {
    const file = e.target.files[0]
    if (!file) return
    const previews = [...ingredientImagePreviews]
    const files = [...ingredientImageFiles]
    previews[index] = URL.createObjectURL(file)
    files[index] = file
    setIngredientImagePreviews(previews)
    setIngredientImageFiles(files)
  }

  const handleUpdateDish = async () => {
    try {
      const updated = new FormData()

      // Only append if value has changed
      if (name !== product.name) updated.append('name', name)
      if (available !== product.available) updated.append('available', available)
      if (price !== product.price) updated.append('price', price)
      if (desc !== product.description) updated.append('description', desc)
      if (category !== product.category) updated.append('category', category)

      // Only append ingredients if the list has changed
      if (JSON.stringify(ingredientList) !== JSON.stringify(product.ingredients)) {
        updated.append('ingredients', JSON.stringify(ingredientList))
      }

      // If dish image is uploaded, append it
      if (dishImgFile) {
        updated.append('dishImg', dishImgFile)
      }

      // Append ingredient images if they are updated
      ingredientImageFiles.forEach((file) => {
        if (file) updated.append('ingredientImgs', file)
      })

      // Send request to update dish
      await AdminApi.handleUpdateDish(product._id, updated)
      toast.success('Cập nhật món ăn thành công!')
      handleClose()
      fetchProducts() // Refresh product list after update
    } catch (error) {
      toast.error('Cập nhật thất bại!')
      console.error('Update error:', error)
    }
  }

  return (
    <Modal open={isModalOpen} onClose={handleClose}>
      <Box
        sx={{
          maxHeight: '90vh',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
          borderRadius: '10px',
        }}
        className='bg-white p-6 rounded-md shadow-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45vw]'
      >
        <h2 className='text-3xl font-bold text-center uppercase text-blue-800 mb-5'>
          Chi tiết món ăn
        </h2>

        <div className='space-y-4'>
          <div className='w-full h-[40vh] relative'>
            <img
              src={dishImgPreview}
              alt='Dish'
              className='w-full h-full object-cover rounded-xl'
            />
            <Button
              variant='contained'
              component='label'
              sx={{
                position: 'absolute',
                width: '100%',
                top: '0px',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderRadius: '15px',
              }}
            >
              Upload ảnh
              <input type='file' accept='image/*' hidden onChange={handleUploadDishImage} />
            </Button>
          </div>

          <div>
            <strong>Tên món:</strong>
            <TextareaAutosize
              minRows={1}
              style={{ width: '100%', borderWidth: '2px', padding: '5px' }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <strong>Mô tả:</strong>
            <TextareaAutosize
              minRows={2}
              style={{ width: '100%', borderWidth: '2px', padding: '5px' }}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div className='flex items-center gap-5'>
            <strong>Danh mục món ăn:</strong>
            <FormControl>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                sx={{ width: '100%', fontSize: '15px' }}
              >
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
              </Select>
            </FormControl>
          </div>

          <div>
            <div className='flex gap-2 items-end mb-3'>
              <strong>Nguyên liệu:</strong>
              <TextField
                value={ingredient}
                variant='filled'
                placeholder='Nhấn Enter để thêm'
                onChange={(e) => setIngredient(e.target.value)}
                onKeyDown={handleAddIngredient}
              />
            </div>
            <div className='flex gap-2 flex-wrap'>
              {ingredientList.map((item, idx) => (
                <Chip key={idx} label={item} onDelete={() => handleDeleteChip(item)} />
              ))}
            </div>
          </div>

          <div className='flex gap-4 items-center'>
            <TextField
              label='Số lượng'
              variant='outlined'
              value={available}
              onChange={(e) => setAvailable(e.target.value)}
              fullWidth
            />
            <TextField
              label='Giá (VNĐ)'
              variant='outlined'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              fullWidth
            />
          </div>

          <div className='flex items-center gap-2'>
            <span className='font-bold text-lg'>Đánh giá:</span>
            <span>{product.rating}</span>
            <FontAwesomeIcon icon={faStar} color='#ffdd46' />
          </div>

          <div className='flex justify-between px-10'>
            {[0, 1].map((index) => (
              <div key={index} className='w-[12vw] h-[15vw] relative'>
                <img
                  src={ingredientImagePreviews[index]}
                  className='w-full h-full border-1 rounded-[15px] border-[#acacac] object-cover'
                />
                <Button
                  variant='contained'
                  component='label'
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    top: '0px',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    borderRadius: '15px',
                  }}
                >
                  Upload ảnh
                  <input
                    type='file'
                    accept='image/*'
                    hidden
                    onChange={(e) => handleUploadIngredientImage(e, index)}
                  />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className='w-full flex justify-center gap-5 mt-5'>
          <button onClick={handleClose} className='px-6 py-2 bg-red-500 text-white rounded-md'>
            Đóng
          </button>
          <button
            onClick={handleUpdateDish}
            className='px-6 py-2 bg-green-500 text-white rounded-md'
          >
            Lưu
          </button>
        </div>
      </Box>
    </Modal>
  )
}
