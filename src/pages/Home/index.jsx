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
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowBackIos, ArrowForwardIos, WidthFull } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import DishApi from '~/api/dishApi'
import { useSelector } from 'react-redux'
import FoodCard from '~/components/ui/FoodCard'

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
  {
    icon: iconLemon,
    title: 'Phô mai tươi tự làm',
    desc: 'Sự kết hợp hoàn hảo giữa ẩm thực Ý và Nhật, từ pizza cá hồi sashimi đến những món ăn kèm tinh tế, mang lại trải nghiệm mới lạ.',
  },
]

const categoryList = [
  {
    index: 1,
    title: 'Pizza',
    desc: 'Thơm ngon, phô mai ngập tràn, đa dạng hương vị chuẩn Ý',
  },
  {
    index: 2,
    title: 'Appetizer',
    desc: 'Món khai vị hấp dẫn, kích thích vị giác',
  },
  {
    index: 3,
    title: 'Salad',
    desc: 'Tươi mát, bổ dưỡng với rau củ sạch và sốt đặc biệt',
  },
  {
    index: 4,
    title: 'Pasta',
    desc: 'Mì Ý đậm đà, phong cách truyền thống hoặc hiện đại',
  },
  {
    index: 5,
    title: 'Drinks',
    desc: 'Giải khát mọi lúc với đủ loại nước ngon, mát lạnh',
  },
  {
    index: 6,
    title: 'Topping',
    desc: 'Tùy chọn thêm topping yêu thích cho món ăn của bạn',
  },
  {
    index: 7,
    title: 'Delivery-combo',
    desc: 'Combo giao hàng siêu tiết kiệm, tiện lợi',
  },
  {
    index: 8,
    title: 'Seasonal',
    desc: 'Món theo mùa, tươi ngon và đầy cảm hứng',
  },
  {
    index: 9,
    title: 'Desserts',
    desc: 'Ngọt ngào tráng miệng, kết thúc bữa ăn hoàn hảo',
  },
  {
    index: 10,
    title: 'Market',
    desc: 'Sản phẩm từ cửa hàng, mang hương vị về nhà',
  },
]

const textHeader1 = 'text-[40px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[100px]'
const textHeader2 = 'text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]'
const textTitle = 'text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px]'
const textDesc = 'text-[18px] sm:text-[20px] md:text-[27px] lg:text-[30px] xl:text-[30px]'
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
  const [topRatingList, setTopRatingList] = useState([])
  const { token } = useSelector((state) => state.user)
  const getTopRatingDish = async () => {
    try {
      const res = await DishApi.getTopRatingDish(token)
      console.log('top rating: ', res)
      setTopRatingList(res.data)
    } catch (error) {
      console.log('Có lỗi khi lấy món nổi bật: ', error)
    }
  }

  useEffect(() => {
    getTopRatingDish()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    vertical: false,
    verticalSwiping: false,
    centerMode: true,
    WidthFull,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
          centerMode: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: false,
        },
      },
    ],
  }
  return (
    <>
      <div className='bg-primary w-full'>
        <div className='flex justify-between md:gap-5 gap-3 px-[5vw] pt-[30px]'>
          <h1 className={`${textHeader1}  text-white font-bold`}>
            Mỗi chiếc Pizza - Mỗi một câu chuyện hương vị!
          </h1>
          <img
            src={firstImage}
            alt='Bánh pizza nóng hổi'
            className='w-[40vw] sm:h-[100vh] object-cover rounded-4xl'
          />
        </div>

        <div className='hidden md:flex gap-9 absolute bottom-[-200px] left-[550px]'>
          <img src={oneImage} alt='Ảnh món ăn thứ nhất' className='w-[180px] h-[180px]' />
          <img src={twoImage} alt='Ánh món ăn thứ hai' className='w-[180px] h-[180px]' />
          <img src={threeImage} alt='Ảnh món ăn thứ ba' className='w-[180px] h-[180px]' />
        </div>
        <div className='sm:mt-[20vh] mt-[10vh] flex px-[5vw] gap-5 justify-between pb-[10vh]'>
          <div className='flex flex-col gap-3 w-[40vw]'>
            <img src={inviteImage} alt='Ảnh bánh pizza' className='rounded-xl' />
            <h2 className={`text-white ${textTitle} max-w-[700px] mt-6`}>
              Mời bạn đến bữa tiệc Pizza ở nhà hàng của chúng tôi!
            </h2>
            <p className={`max-w-[700px] text-white ${textDesc}`}>
              Hãy để Pizza lấp đầy trái tin vầ chiếc bụng đói của bạn!
            </p>
          </div>
          <div className='w-[35vw]'>
            <p className={`text-white ${textDesc}`}>
              Chúng tôi mang đến hương vị Ý đích thực, từ những chiếc pizza nóng hổi đến không gian
              ấm cúng để bạn sẻ chia khoảnh khắc bên gia đình và bạn bè.
            </p>
            <img src={introImage} alt='Ảnh bánh pizza' className='w-full mt-8 rounded-xl' />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${leaveImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='px-[5vw] justify-center pt-[10vh]'
      >
        <h1 className={`text-primary ${textHeader2} font-extrabold mb-5`}>Thực đơn...</h1>
        <div className='grid grid-cols-5 gap-5'>
          {categoryList.map((item, index) => {
            return (
              <div
                style={{
                  backgroundImage: `url(${firstImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className='w-[16vw] h-[40vh] rounded-br-[70px] rounded-tl-[70px]'
              >
                <div>sadsadas</div>
              </div>
            )
          })}
        </div>
        {/* <div className='grid grid-cols-2 md:grid-cols-2 justify-center w-full gap-10'>
          {menu.map((item) => (
            <WhiteFoodCart item={item} />
          ))}
        </div> */}
      </div>

      <div className='bg-[#EBF0E4] pt-20 px-20 md:flex justify-between'>
        <img src={manImage} alt='Người đàn ông đang nấu pizza' className='w-[600px] rounded-3xl' />
        <div>
          <h2 className={`text-black ${textHeader2} max-w-[700px] mt-8 font-extrabold`}>
            Hương vị Pizza hoàn hảo tại NapoliZza!
          </h2>
          <p className={`max-w-[700px] text-descText ${textDesc} mt-5 italic font-thin`}>
            Tại NapoliZza, mỗi chiếc pizza được làm từ bột tươi nhào thủ công, kết hợp với phô mai
            mozzarella hảo hạng và sốt cà chua đậm đà. Được nướng trong lò đá truyền thống, pizza
            của chúng tôi có lớp vỏ giòn rụm, nhân mềm thơm ngon. Đội ngũ đầu bếp tận tâm, luôn sáng
            tạo để mang đến hương vị chuẩn Ý. Hãy đến và thưởng thức – Pizza ngon hơn khi chia sẻ
            cùng người thân!
          </p>
        </div>
      </div>

      <div className=' grid grid-cols-1 md:grid-cols-4 gap-3  mx-auto justify-items-center px-[5vw] w-full mt-[100px]'>
        {standards.map((item) => {
          return (
            <div className='flex flex-col shadow-lg shadow-sky-50 hover:scale-110 transition delay-100 duration-400 items-center text-center max-w-[310px] bg-white p-5 rounded-4xl'>
              <img
                src={item.icon}
                alt='Ảnh icon của tiêu chuẩn'
                className='p-[35px] bg-white rounded-full w-[170px]'
              />
              <h6 className='text-black text-[22px] max-w-[700px] mt-1 font-extrabold'>
                {item.title}
              </h6>
              <p className='text-descText text-[15px] mt-2'>{item.desc}</p>
            </div>
          )
        })}
      </div>

      <div className='px-[100px] mb-20 mt-[70px]'>
        <h2 className={`text-primary ${textHeader2} text-center font-extrabold`}>
          Một số loại nổi bật
        </h2>
        {/* drop-shadow-lg */}
        <div className='w-full mt-5'>
          <div className='mx-auto max-w-[1400px] relative'>
            <Slider {...settings}>
              {topRatingList.map((item) => (
                <FoodCard item={item} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}
