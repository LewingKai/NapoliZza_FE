import firstImage from '../../assets/images/home/first_image.png'
import oneImage from '../../assets/images/home/one_image.png'
import twoImage from '../../assets/images/home/two_image.png'
import threeImage from '../../assets/images/home/three_image.png'
import inviteImage from '../../assets/images/home/invite_image.png'
import introImage from '../../assets/images/home/introduce_image.png'
import leaveImage from '../../assets/images/home/leaves.png'
import manImage from '../../assets/images/home/man_image.png'
import iconCheese from '../../assets/images/home/icon_Cheese.png'
import iconLemon from '../../assets/images/home/icon_lemon.png'
import iconCarot from '../../assets/images/home/icon_carrot.png'
import WhiteFoodCart from './components/whiteFoodCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

const menu = [
  {
    price: '200.000vnd',
    name: 'Phô mai Burrata thịt nguội mai Burrata thịt nguội mai Burrata thịt nguội',
    desc: 'Chiếc pizza “best-seller” kết hợp phô mai Burrata tươi, sốt cà chua và những lát Parma Ham thượng hạng, tạo nên sự cân bằng hoàn hảo giữa vị béo, mặn và tươi mát.',
  },
  {
    price: '200.000vnd',
    name: 'Phô mai Burrata thịt nguội mai Burrata thịt nguội mai Burrata thịt nguội',
    desc: 'Chiếc pizza “best-seller” kết hợp phô mai Burrata tươi, sốt cà chua và những lát Parma Ham thượng hạng, tạo nên sự cân bằng hoàn hảo giữa vị béo, mặn và tươi mát.',
  },
  {
    price: '200.000vnd',
    name: 'Phô mai Burrata thịt nguội mai Burrata thịt nguội mai Burrata thịt nguội',
    desc: 'Chiếc pizza “best-seller” kết hợp phô mai Burrata tươi, sốt cà chua và những lát Parma Ham thượng hạng, tạo nên sự cân bằng hoàn hảo giữa vị béo, mặn và tươi mát.',
  },
  {
    price: '200.000vnd',
    name: 'Phô mai Burrata thịt nguội mai Burrata thịt nguội mai Burrata thịt nguội',
    desc: 'Chiếc pizza “best-seller” kết hợp phô mai Burrata tươi, sốt cà chua và những lát Parma Ham thượng hạng, tạo nên sự cân bằng hoàn hảo giữa vị béo, mặn và tươi mát.',
  },
]

const standards = [
  {
    icon: iconCheese,
    title: 'Phô mai tươi tự làm',
    desc: 'Tự hào với phô mai Burrata, Mozzarella và Ricotta được sản xuất tươi mỗi ngày tại Đà Lạt, mang đến hương vị béo ngậy, độc đáo.',
  },
  {
    icon: iconCarot,
    title: 'Nguyên liệu tươi sạch',
    desc: 'Rau củ được tuyển chọn kỹ lưỡng từ các nông trại địa phương, đảm bảo độ tươi ngon và cân bằng dinh dưỡng trong từng món ăn.',
  },
  {
    icon: iconLemon,
    title: 'Phô mai tươi tự làm',
    desc: 'Sự kết hợp hoàn hảo giữa ẩm thực Ý và Nhật, từ pizza cá hồi sashimi đến những món ăn kèm tinh tế, mang lại trải nghiệm mới lạ.',
  },
]

const outstandingPizza = [
  {
    img: introImage,
    name: ' Pizza sốt pesto Pizza sốt pesto Pizza sốt pesto',
    desc: 'Sốt Pesto có vị béo ngậy của phô mai, mùi thơm đặc trưng từ lá húng tây (basil), ngò rí và cuối cùng là vị mặn nhẹ của muối. Với hương bị béo ngậy của phô ....',
    price: '200.000',
  },
  {
    img: introImage,
    name: ' Pizza sốt pesto Pizza sốt pesto Pizza sốt pesto',
    desc: 'Sốt Pesto có vị béo ngậy của phô mai, mùi thơm đặc trưng từ lá húng tây (basil), ngò rí và cuối cùng là vị mặn nhẹ của muối. Với hương bị béo ngậy của phô ....',
    price: '200.000',
  },
  {
    img: introImage,
    name: ' Pizza sốt pesto Pizza sốt pesto Pizza sốt pesto',
    desc: 'Sốt Pesto có vị béo ngậy của phô mai, mùi thơm đặc trưng từ lá húng tây (basil), ngò rí và cuối cùng là vị mặn nhẹ của muối. Với hương bị béo ngậy của phô ....',
    price: '200.000',
  },
  {
    img: introImage,
    name: ' Pizza sốt pesto Pizza sốt pesto Pizza sốt pesto',
    desc: 'Sốt Pesto có vị béo ngậy của phô mai, mùi thơm đặc trưng từ lá húng tây (basil), ngò rí và cuối cùng là vị mặn nhẹ của muối. Với hương bị béo ngậy của phô ....',
    price: '200.000',
  },
  {
    img: introImage,
    name: ' Pizza sốt pesto Pizza sốt pesto Pizza sốt pesto',
    desc: 'Sốt Pesto có vị béo ngậy của phô mai, mùi thơm đặc trưng từ lá húng tây (basil), ngò rí và cuối cùng là vị mặn nhẹ của muối. Với hương bị béo ngậy của phô ....',
    price: '200.000',
  },
  {
    img: introImage,
    name: ' Pizza sốt pesto Pizza sốt pesto Pizza sốt pesto',
    desc: 'Sốt Pesto có vị béo ngậy của phô mai, mùi thơm đặc trưng từ lá húng tây (basil), ngò rí và cuối cùng là vị mặn nhẹ của muối. Với hương bị béo ngậy của phô ....',
    price: '200.000',
  },
]

const PrevArrow = (props) => {
  const { className, onClick, style } = props
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        left: '-80px',
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        padding: '30px',
        paddingLeft: '38px',
        paddingRight: '24px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ArrowBackIos style={{ color: 'white', fontSize: '40px' }} />
    </div>
  )
}

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, onClick, style } = props
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        right: '-80px',
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        padding: '30px',
        paddingLeft: '33px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ArrowForwardIos style={{ color: 'white', fontSize: '40px' }} />
    </div>
  )
}

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    vertical: false,
    verticalSwiping: false,
    centerMode: true,
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PrevArrow />, // Custom Previous Arrow
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: '100px',
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: false,
        },
      },
    ],
  }
  return (
    <>
      <div className='bg-primary'>
        <div className='flex justify-between gap-10 px-[100px] pt-[60px]'>
          <h1 className='text-[100px]  text-white font-bold'>
            Mỗi chiếc Pizza - Mỗi một câu chuyện hương vị!
          </h1>
          <img src={firstImage} alt='Bánh pizza nóng hổi' className='w-[600px]' />
        </div>
        <div className='flex gap-9 absolute bottom-[-300px] left-[550px]'>
          <img src={oneImage} alt='Ảnh món ăn thứ nhất' className='w-[200px] h-[200px]' />
          <img src={twoImage} alt='Ánh món ăn thứ hai' className='w-[200px] h-[200px]' />
          <img src={threeImage} alt='Ảnh món ăn thứ ba' className='w-[200px] h-[200px]' />
        </div>
        <div className='mt-[250px] flex px-[100px] justify-between pb-[100px]'>
          <div>
            <img src={inviteImage} alt='Ảnh bánh pizza' className='w-[700px]' />
            <h2 className='text-white text-[50px] max-w-[700px] mt-8'>
              Mời bạn đến bữa tiệc Pizza ở nhà hàng của chúng tôi!
            </h2>
            <p className='max-w-[700px] text-white text-[25px]'>
              Hãy để Pizza lấp đầy trái tin vầ chiếc bụng đói của bạn!
            </p>
          </div>
          <div>
            <p className='max-w-[500px] text-white text-[25px]'>
              Chúng tôi mang đến hương vị Ý đích thực, từ những chiếc pizza nóng hổi đến không gian
              ấm cúng để bạn sẻ chia khoảnh khắc bên gia đình và bạn bè.
            </p>
            <img src={introImage} alt='Ảnh bánh pizza' className='w-[500px] mt-8' />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${leaveImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='px-[100px] justify-center pt-[100px]'
      >
        <h1 className='text-primary text-[70px] font-extrabold mb-5 '>Thực đơn...</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center w-full gap-10'>
          {menu.map((item) => (
            <WhiteFoodCart item={item} />
          ))}
        </div>
      </div>

      <div className='bg-[#EBF0E4] pt-20 px-20 flex justify-between'>
        <img src={manImage} alt='Người đàn ông đang nấu pizza' className='w-[600px] ' />
        <div>
          <h2 className='text-black text-[70px] max-w-[700px] mt-8 font-extrabold'>
            Hương vị Pizza hoàn hảo tại NapoliZza!
          </h2>
          <p className='max-w-[700px] text-descText text-[20px] mt-5 italic font-thin'>
            Tại NapoliZza, mỗi chiếc pizza được làm từ bột tươi nhào thủ công, kết hợp với phô mai
            mozzarella hảo hạng và sốt cà chua đậm đà. Được nướng trong lò đá truyền thống, pizza
            của chúng tôi có lớp vỏ giòn rụm, nhân mềm thơm ngon. Đội ngũ đầu bếp tận tâm, luôn sáng
            tạo để mang đến hương vị chuẩn Ý. Hãy đến và thưởng thức – Pizza ngon hơn khi chia sẻ
            cùng người thân!
          </p>
        </div>
      </div>

      <div className=' flex justify-between px-[100px] w-full mt-[100px]'>
        {standards.map((item) => {
          return (
            <div className='flex flex-col items-center text-center max-w-[310px] border-2 p-5 rounded-4xl border-primary'>
              <img
                src={item.icon}
                alt='Ảnh icon của tiêu chuẩn'
                className='p-[35px] bg-[#EBF0E4] rounded-full w-[170px]'
              />
              <h6 className='text-black text-[25px] max-w-[700px] mt-3 font-extrabold'>
                {item.title}
              </h6>
              <p className='text-descText text-[15px] mt-2'>{item.desc}</p>
            </div>
          )
        })}
      </div>

      <div className='px-[100px]  mb-20'>
        <h2 className='text-primary text-[60px] text-center font-extrabold mt-[90px]'>
          Một số loại nổi bật
        </h2>
        {/* drop-shadow-lg */}
        <div className='w-full mt-5'>
          <div className='mx-auto max-w-[1200px] relative'>
            <Slider {...settings}>
              {outstandingPizza.map((item) => (
                <div className='w-[300px] flex-shrink-0 bg-white rounded-[20px] drop-shadow-lg'>
                  <img
                    src={item.img}
                    alt='Ảnh pizza'
                    className='rounded-t-[10px] h-[300px] w-full object-cover'
                  />
                  <div className='p-4'>
                    <h6 className='text-[30px] font-extrabold line-clamp-1'>{item.name}</h6>
                    <div className='border  border-black border-dashed w-full mt-3'></div>
                    <p className='text-[18px] line-clamp-4 mt-2'>{item.desc}</p>
                    <div className=' text-[25px] font-bold mt-1'>{item.price} vnđ</div>
                    <div className='flex gap-2 items-center mt-2'>
                      <div className='text-blue-500 text-[15px]'>Xem thêm</div>
                      <FontAwesomeIcon icon={faArrowRight} className='text-blue-500 text-lg' />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}
