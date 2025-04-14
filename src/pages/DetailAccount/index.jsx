import React, { useEffect, useState, useRef } from 'react'
import accountApi from '~/apis/account'
import { useSelector } from 'react-redux'
import DisabledTextField from '~/components/ui/DisabledTextField'
import CustomSelect from '~/components/ui/CustomSelect'

export default function DetailAccount() {
  const [account, setAccount] = useState(null)
  const token = useSelector((state) => state.user.token)
  const isFetched = useRef(false)

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await accountApi.getAccount(token)
        if (response.success) {
          setAccount(response.data) // Gán đúng dữ liệu từ response.data
        }
      } catch (error) {
        console.error(error)
      }
    }

    if (!isFetched.current) {
      fetchAccount()
      isFetched.current = true
    }
  }, [token])

  if (!account) {
    return <div>Đang tải thông tin tài khoản...</div>
  }

  return (
    <div className='p-6'>
      <h1 className='text-5xl text-center font-bold mb-12'>Thông tin tài khoản</h1>
      <div className='space-y-4'>
        <DisabledTextField label='Tên tài khoản' value={account.username || ''} />
        <DisabledTextField label='Họ và tên' value={account.name || ''} />
        <DisabledTextField label='Email' value={account.email || ''} />
        <DisabledTextField label='Số điện thoại' value={account.phone || ''} />
        <DisabledTextField label='Giới tính' value={account.gender || ''} />
        <DisabledTextField
          label='Ngày sinh'
          value={new Date(account.birthday).toLocaleDateString('vi-VN') || ''}
        />
      </div>
    </div>
  )
}
