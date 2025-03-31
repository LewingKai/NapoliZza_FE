import { Button } from '~/components/ui/Button'
import CustomDatePicker from '~/components/ui/CustomDatePicker'
import CustomSelect from '~/components/ui/CustomSelect'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Reservation() {
  const [date, setDate] = useState(null)
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState('')

  const generateTimeOptions = () => {
    const options = []
    let hour = 9
    let minute = 0
    while (hour < 24) {
      const value = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      const label = value
      options.push({ value, label })
      minute += 30
      if (minute === 60) {
        minute = 0
        hour += 1
      }
    }
    return options.filter((option) => option.value <= '23:45')
  }

  const timeOptions = generateTimeOptions()

  const guestOptions = Array.from({ length: 30 }, (_, i) => ({
    value: (i + 1).toString(),
    label: `${i + 1} Người`,
  }))

  const handleReservation = () => {
    if (!date || !time || !guests) {
      toast.error('Vui lòng chọn đầy đủ thông tin.')
      return
    }

    const selectedDateTime = new Date(date)
    const [hours, minutes] = time.split(':').map(Number)
    selectedDateTime.setHours(hours, minutes, 0, 0)

    const now = new Date()

    // Kiểm tra nếu thời gian đã qua
    if (selectedDateTime <= now) {
      toast.error('Không thể đặt bàn vào thời gian đã qua.')
      return
    }

    // Kiểm tra nếu đặt cùng ngày thì phải sau 2 tiếng
    const isSameDay = selectedDateTime.toDateString() === now.toDateString()
    if (isSameDay) {
      const twoHoursLater = new Date(now.getTime() + 2 * 60 * 60 * 1000) // Thêm 2 tiếng
      if (selectedDateTime <= twoHoursLater) {
        toast.error('Nếu đặt bàn trong ngày, vui lòng chọn thời gian sau 2 tiếng từ bây giờ.')
        return
      }
    }

    toast.success('Đặt bàn thành công!')
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
        <CustomSelect
          label='Số lượng khách'
          options={guestOptions}
          value={guests}
          onChange={setGuests}
          placeholder='Chọn số lượng khách'
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
      <ToastContainer />
    </div>
  )
}
