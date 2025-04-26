import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ValidatedTextField from '~/components/ui/ValidatedTextField'
import PasswordTextField from '~/components/ui/PasswordTextField'
import { Button } from '~/components/ui/Button'
import { validateEmail, validatePassword } from '~/utils/validation'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '~/configs'
import ScrollToTop from '~/components/Layout/ScrollToTop'
import { api } from '../../services/api.js'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '~/redux/userSlice.js'

export default function SignIn() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({})

  // Ánh xạ các trường với hàm xác thực tương ứng
  const fieldValidationMap = {
    email: validateEmail,
    password: validatePassword,
  }

  // Hàm xác thực toàn bộ biểu mẫu
  const validateForm = () => {
    const newErrors = {}
    Object.keys(formData).forEach((field) => {
      if (fieldValidationMap[field]) {
        const isValid = fieldValidationMap[field](formData[field])
        newErrors[field] = !isValid
      }
    })
    setErrors(newErrors)
    return Object.values(newErrors).every((error) => !error)
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: false }))
  }

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await api.post('/user/accountAction/login', formData)
        if (response.data.success) {
          dispatch(loginSuccess({ user: response.data.data, token: response.data.accessToken }))
          toast.success('Đăng nhập thành công!')
          navigate(routes.HOME)
        } else {
          toast.error(response.data.message || 'Login failed')
        }
      } catch (error) {
        toast.error(error.response?.data?.message || 'Login failed')
      }
    } else {
      toast.error('Đăng nhập không thành công!')
      console.log(errors)
    }
  }

  return (
    <div className='flex justify-center items-center px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md sm:max-w-lg mt-12 mb-14 px-6 py-8 bg-white rounded-xl shadow-md'>
        <div className='text-center text-2xl sm:text-3xl font-bold leading-loose mb-6'>
          Đăng nhập
        </div>
        <div className='flex flex-col gap-4'>
          <ValidatedTextField
            label='Email'
            value={formData.email}
            onChange={(value) => handleChange('email', value)}
            validationRules={validateEmail}
            errorMessage='Email không hợp lệ. Vui lòng nhập email dạng ***@gmail.com.'
            placeholder='Nhập email (@gmail.com)'
          />
          <PasswordTextField
            label='Mật khẩu'
            value={formData.password}
            onChange={(value) => handleChange('password', value)}
            placeholder='Nhập mật khẩu'
          />
        </div>
        <Button
          variant='outline'
          className='w-full h-12 mt-4 py-2.5 bg-third text-white rounded-lg cursor-pointer'
          onClick={handleSubmit}
        >
          Đăng nhập
        </Button>
        <div>
          <Link to={routes.VERIFY_OTP} onClick={ScrollToTop}>
            <Button variant='link' className='text-third font-bold'>
              Quên mật khẩu?
            </Button>
          </Link>
        </div>
        <div className='text-center'>
          Chưa có tài khoản?{' '}
          <Link to={routes.SIGNUP} onClick={ScrollToTop}>
            <Button variant='link' className='text-third font-bold'>
              Đăng ký
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
