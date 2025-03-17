import React from 'react'
import EmailTextField from '~/components/ui/EmailTextField'
import PasswordTextField from '~/components/ui/PasswordTextField'
import { Button } from '~/components/ui/Button'

export default function SignIn() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='w-[480px] px-6 py-8 bg-white rounded-xl flex flex-col gap-7 shadow-md'>
        <div className='text-center text-black text-3xl font-bold leading-loose'>Đăng nhập</div>
        <div className='flex flex-col gap-4'>
          <EmailTextField label='Email' className='w-full' />
          <PasswordTextField label='Mật khẩu' className='w-full' />
        </div>
        <Button variant='outline' className='w-full h-10 py-2.5 bg-lime-500 text-white rounded-lg'>
          Đăng nhập
        </Button>
        <div className='text-center text-xs text-slate-600'>
          Chưa có tài khoản? <span className='text-lime-500 font-bold cursor-pointer'>Đăng ký</span>
        </div>
      </div>
    </div>
  )
}
