import ava from '~/assets/images/AboutUs/first_image.png'
export default function HeaderOfSeller() {
  return (
    <div className='w-full h-[12vh] bg-primary sticky top-0 items-center flex justify-end px-10 mb-5'>
      <div className='flex items-center gap-3'>
        <img src={ava} alt='Avatar người dùng' className='w-13 h-13 rounded-full p-0.5 bg-white' />
        <div className='text-white text-[20px] font-bold'>Nguyễn Công Bá</div>
      </div>
    </div>
  )
}
