import React, { useEffect, useState, useRef } from 'react'
import accountApi from '~/api/account'
import DisabledTextField from '~/components/ui/DisabledTextField'
import ValidatedTextField from '~/components/ui/ValidatedTextField'
import CustomSelect from '~/components/ui/CustomSelect'
import AvatarUploader from '~/components/ui/AvatarUploader'
import { toast } from 'react-toastify'
import defaultAvatar from '~/assets/images/DetailAccount/default-avatar.jpg'

export default function DetailAccount() {
  const [account, setAccount] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({})
  const [avatar, setAvatar] = useState(null)
  const isFetched = useRef(false)

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await accountApi.getAccount()
        if (response.success) {
          setAccount(response.data)
          setFormData(response.data)
          setAvatar(response.data.avatar)
        }
      } catch (error) {
        console.error(error)
        toast.error('Không thể tải thông tin tài khoản.')
      }
    }

    if (!isFetched.current) {
      fetchAccount()
      isFetched.current = true
    }
  })

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAvatarChange = (file) => {
    setAvatar(URL.createObjectURL(file))
    setFormData((prev) => ({ ...prev, avatar: file }))
  }

  const handleSave = async () => {
    try {
      const formDataToSend = new FormData()
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key])
      })

      const response = await accountApi.updateAccount(formDataToSend)
      if (response.success) {
        setAccount(formData)
        setIsEditing(false)
        toast.success('Cập nhật thông tin thành công!')
      } else {
        toast.error('Cập nhật thông tin thất bại.')
      }
    } catch (error) {
      console.error(error)
      toast.error('Có lỗi xảy ra khi cập nhật thông tin.')
    }
  }

  if (!account) {
    return <div>Đang tải thông tin tài khoản...</div>
  }

  return (
    <div className='p-6'>
      <h1 className='text-5xl text-center font-bold mb-12'>Thông tin tài khoản</h1>
      <div className='space-y-4'>
        <div className='flex justify-center mb-6'>
          <AvatarUploader
            currentAvatar={avatar || defaultAvatar}
            onAvatarChange={handleAvatarChange}
          />
        </div>
        {isEditing ? (
          <>
            <ValidatedTextField
              label='Tên tài khoản'
              value={formData.username || ''}
              onChange={(value) => handleChange('username', value)}
              placeholder='Nhập tên tài khoản'
            />
            <ValidatedTextField
              label='Họ và tên'
              value={formData.name || ''}
              onChange={(value) => handleChange('name', value)}
              placeholder='Nhập họ và tên'
            />
            <ValidatedTextField
              label='Email'
              value={formData.email || ''}
              onChange={(value) => handleChange('email', value)}
              placeholder='Nhập email'
            />
            <ValidatedTextField
              label='Số điện thoại'
              value={formData.phone || ''}
              onChange={(value) => handleChange('phone', value)}
              placeholder='Nhập số điện thoại'
            />
            <CustomSelect
              label='Giới tính'
              options={[
                { label: 'Nam', value: 'male' },
                { label: 'Nữ', value: 'female' },
                { label: 'Khác', value: 'other' },
              ]}
              value={formData.gender || ''}
              onChange={(value) => handleChange('gender', value)}
              placeholder='Chọn giới tính'
            />
            <ValidatedTextField
              label='Ngày sinh'
              value={formData.birthday || ''}
              onChange={(value) => handleChange('birthday', value)}
              placeholder='Nhập ngày sinh'
            />
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={handleSave}>
              Lưu
            </button>
            <button
              className='bg-gray-500 text-white px-4 py-2 rounded-md ml-4'
              onClick={() => setIsEditing(false)}
            >
              Hủy
            </button>
          </>
        ) : (
          <>
            <DisabledTextField label='Tên tài khoản' value={account.username || ''} />
            <DisabledTextField label='Họ và tên' value={account.name || ''} />
            <DisabledTextField label='Email' value={account.email || ''} />
            <DisabledTextField label='Số điện thoại' value={account.phone || ''} />
            <DisabledTextField label='Giới tính' value={account.gender || ''} />
            <DisabledTextField
              label='Ngày sinh'
              value={new Date(account.birthday).toLocaleDateString('vi-VN') || ''}
            />
          </>
        )}
      </div>
    </div>
  )
}
