import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ValidatedTextField from '~/components/ui/ValidatedTextField'
import PasswordTextField from '~/components/ui/PasswordTextField'
import { Button } from '~/components/ui/Button'
import CustomSelect from '~/components/ui/CustomSelect'
import CustomDatePicker from '~/components/ui/CustomDatePicker'
import { Link, useNavigate } from 'react-router-dom'
import {
  validateRequired,
  validateName,
  validateEmail,
  validatePhone,
  validatePassword,
  validateGender,
  validateBirthday,
} from '~/utils/validation'
import { routes } from '~/configs'
import ScrollToTop from '~/components/Layout/ScrollToTop'
import { api } from '~/apis'

export default function SignUp() {
  const Genders = ['Nam', 'Nữ', 'Khác']
  const navigate = useNavigate()

  const gendersOptions = Genders.map((gender) => ({
    label: gender,
    value: gender,
  }))

  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    gender: '',
    birthday: '',
  })

  const [errors, setErrors] = useState({})

  // Ánh xạ các trường với hàm xác thực tương ứng
  const fieldValidationMap = {
    username: validateRequired,
    name: validateName,
    email: validateEmail,
    phone: validatePhone,
    password: validatePassword,
    gender: validateGender,
    birthday: validateBirthday,
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
    setErrors((prev) => ({ ...prev, [field]: false })) // Xóa lỗi khi người dùng nhập lại
  }

  const handleSubmit = async () => {
    if (validateForm()) {
      console.log(errors)
      const response = await api.post('/user/accountAction/register', formData)
      if (response.data.success) {
        toast.success('Đăng ký thành công!')
        navigate(routes.SIGNIN)
      } else {
        toast.error('Đăng ký lỗi')
      }
    } else {
      toast.error('Vui lòng điền đầy đủ thông tin hợp lệ!')
    }
  }

  return (
    <div className='flex justify-center items-center'>
      <ToastContainer />
      <div className='w-[480px] my-12 px-6 py-8 bg-white rounded-xl flex flex-col gap-6 shadow-md'>
        <div className='text-center text-3xl font-bold leading-loose'>Tạo tài khoản</div>
        <div className='flex flex-col gap-4'>
          <ValidatedTextField
            label='Tên tài khoản'
            value={formData.username}
            onChange={(value) => handleChange('username', value)}
            validationRules={validateRequired}
            errorMessage='Tên tài khoản không được để trống.'
            placeholder='Nhập tên tài khoản'
          />
          <ValidatedTextField
            label='Họ và tên'
            value={formData.name}
            onChange={(value) => handleChange('name', value)}
            validationRules={validateName}
            errorMessage='Họ và tên không hợp lệ. Vui lòng viết hoa chữ cái đầu mỗi từ.'
            placeholder='Nhập họ và tên'
          />
          <ValidatedTextField
            label='Địa chỉ email'
            value={formData.email}
            onChange={(value) => handleChange('email', value)}
            validationRules={validateEmail}
            errorMessage='Email không hợp lệ. Vui lòng nhập email dạng ***@gmail.com.'
            placeholder='Nhập email (@gmail.com)'
          />
          <CustomSelect
            label='Giới tính'
            options={gendersOptions}
            value={formData.gender}
            onChange={(value) => handleChange('gender', value)}
            placeholder='Chọn giới tính'
          />
          <CustomDatePicker
            label='Ngày sinh'
            value={formData.birthday}
            onChange={(value) => handleChange('birthday', value)}
            placeholder='Chọn ngày sinh'
          />
          <ValidatedTextField
            label='Số điện thoại'
            value={formData.phone}
            onChange={(value) => handleChange('phone', value)}
            validationRules={validatePhone}
            errorMessage='Số điện thoại không hợp lệ. Vui lòng nhập đúng 10 chữ số.'
            placeholder='Nhập số điện thoại (10 chữ số)'
          />
          <PasswordTextField
            confirm
            label='Mật khẩu'
            value={formData.password}
            onChange={(value) => handleChange('password', value)}
            placeholder='Nhập mật khẩu'
          />
        </div>
        <Button
          variant='outline'
          className='w-full h-12 py-2.5 bg-third text-white rounded-lg cursor-pointer'
          onClick={handleSubmit}
        >
          Đăng ký
        </Button>
        <div className='text-center'>
          Đã có tài khoản?{' '}
          <Link to={routes.SIGNIN} onClick={ScrollToTop}>
            <Button variant='link' className='text-third font-bold'>
              Đăng nhập
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
