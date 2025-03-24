import firstImage from '../../assets/images/AboutUs/first_image.png'
import secondImage from '../../assets/images/AboutUs/second_image.png'

export default function AboutUs() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${firstImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='w-full h-[850px]'
      >
        <div className='max-w-[700px] ml-[600px]'>
          <h1 className='text-[100px]  text-white font-bold'>
            Hành trình mang hương vị Ý đến với bạn
          </h1>
          <p className=' text-white text-[25px]'>
            NapoliZza ra đời từ niềm đam mê mãnh liệt với nghệ thuật làm Pizza truyền thống của Ý.
            Chúng tôi tin rằng một chiếc Pizza hoàn hảo không chỉ đến từ nguyên liệu tươi ngon mà
            còn là sự tận tâm và sáng tạo của những người thợ lành nghề.
          </p>
        </div>
      </div>

      <div className='flex justify-between p-[100px]'>
        <div className='max-w-[600px]'>
          <h2 className='text-[60px]  text-black font-bold'>Đội ngũ đầu bếp tài hoa</h2>
          <p className=' text-descText text-[20px] italic'>
            Chúng tôi tự hào có đội ngũ đầu bếp giàu kinh nghiệm, luôn sáng tạo để mang đến những
            hương vị Pizza độc đáo và hấp dẫn. Từ các công thức kinh điển như Margherita, Pepperoni
            đến những biến tấu mới lạ đầy sáng tạo, mỗi món ăn tại NapoliZza đều chứa đựng tâm huyết
            và đam mê.
          </p>
        </div>
        <img src={secondImage} alt='Đầu bếp đang nấu ăn' className='w-[550px]' />
      </div>
    </div>
  )
}
