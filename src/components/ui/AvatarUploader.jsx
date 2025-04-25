import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import { toast } from 'react-toastify'

const AvatarUploader = ({ currentAvatar, onAvatarChange, isEditing }) => {
  const [avatar, setAvatar] = useState(currentAvatar || '/path/to/default-avatar.png')
  const [isLoading, setIsLoading] = useState(false)

  const handleImageChange = async (e) => {
    const file = e.target.files[0]
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/gif']
      if (!validTypes.includes(file.type)) {
        toast.error('Chỉ chấp nhận các định dạng ảnh: JPEG, PNG, GIF.')
        return
      }

      const maxSize = 2 * 1024 * 1024
      if (file.size > maxSize) {
        toast.error('Kích thước ảnh không được vượt quá 2MB.')
        return
      }

      setIsLoading(true)
      try {
        const imageUrl = URL.createObjectURL(file)
        setAvatar(imageUrl)
        await onAvatarChange(file)
        toast.success('Ảnh đại diện đã được cập nhật thành công!')
      } catch (error) {
        console.error('Error uploading avatar:', error)
        toast.error('Có lỗi xảy ra khi tải ảnh.')
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='mb-4 flex justify-center'>
        {isLoading ? (
          <div className='text-gray-500'>Đang tải...</div>
        ) : avatar ? (
          <img
            src={avatar}
            alt='Avatar'
            className='w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover border border-gray-300'
          />
        ) : (
          <div className='w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-gray-200 flex items-center justify-center'>
            <span className='text-gray-500'>Chưa có ảnh</span>
          </div>
        )}
      </div>

      {isEditing && (
        <>
          <input
            type='file'
            accept='image/*'
            id='avatar-upload'
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
          <label htmlFor='avatar-upload'>
            <Button
              variant='outlined'
              startIcon={<PhotoCameraIcon />}
              component='span'
              sx={{
                color: '#000',
                borderColor: '#ccc',
                padding: '8px 16px',
                borderRadius: '24px',
                fontWeight: 'bold',
                fontSize: '14px',
                textTransform: 'none',
              }}
            >
              Đổi hình
            </Button>
          </label>
        </>
      )}
    </div>
  )
}

AvatarUploader.propTypes = {
  currentAvatar: PropTypes.string,
  onAvatarChange: PropTypes.func.isRequired,
}

export default AvatarUploader
