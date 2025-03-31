import { useParams } from 'react-router-dom'
import introImage from '../../assets/images/detail/imagefood.png'
import img from '../../assets/images/detail/image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const foodInfo = {
  img: introImage,
  name: ' Pizza sốt pesto Pizza sốt pesto Pizza sốt pesto ',
  desc: 'Sốt Pesto có vị béo ngậy của phô mai, mùi thơm đặc trưng từ lá húng tây (basil), ngò rí và cuối cùng là vị mặn nhẹ của muối. Với hương bị béo ngậy của phô mai cùng với cà chua tươi và sốt Pesto đậm đà, món pizza hải sản trở nên hấp dẫn hơn bao giờ hết. Sốt Pesto có vị béo ngậy của phô mai, mùi thơm đặc trưng từ lá húng tây (basil), ngò rí và cuối cùng là vị mặn nhẹ của muối. Với hương bị béo ngậy của phô mai cùng với cà chua tươi và sốt Pesto đậm đà, món pizza hải sản trở nên hấp dẫn hơn bao giờ hết.',
  price: '200.000',
  ingredients: [
    'Phô mai',
    'Lá húng tây',
    'Ngò rí',
    'Cà chua',
    'Cà chua',
    'Phô mai',
    'Lá húng tây',
    'Ngò rí',
    'Cà chua',
  ],
  cmt: [
    {
      ava: introImage,
      cmt: 'Sốt Pesto có vị béo ngậy của phô mai, mùi thơm đặc trưng từ lá húng tây (basil), ngò rí và cuối cùng là vị mặn nhẹ của muối. Với hương bị béo ngậy của phô',
      nameacc: 'Nguyễn Công Bá',
      rating: 4.5,
    },
    {
      ava: introImage,
      cmt: 'Sốt Pesto có vị béo ngậy của phô mai, mùi thơm đặc trưng từ lá húng tây (basil), ngò rí và cuối cùng là vị mặn nhẹ của muối. Với hương bị béo ngậy của phô',
      nameacc: 'Nguyễn Công Bá',
      rating: 4,
    },
    {
      ava: introImage,
      cmt: 'Sốt Pesto có vị béo ngậy của phô mai, mùi thơm đặc trưng từ lá húng tây (basil), ngò rí và cuối cùng là vị mặn nhẹ của muối. Với hương bị béo ngậy của phô',
      nameacc: 'Nguyễn Công Bá',
      rating: 4,
    },
    {
      ava: introImage,
      cmt: 'Sốt Pesto có vị béo ngậy của phô mai, mùi thơm đặc trưng từ lá húng tây (basil), ngò rí và cuối cùng là vị mặn nhẹ của muối. Với hương bị béo ngậy của phô',
      nameacc: 'Nguyễn Công Bá',
      rating: 4,
    },
    {
      ava: introImage,
      cmt: 'Sốt Pesto có vị béo ngậy của phô mai, mùi thơm đặc trưng từ lá húng tây (basil), ngò rí và cuối cùng là vị mặn nhẹ của muối. Với hương bị béo ngậy của phô',
      nameacc: 'Nguyễn Công Bá',
      rating: 4,
    },
  ],

  judgeHeader: 'Sự kết hợp độc đáo với hải sản tươi ngon',
  judgeContent:
    'Món pizza này càng trở nên hấp dẫn hơn khi đi kèm với các loại hải sản tươi ngon, được chế biến khéo léo để giữ trọn độ ngọt tự nhiên. Cắn một miếng, bạn sẽ cảm nhận được lớp phô mai tan chảy, hòa quyện cùng vị thanh mát của pesto và vị ngọt của hải sản, tạo nên một bản giao hưởng hương vị đầy mê hoặc.',
}

export default function DetailPage() {
  const { id } = useParams

  console.log('id', id)
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${foodInfo.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='w-full h-[500px] flex flex-col items-center justify-center text-white gap-5'
      >
        <div className='px-5 py-2 border-2 border-white flex justify-center'>
          <p className='text-white text-center italic font-serif text-[25px]'>Loại Pizza</p>
        </div>
        <h1 className='text-center text-white text-[60px] font-bold px-[100px]'>{foodInfo.name}</h1>
        <div className='flex justify-between gap-1 items-center'>
          <p className='text-[20px]'>Đánh giá: 4.5</p>
          <FontAwesomeIcon icon={faStar} size='lg' color='#FFF01E' />
        </div>
        <p className='text-white text-center text-[30px] font-bold mt-20 px-7 py-3 bg-black/70 rounded-2xl'>
          {foodInfo.price} vnđ
        </p>
      </div>
      <div className='px-[100px] py-10'>
        <p className='text-[25px] text-center '>{foodInfo.desc}</p>
        <div className=' mt-10'>
          <h2 className='text-[40px] font-bold'>Nguyên liệu ...</h2>
          <ul className='list-disc pl-5'>
            {foodInfo.ingredients.map((item) => {
              return <li className='text-[25px] ml-10'>{item}</li>
            })}
          </ul>
        </div>
        <div className='flex gap-2 justify-between mt-10'>
          <img src={foodInfo.img} alt='Ảnh nguyên liệu' className='w-[42vw]' />
          <img src={foodInfo.img} alt='Ảnh nguyên liệu' className='w-[42vw]' />
        </div>
        <div className='mt-15'>
          <h2 className='text-[50px] font-bold'>{foodInfo.judgeHeader}</h2>
          <p className='text-[25px] mt-3'>{foodInfo.judgeContent}</p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='w-[full] h-[400px] mb-10 items-center flex'
      >
        <h2 className='text-[50px] italic text-center px-[100px] text-white'>
          Thưởng thức ngay tại NapoliZza – nơi hương vị Ý thăng hoa trong từng miếng Pizza!
        </h2>
      </div>
      <div className='mb-20'>
        <div className='border-1  border-black border-dashed w-70vw'></div>
        <h2 className='text-[40px] font-bold text-center mt-10'>Đánh giá của khách hàng</h2>
        <div className='flex flex-col justify-center items-center w-full mt-5'>
          {foodInfo.cmt.map((item) => {
            return (
              <div className='p-5 w-[60vw] bg-white mt-3 rounded-3xl drop-shadow-[0_35px_35px_rgba(255,255,255,0.8)]'>
                <div className='flex justify-between'>
                  <div className='flex items-center gap-3'>
                    <img src={item.ava} alt='Avata' className='w-[50px] h-[50px] rounded-full' />
                    <p className='text-[20px] font-bold'>{item.nameacc}</p>
                  </div>
                  <div className='flex justify-between gap-1 items-center'>
                    <p className='text-[20px]'>{item.rating} </p>
                    <FontAwesomeIcon icon={faStar} size='lg' color='#FFF01E' />
                  </div>
                </div>
                <p className='mt-3'>{item.cmt}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
