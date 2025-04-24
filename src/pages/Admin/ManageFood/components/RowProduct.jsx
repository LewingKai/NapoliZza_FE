// RowProduct.jsx
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import PopupProduct from './PopupProduct'
import AdminApi from '~/api/adminApi'
import { toast } from 'react-toastify'

const RowProduct = ({ val, index, fetchProducts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const handleDeleteProduct = async () => {
    try {
      const res = await AdminApi.handleDeleteDish(val._id)
      fetchProducts()
      toast.success('Đã xóa món ăn thành công!')
      return res
    } catch (error) {
      toast.error('Không thể xóa món ăn!')
      console.error('Không thể xóa sản phẩm: ', error)
    }
  }

  return (
    <>
      <tr key={index} className='border-t-2 border-[#D5D5D5]'>
        <td className='p-2 text-[15px] text-center'>{index}</td>
        <td className='p-2 text-[15px]'>
          <img
            src={val.dishImg.url}
            alt='Ảnh sản phẩm'
            className='w-[7vw] h-[15vh] object-cover rounded-lg mx-auto'
          />
        </td>
        <td className='p-2 max-w-[12vw] text-[15px] text-center'>{val.name}</td>
        <td className='p-2 text-[15px]'>
          <strong>Đánh giá: </strong>
          {val.rating} <br />
          <strong>Số lượng còn: </strong>
          {val.available} <br />
          <strong>Danh mục: </strong>
          {val.category}
        </td>
        <td className='p-2 text-[15px] text-center'>{val.quantitySold}</td>
        <td className='p-2 text-[15px] text-center'>{val.price}vnđ</td>
        <td className='p-2 text-[15px] text-center'>
          <div className='py-2.5 px-5 flex justify-center'>
            <div
              onClick={openModal}
              className='cursor-pointer bg-[#FAFBFD] rounded-tl-2xl rounded-bl-2xl border-[#D5D5D5] border flex justify-center items-center py-2 px-5'
            >
              <FontAwesomeIcon icon={faPenToSquare} size='lg' color='black' />
            </div>
            <div
              onClick={handleDeleteProduct}
              className='cursor-pointer bg-[#FAFBFD] rounded-tr-2xl rounded-br-2xl border-[#D5D5D5] border flex justify-center items-center py-2 px-5'
            >
              <FontAwesomeIcon icon={faTrashCan} size='lg' color='red' />
            </div>
          </div>
        </td>
      </tr>

      <PopupProduct isOpen={isModalOpen} onClose={closeModal} product={val} />
    </>
  )
}

export default RowProduct
