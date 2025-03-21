import React, { useState } from 'react'
import EmailTextField from '~/components/ui/EmailTextField'
import PasswordTextField from '~/components/ui/PasswordTextField'
import { Button } from '~/components/ui/Button'
import CustomSelect from '~/components/ui/CustomSelect'
import NumericTextField from '~/components/ui/NumericTextField'
import RequiredTextField from '~/components/ui/RequiredTextField'
import NameTextField from '~/components/ui/NameTextField'
import CustomDatePicker from '~/components/ui/CustomDatePicker'

export default function SignUp() {
  const Genders = ['Nam', 'Nữ', 'Khác']

  const gendersOptions = Genders.map((gender) => ({
    label: gender,
    value: gender,
  }))

  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const [birthday, setBirthday] = useState('')

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='w-[480px] my-12 px-6 py-8 bg-white rounded-xl flex flex-col gap-6 shadow-md'>
        <div className='text-center text-3xl font-bold leading-loose'>Tạo tài khoản</div>
        <div className='flex flex-col gap-4'>
          <RequiredTextField label='Tên tài khoản' value={username} />
          <NameTextField label='Họ và tên' value={name} />
          <EmailTextField label='Địa chỉ email' value={email} />
          <CustomSelect label='Giới tính' options={gendersOptions} value={gender} />
          <CustomDatePicker label='Ngày sinh' value={birthday} />
          <NumericTextField label='Số điện thoại' value={phone} />
          <PasswordTextField confirm label='Mật khẩu' value={password} />
        </div>
        <Button
          variant='outline'
          className='w-full h-12 py-2.5 bg-third text-white rounded-lg cursor-pointer'
        >
          Đăng ký
        </Button>
        <div className='text-center'>
          Đã có tài khoản?{' '}
          <Button variant='none' className='text-third font-bold cursor-pointer'>
            Đăng nhập
          </Button>
        </div>
      </div>
    </div>
  )
}
