import firstImage from '../../assets/images/AboutUs/first_image.png'
import secondImage from '../../assets/images/AboutUs/second_Image.png'

const textHeader1 = 'text-[40px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[100px]'
const textHeader2 = 'text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]'
const textDesc = 'text-[18px] sm:text-[20px]lg:text-[22px] xl:text-[25px]'
export default function AboutUs() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${firstImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='w-full md:h-[700px] h-[400px] flex sm:justify-end p-5'
      >
        <div className='sm:max-w-[60vw]'>
          <h1 className={` text-white font-bold ${textHeader1}`}>
            Hành trình mang hương vị Ý đến với bạn
          </h1>
          <p className=' text-white text-[15px] md:text-[25px] italic font-light'>
            NapoliZza ra đời từ niềm đam mê mãnh liệt với nghệ thuật làm Pizza truyền thống của Ý.
            Chúng tôi tin rằng một chiếc Pizza hoàn hảo không chỉ đến từ nguyên liệu tươi ngon mà
            còn là sự tận tâm và sáng tạo của những người thợ lành nghề.
          </p>
        </div>
      </div>

      <div className='flex justify-between w-[90vw] m-auto py-5 sm:py-15'>
        <div className='sm:max-w-[40vw] max-w-[45vw]'>
          <h2 className={` text-black font-bold ${textHeader2}`}>Đội ngũ đầu bếp tài hoa</h2>
          <p className={`text-descText italic ${textDesc}`}>
            Chúng tôi tự hào có đội ngũ đầu bếp giàu kinh nghiệm, luôn sáng tạo để mang đến những
            hương vị Pizza độc đáo và hấp dẫn. Từ các công thức kinh điển như Margherita, Pepperoni
            đến những biến tấu mới lạ đầy sáng tạo, mỗi món ăn tại NapoliZza đều chứa đựng tâm huyết
            và đam mê.
          </p>
        </div>
        <img src={secondImage} alt='Đầu bếp đang nấu ăn' className='w-[40vw] object-cover' />
      </div>
    </div>
  )
}
