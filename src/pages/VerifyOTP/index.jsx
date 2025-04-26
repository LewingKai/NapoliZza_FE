import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthApi from '~/api/authApi'
import { toast } from 'react-toastify'
import { Button } from '~/components/ui/Button'
import { routes } from '~/configs'
import ValidatedTextField from '~/components/ui/ValidatedTextField'
import LoadingDisplay from '~/components/ui/LoadingDisplay'

export default function VerifyOTP() {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState(1)
  const [timeLeft, setTimeLeft] = useState(15 * 60)
  const [isResendEnabled, setIsResendEnabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (step === 2 && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)

      return () => clearInterval(timer)
    } else if (timeLeft === 0) {
      setIsResendEnabled(true)
    }
  }, [step, timeLeft])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  const handleSendOTP = async () => {
    setIsLoading(true)
    try {
      await AuthApi.sendOTP(email)
      toast.success('OTP đã được gửi đến email của bạn.')
      setStep(2)
      setTimeLeft(15 * 60)
      setIsResendEnabled(false)
    } catch (error) {
      toast.error(error.response?.data?.message || 'Có lỗi xảy ra khi gửi OTP.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyOTP = async () => {
    try {
      await AuthApi.verifyOTP(email, otp)
      toast.success('Xác minh OTP thành công.')
      navigate(`${routes.CHANGE_PASSWORD}`, { state: { email, otp } })
    } catch (error) {
      toast.error(error.response?.data?.message || 'OTP không hợp lệ.')
    }
  }

  return (
    <div className='flex justify-center items-center'>
      <LoadingDisplay isLoading={isLoading} message='Đang gửi OTP...' />
      <div className='w-[480px] mt-12 mb-14 px-6 py-8 bg-white rounded-xl shadow-md'>
        {step === 1 ? (
          <>
            <div className='text-center text-3xl font-bold leading-loose mb-6'>Nhập Email</div>
            <ValidatedTextField
              label='Email'
              value={email}
              onChange={setEmail}
              validationRules={(value) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value)}
              errorMessage='Email không hợp lệ. Vui lòng nhập email dạng ***@gmail.com.'
              placeholder='Nhập email của bạn'
            />
            <Button
              variant='default'
              size='lg'
              className='bg-third w-full mt-4'
              onClick={handleSendOTP}
            >
              Gửi OTP
            </Button>
          </>
        ) : (
          <>
            <div className='text-center text-3xl font-bold leading-loose mb-6'>Nhập OTP</div>
            <ValidatedTextField
              label='OTP'
              value={otp}
              onChange={setOtp}
              validationRules={(value) => /^\d{6}$/.test(value)}
              errorMessage='OTP phải là 6 chữ số.'
              placeholder='Nhập mã OTP'
            />
            <div className='text-gray-500 mb-4'>
              {isResendEnabled ? (
                <Button variant='link' className='text-third' onClick={handleSendOTP}>
                  Gửi lại OTP
                </Button>
              ) : (
                `Thời gian còn lại: ${formatTime(timeLeft)}`
              )}
            </div>
            <Button
              variant='default'
              size='lg'
              className='bg-third w-full mt-4'
              onClick={handleVerifyOTP}
            >
              Xác minh OTP
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
