import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AuthApi from '~/api/authApi'
import { toast } from 'react-toastify'
import { Button } from '~/components/ui/Button'
import { routes } from '~/configs'
import PasswordTextField from '~/components/ui/PasswordTextField'

export default function ChangePasswordByOTP() {
  const [newPassword, setNewPassword] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const email = location.state?.email
  const otp = location.state?.otp

  const handleChangePassword = async () => {
    try {
      await AuthApi.changePassByOTP(email, otp, newPassword)
      toast.success('Đổi mật khẩu thành công.')
      navigate(`${routes.SIGNIN}`)
    } catch (error) {
      toast.error(error.response?.data?.message || 'Có lỗi xảy ra khi đổi mật khẩu.')
    }
  }

  return (
    <div className='flex justify-center items-center px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md sm:max-w-lg mt-12 mb-14 px-6 py-8 bg-white rounded-xl shadow-md'>
        <div className='text-center text-2xl sm:text-3xl font-bold leading-loose mb-6'>
          Đổi mật khẩu
        </div>
        <PasswordTextField
          label='Mật khẩu mới'
          value={newPassword}
          onChange={setNewPassword}
          placeholder='Nhập mật khẩu mới'
        />
        <Button
          variant='default'
          size='lg'
          className='bg-third w-full mt-4'
          onClick={handleChangePassword}
        >
          Đổi mật khẩu
        </Button>
      </div>
    </div>
  )
}
