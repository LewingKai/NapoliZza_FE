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

import AdminApi from '~/api/adminApi'
import { toast } from 'react-toastify'

export default function PopupAddProduct({ isOpen, onClose, fetchProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  const [isLoading, setIsLoading] = useState(false)

  // Inputs
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Pizza')
  const [stock, setStock] = useState('')
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState(0)
  const [judgeContent, setJudgeContent] = useState('')
  const [ingredient, setIngredient] = useState('')
  const [ingredientList, setIngredientList] = useState([])

  // Images
  const [dishImagePreview, setDishImagePreview] = useState(null)
  const [dishImageFile, setDishImageFile] = useState(null)

  const [ingredientImagePreviews, setIngredientImagePreviews] = useState([null, null])
  const [ingredientImageFiles, setIngredientImageFiles] = useState([null, null])

  useEffect(() => {
    setIsModalOpen(isOpen)
  }, [isOpen])

  const handleClose = () => {
    // Reset all states
    setProductName('')
    setDescription('')
    setCategory('Pizza')
    setStock('')
    setPrice('')
    setDiscount(0)
    setJudgeContent('')
    setIngredient('')
    setIngredientList([])
    setDishImageFile(null)
    setDishImagePreview(null)
    setIngredientImageFiles([null, null])
    setIngredientImagePreviews([null, null])
    onClose()
    setIsModalOpen(false)
  }

  const handleDeleteChip = (item) => {
    setIngredientList((prevList) => prevList.filter((i) => i !== item))
  }

  const handleUploadDishImage = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setDishImageFile(file)
    setDishImagePreview(URL.createObjectURL(file))
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

  const handleAddIngredient = (e) => {
    if (e.key === 'Enter' && ingredient.trim() !== '') {
      e.preventDefault()
      setIngredientList((prev) => [...prev, ingredient.trim()])
      setIngredient('')
    }
  }

  const handleAddProduct = async () => {
    setIsLoading(true)
    try {
      const product = new FormData()
      product.append('name', productName)
      product.append('description', description)
      product.append('available', stock)
      product.append('category', category)
      product.append('price', price)
      product.append('discount', discount)
      product.append('judgeContent', judgeContent)
      product.append('ingredients', JSON.stringify(ingredientList))
      product.append('dishImg', dishImageFile)
      ingredientImageFiles.forEach((file) => {
        if (file) product.append('ingredientImgs', file)
      })

      await AdminApi.addADish(product)
      toast.success('Thêm thành công món ăn mới!')
      fetchProducts()
      handleClose()
    } catch (error) {
      toast.error('Không thể thêm món ăn!')
      console.error('Error adding product:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Modal open={isModalOpen} onClose={handleClose}>
      <Box
        sx={{
          maxHeight: '90vh',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          borderRadius: '10px',
        }}
        className='bg-white p-6 rounded-md shadow-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[35vw] flex flex-col items-center'
      >
        <h2 className='text-3xl font-bold text-center uppercase text-blue-800 mb-5'>
          Thêm mới món ăn
        </h2>

        <div className='space-y-2 flex flex-col gap-1'>
          {/* Dish Image Upload */}
          <div className='w-full flex justify-center'>
            <div className='w-[30vw] h-[15vw] relative'>
              <img
                src={dishImagePreview}
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
                <input type='file' accept='image/*' hidden onChange={handleUploadDishImage} />
              </Button>
            </div>
          </div>

          <strong>Tên món ăn:</strong>
          <TextareaAutosize
            minRows={1}
            placeholder='Tên món ăn...'
            style={{ width: '100%', borderWidth: '2px', padding: '5px' }}
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <strong>Mô tả món ăn:</strong>
          <TextareaAutosize
            minRows={1}
            placeholder='Mô tả món ăn...'
            style={{ width: '100%', borderWidth: '2px', padding: '5px' }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className='flex items-center gap-5'>
            <strong>Danh mục món ăn:</strong>
            <FormControl>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                sx={{ width: '100%', fontSize: '15px' }}
              >
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
              </Select>
            </FormControl>
          </div>

          <div className='flex gap-5'>
            <TextField
              label='Số lượng'
              variant='outlined'
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
            <TextField
              label='Giá món ăn'
              variant='outlined'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              label='Giảm giá'
              variant='outlined'
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>

          {/* Ingredients input */}
          <div className='flex gap-2 items-end mb-5'>
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
            {ingredientList.map((item) => (
              <Chip label={item} variant='outlined' onDelete={() => handleDeleteChip(item)} />
            ))}
          </div>

          {/* Ingredient images */}
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

        <div className='w-[30vw] flex justify-center items-center gap-5 '>
          <button
            onClick={handleClose}
            className='mt-4 px-4 py-2 bg-red-500 text-white rounded-md w-[10vw]'
          >
            Đóng
          </button>
          <button
            onClick={handleAddProduct}
            className='mt-4 px-4 py-2 bg-green-500 text-white rounded-md w-[10vw]'
            disabled={isLoading}
          >
            {isLoading ? 'Đang lưu...' : 'Lưu'}
          </button>
        </div>
      </Box>
    </Modal>
  )
}
