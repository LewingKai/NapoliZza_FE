import React, { useEffect, useState, useRef } from 'react'
import accountApi from '~/api/accountApi'
import DisabledTextField from '~/components/ui/DisabledTextField'
import ValidatedTextField from '~/components/ui/ValidatedTextField'
import CustomSelect from '~/components/ui/CustomSelect'
import AvatarUploader from '~/components/ui/AvatarUploader'
import { toast } from 'react-toastify'
import defaultAvatar from '~/assets/images/DetailAccount/default-avatar.jpg'
import { Button } from '~/components/ui/Button'

export default function DetailAccount() {
  const [account, setAccount] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({})
  const [avatar, setAvatar] = useState(null)
  const [isChanged, setIsChanged] = useState(false)
  const isFetched = useRef(false)

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await accountApi.getAccount()
        if (response.success) {
          setAccount(response.data)
          setFormData(response.data)
          setAvatar(response.data.avatar?.url || defaultAvatar)
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
  }, [])

  const handleChange = (field, value) => {
    setFormData((prev) => {
      const updatedFormData = { ...prev, [field]: value }
      setIsChanged(JSON.stringify(updatedFormData) !== JSON.stringify(account))
      return updatedFormData
    })
  }

  const handleAvatarChange = (file) => {
    const newAvatar = URL.createObjectURL(file)
    setAvatar(newAvatar)
    setFormData((prev) => {
      const updatedFormData = { ...prev, avatar: file }
      setIsChanged(true)
      return updatedFormData
    })
  }

  const handleSave = async () => {
    try {
      const formDataToSend = new FormData()
      Object.keys(formData).forEach((key) => {
        if (key === 'avatar' && formData[key] instanceof File) {
          formDataToSend.append('image', formData[key])
        } else {
          formDataToSend.append(key, formData[key])
        }
      })

      const response = await accountApi.updateAccount(formDataToSend)
      if (response.success) {
        setAccount(response.data)
        setIsEditing(false)
        setIsChanged(false)
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
      <div className='flex flex-row gap-8 justify-around'>
        {/* Cột Avatar */}
        <div className=''>
          <AvatarUploader
            currentAvatar={avatar}
            onAvatarChange={handleAvatarChange}
            isEditing={isEditing}
          />
        </div>

        {/* Cột thông tin */}
        <div className='w-[432px] flex flex-col gap-4'>
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
              <div className='flex justify-center mt-4 space-x-4'>
                <Button
                  variant='default'
                  size='lg'
                  className='bg-third'
                  onClick={handleSave}
                  disabled={!isChanged}
                >
                  Lưu
                </Button>
                <Button
                  variant='default'
                  size='lg'
                  className='bg-third text-white'
                  onClick={() => setIsEditing(false)}
                >
                  Hủy
                </Button>
              </div>
            </>
          ) : (
            <>
              <DisabledTextField label='Tên tài khoản' value={account.username || ''} />
              <DisabledTextField label='Họ và tên' value={account.name || ''} />
              <DisabledTextField label='Số điện thoại' value={account.phone || ''} />
              <DisabledTextField label='Giới tính' value={account.gender || ''} />
              <DisabledTextField
                label='Ngày sinh'
                value={new Date(account.birthday).toLocaleDateString('vi-VN') || ''}
              />
              <div className='flex justify-center mt-4'>
                <Button
                  variant='default'
                  size='lg'
                  className='bg-third'
                  onClick={() => setIsEditing(true)}
                >
                  Chỉnh sửa
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
