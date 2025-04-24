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

  const handleChange = (field, value) => {
    setPasswordData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('Mật khẩu mới và xác nhận mật khẩu không khớp.')
      return
    }

    try {
      await accountApi.changePassword({
        password: passwordData.currentPassword,
        newpassword: passwordData.newPassword,
      })
      toast.success('Đổi mật khẩu thành công!')
      onClose()
    } catch (error) {
      toast.error('Có lỗi xảy ra khi đổi mật khẩu.')
    }
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box className='max-w-[500px] p-5 bg-white rounded-lg shadow-lg mx-auto mt-20'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-3xl text-center font-bold mb-4'>Đổi mật khẩu</h2>
          <PasswordTextField
            label='Mật khẩu hiện tại'
            value={passwordData.currentPassword}
            onChange={(value) => handleChange('currentPassword', value)}
            placeholder='Nhập mật khẩu hiện tại'
          />
          <PasswordTextField
            label='Mật khẩu mới'
            value={passwordData.newPassword}
            onChange={(value) => handleChange('newPassword', value)}
            placeholder='Nhập mật khẩu mới'
          />
          <PasswordTextField
            label='Xác nhận mật khẩu mới'
            value={passwordData.confirmPassword}
            onChange={(value) => handleChange('confirmPassword', value)}
            placeholder='Xác nhận mật khẩu mới'
          />
          <div className='flex justify-end mt-4 space-x-2'>
            <Button variant='default' className='bg-third' onClick={handleSubmit}>
              Lưu
            </Button>
            <Button variant='default' className='bg-third' onClick={onClose}>
              Hủy
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  )
}
