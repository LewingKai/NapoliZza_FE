import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { routes } from '~/routes'
import { Button } from '~/components/ui/Button'
import CustomDatePicker from '~/components/ui/CustomDatePicker'
import ValidatedTextField from '~/components/ui/ValidatedTextField'
import { validateGuests } from '~/utils/validation'
import CustomSelect from '~/components/ui/CustomSelect'

export default function Reservation() {
  const [date, setDate] = useState(null)
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState('')
  const navigate = useNavigate()

  const generateTimeOptions = () => {
    const options = []
    const now = new Date()
    const isToday = date && new Date(date).toDateString() === now.toDateString()
    let hour = 9
    let minute = 0

    while (hour < 24) {
      const value = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      const label = value

      if (isToday) {
        const currentTime = new Date()
        currentTime.setHours(hour, minute, 0, 0)

        if (currentTime.getTime() > now.getTime() + 2 * 60 * 60 * 1000) {
          options.push({ value, label })
        }
      } else {
        options.push({ value, label })
      }

      minute += 30
      if (minute === 60) {
        minute = 0
        hour += 1
      }
    }

    return options.filter((option) => option.value <= '23:45')
  }

  const timeOptions = generateTimeOptions()

  const handleReservation = () => {
    if (!date || !time || !guests) {
      toast.error('Vui lòng chọn đầy đủ thông tin.')
      return
    }

    if (!validateGuests(guests)) {
      toast.error('Số lượng khách phải từ 1 đến 30.')
      return
    }

    const selectedDateTime = new Date(date)
    const [hours, minutes] = time.split(':').map(Number)
    selectedDateTime.setHours(hours, minutes, 0, 0)

    const now = new Date()
    if (selectedDateTime <= now) {
      toast.error('Không thể đặt bàn vào thời gian đã qua.')
      return
    }

    navigate(`${routes.ORDERMENU}`, {
      state: { date, time, guests },
    })
  }

  return (
    <div>
      <h1 className='text-8xl text-center mt-20'>Đặt bàn</h1>
      <div className='text-center pt-4'>
        Đặt bàn ngay để không bỏ lỡ cơ hội trải nghiệm hương vị Pizza 4P’s độc đáo.
      </div>
      <div className='max-w-5xl mt-10 flex gap-3 mx-auto'>
        <CustomDatePicker
          label='Chọn ngày'
          value={date}
          onChange={setDate}
          placeholder='Chọn ngày đặt bàn'
        />
        <CustomSelect
          label='Chọn giờ'
          options={timeOptions}
          value={time}
          onChange={setTime}
          placeholder='Chọn giờ đặt bàn'
        />
        <ValidatedTextField
          label='Số lượng khách'
          value={guests}
          onChange={setGuests}
          validationRules={validateGuests}
          errorMessage='Số lượng khách phải từ 1 đến 30.'
          placeholder='Nhập số lượng khách'
        />
      </div>
      <div className='flex justify-center my-20'>
        <Button
          variant='outline'
          className='w-72 h-20 bg-third text-3xl rounded-[0px]'
          onClick={handleReservation}
        >
          Đặt ngay
        </Button>
      </div>
    </div>
  )
}
