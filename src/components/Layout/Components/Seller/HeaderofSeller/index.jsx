import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
export default function HeaderOfSeller() {
  const user = useSelector((state) => state.user.user)
  return (
    <div className='w-full h-[12vh] bg-primary sticky top-0 items-center flex justify-end px-10'>
      <div className='flex items-center gap-3'>
        <div className='flex flex-col'>
          <div className='text-white text-[20px] font-bold text-right'>{user.name}</div>
          <div className='text-white text-[15px] font-thin italic text-right'>{user.email}</div>
        </div>
        <Avatar src={user.avatar} sx={{ width: '60px', height: '60px' }} />
      </div>
    </div>
  )
}
