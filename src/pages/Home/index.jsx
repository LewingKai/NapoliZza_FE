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
// import WhiteFoodCart from './components/whiteFoodCart'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowBackIos, ArrowForwardIos, WidthFull } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import DishApi from '~/api/dishApi'
import FoodCard from '~/components/ui/FoodCard'
import cate_appetizer from '../../assets/images/home/categories/Appetizer.jpg'
import cate_desserts from '../../assets/images/home/categories/Desserts.jpg'
import cate_deliveryCombo from '../../assets/images/home/categories/Delivery-combo.jpg'
import cate_drinks from '../../assets/images/home/categories/Drinks.jpg'
import cate_market from '../../assets/images/home/categories/Market.jpg'
import cate_pasta from '../../assets/images/home/categories/Pasta.jpg'
import cate_pizza from '../../assets/images/home/categories/Pizza.jpg'
import cate_salad from '../../assets/images/home/categories/Salad.jpg'
import cate_seasonal from '../../assets/images/home/categories/Seasonal.jpg'
import cate_topping from '../../assets/images/home/categories/Topping.jpg'
import { useNavigate } from 'react-router-dom'

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
    img: cate_pizza,
    title: 'Pizza',
    desc: 'Thơm ngon, phô mai ngập tràn, đa dạng hương vị chuẩn Ý. Mỗi chiếc pizza được chế biến tỉ mỉ từ lớp đế giòn rụm đến phần nhân đậm đà, phù hợp cho mọi khẩu vị từ cổ điển đến hiện đại.',
  },
  {
    index: 2,
    img: cate_appetizer,
    title: 'Appetizer',
    desc: 'Món khai vị hấp dẫn, kích thích vị giác. Những món nhỏ xinh nhưng đậm đà này sẽ khơi dậy sự thèm ăn và tạo nên sự khởi đầu hoàn hảo cho bữa ăn của bạn.',
  },
  {
    index: 3,
    img: cate_salad,
    title: 'Salad',
    desc: 'Tươi mát, bổ dưỡng với rau củ sạch và sốt đặc biệt. Kết hợp các loại nguyên liệu tự nhiên, salad là lựa chọn lý tưởng cho người yêu thích sự nhẹ nhàng và lành mạnh.',
  },
  {
    index: 4,
    img: cate_pasta,
    title: 'Pasta',
    desc: 'Mì Ý đậm đà, phong cách truyền thống hoặc hiện đại. Được chế biến từ nguyên liệu chất lượng cùng các loại sốt đặc trưng, mỗi phần mì là một hành trình ẩm thực đậm chất Ý.',
  },
  {
    index: 5,
    img: cate_drinks,
    title: 'Drinks',
    desc: 'Giải khát mọi lúc với đủ loại nước ngon, mát lạnh. Từ nước ép trái cây tươi mát đến soda sảng khoái, thức uống của chúng tôi đáp ứng mọi nhu cầu thưởng thức.',
  },
  {
    index: 6,
    img: cate_topping,
    title: 'Topping',
    desc: 'Tùy chọn thêm topping yêu thích cho món ăn của bạn. Dễ dàng cá nhân hóa món ăn với các loại topping đa dạng từ phô mai, thịt xông khói đến rau củ tươi ngon.',
  },
  {
    index: 7,
    img: cate_deliveryCombo,
    title: 'Delivery-combo',
    desc: 'Combo giao hàng siêu tiết kiệm, tiện lợi. Thiết kế phù hợp cho mọi gia đình hoặc nhóm bạn, giúp bạn có ngay bữa ăn ngon miệng mà không cần phải ra ngoài.',
  },
  {
    index: 8,
    img: cate_seasonal,
    title: 'Seasonal',
    desc: 'Món theo mùa, tươi ngon và đầy cảm hứng. Với nguyên liệu đặc trưng từng mùa, mỗi món là sự kết hợp hài hòa giữa hương vị tự nhiên và cảm hứng ẩm thực sáng tạo.',
  },
  {
    index: 9,
    img: cate_desserts,
    title: 'Desserts',
    desc: 'Ngọt ngào tráng miệng, kết thúc bữa ăn hoàn hảo. Những món ngọt tinh tế từ bánh ngọt, kem đến trái cây, mang lại cảm giác thoải mái và hạnh phúc sau mỗi bữa ăn.',
  },
  {
    index: 10,
    img: cate_market,
    title: 'Market',
    desc: 'Sản phẩm từ cửa hàng, mang hương vị về nhà. Bạn có thể mua các nguyên liệu, món ăn chế biến sẵn hoặc đặc sản để thưởng thức tại nhà bất cứ lúc nào.',
  },
]

const textHeader1 = 'text-[40px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[100px]'
const textHeader2 = 'text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]'
const textTitle = 'text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px]'
const textDesc = 'text-[18px] sm:text-[20px]lg:text-[22px] xl:text-[25px]'
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
  const navigate = useNavigate()
  const [topRatingList, setTopRatingList] = useState([])
  const getTopRatingDish = async () => {
    try {
      const res = await DishApi.getTopRatingDish()
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
        <h1 className={`text-primary ${textHeader2} font-extrabold mb-5`}>
          Danh mục các món ăn...
        </h1>
        <div className='grid grid-cols-5 gap-5 pb-10'>
          {categoryList.map((item, index) => {
            return (
              <div
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className='w-[16vw] h-[40vh] rounded-br-[70px] rounded-tl-[70px] group overflow-hidden'
                onClick={() => navigate(`/mon-an?category=${item.title}`)}
              >
                <div className='w-full h-full rounded-br-[70px] rounded-tl-[70px] bg-[#0303033b] flex flex-col justify-end pb-5 relative'>
                  <p className='text-white font-extrabold text-[30px] text-center transform transition-all duration-300 group-hover:-translate-y-4'>
                    {item.title}
                  </p>
                  <p className='px-3 text-white text-[15px] font-light bottom-5  w-full text-center opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-none'>
                    {item.desc}
                  </p>
                </div>
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
        <img src={manImage} alt='Người đàn ông đang nấu pizza' className='w-[500px] rounded-3xl' />
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
