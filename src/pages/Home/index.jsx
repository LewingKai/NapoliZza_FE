import firstImage from '../../assets/images/home/first_image.png'

export default function Home() {
  return (
    <div className='px-[138px] py-[20px]'>
      <div>
        <h1>Mỗi chiếc Pizza - Mỗi một câu chuyện hương vị!</h1>
        <img src={firstImage} alt='Bánh pizza nóng hổi' />
      </div>
    </div>
  )
}
