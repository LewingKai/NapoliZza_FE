import img from '../../assets/images/menu/intro.png'
import FoodCard from '~/components/Layout/Components/FoodCard'
import introImage from '../../assets/images/home/introduce_image.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

const food = [
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
export default function Menu() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='w-full h-[600px] px-[100px] flex justify-center items-center'
      >
        <h1 className='text-[100px] max-w-[1000px] text-white font-bold text-center '>
          Cùng xem Menu của chúng tôi có gì nào!
        </h1>
      </div>
      <div className='px-[100px] py-[50px]'>
        <div>
          <h2 className='text-[50px] text-center font-bold'>Appetizers & Salads</h2>
          <p className='text-[20px] text-center italic'>
            Khởi động bữa tiệc hương vị với những món khai vị và salad tươi ngon.
          </p>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={-70}
            slidesPerView={4}
            navigation // Nút điều hướng
            pagination={{ clickable: true }} // Thanh chuyển slide
            className=' mt-10 max:w-90vw h-[540px]'
          >
            {food.map((item, index) => (
              <SwiperSlide key={index}>
                <FoodCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='mt-10'>
          <h2 className='text-[50px] text-center font-bold'>Pizza</h2>
          <p className='text-[20px] text-center italic'>
            Thưởng thức những chiếc pizza nóng hổi, giòn rụm với lớp phô mai béo ngậy và topping đa
            dạng!
          </p>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={-70}
            slidesPerView={4}
            navigation // Nút điều hướng
            pagination={{ clickable: true }} // Thanh chuyển slide
            className=' mt-10 max:w-90vw h-[540px]'
          >
            {food.map((item, index) => (
              <SwiperSlide key={index}>
                <FoodCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='mt-10'>
          <h2 className='text-[50px] text-center font-bold'>Drink/Alcohol</h2>
          <p className='text-[20px] text-center italic'>
            Giải khát sảng khoái với các loại đồ uống phong phú, từ nước ngọt, trà, sinh tố đến bia
            và rượu cao cấp. Thưởng thức ly đồ uống yêu thích để bữa ăn thêm trọn vẹn!
          </p>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={-70}
            slidesPerView={4}
            navigation // Nút điều hướng
            pagination={{ clickable: true }} // Thanh chuyển slide
            className=' mt-10 max:w-90vw h-[540px]'
          >
            {food.map((item, index) => (
              <SwiperSlide key={index}>
                <FoodCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
