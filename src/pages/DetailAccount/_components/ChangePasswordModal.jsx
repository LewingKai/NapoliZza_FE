import React, { useState } from 'react'
import { Modal, Box } from '@mui/material'
import PasswordTextField from '~/components/ui/PasswordTextField'
import { Button } from '~/components/ui/Button'
import accountApi from '~/api/accountApi'
import { toast } from 'react-toastify'

export default function ChangePasswordModal({ isOpen, onClose }) {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (field, value) => {
    setPasswordData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: false }))
  }

  const handleSubmit = async () => {
    const newErrors = {}
    if (!passwordData.currentPassword)
      newErrors.currentPassword = 'Vui lòng nhập mật khẩu hiện tại.'
    if (!passwordData.newPassword) newErrors.newPassword = 'Vui lòng nhập mật khẩu mới.'
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu mới và xác nhận mật khẩu không khớp.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    try {
      await accountApi.changePassword({
        password: passwordData.currentPassword,
        newpassword: passwordData.newPassword,
      })
      toast.success('Đổi mật khẩu thành công!')
      onClose()
    } catch (error) {
      toast.error(error.response?.data?.message || 'Có lỗi xảy ra khi đổi mật khẩu.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box className='max-w-[90%] sm:max-w-[500px] p-5 bg-white rounded-lg shadow-lg mx-auto mt-20'>
        <div className='flex flex-col gap-4'>
          <div className='text-center text-2xl sm:text-3xl font-bold leading-loose mb-6'>
            Đổi mật khẩu
          </div>
          <PasswordTextField
            label='Mật khẩu hiện tại'
            value={passwordData.currentPassword}
            onChange={(value) => handleChange('currentPassword', value)}
            placeholder='Nhập mật khẩu hiện tại'
            error={errors.currentPassword}
            helperText={errors.currentPassword}
          />
          <PasswordTextField
            label='Mật khẩu mới'
            value={passwordData.newPassword}
            onChange={(value) => handleChange('newPassword', value)}
            placeholder='Nhập mật khẩu mới'
            error={errors.newPassword}
            helperText={errors.newPassword}
          />
          <PasswordTextField
            label='Xác nhận mật khẩu mới'
            value={passwordData.confirmPassword}
            onChange={(value) => handleChange('confirmPassword', value)}
            placeholder='Xác nhận mật khẩu mới'
            error={errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
          <div className='flex justify-end mt-4 space-x-2'>
            <Button
              variant='default'
              className={`bg-third ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'Đang xử lý...' : 'Lưu'}
            </Button>
            <Button variant='default' className='bg-gray-500 hover:bg-gray-700' onClick={onClose}>
              Hủy
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  )
}
