import { routes } from '~/configs'
import { Link } from 'react-router-dom'
import ScrollToTop from '../Layout/ScrollToTop'
export default function FoodCard({ item }) {
  return (
    <Link to={`${routes.DETAILPAGE}`} onClick={() => ScrollToTop()}>
      <div className='bg-white rounded-[20px] drop-shadow-lg w-[40vw] md:w-[20vw] flex-shrink-0 mt-4 duration-300  hover:-translate-1 hover:scale-105'>
        <img
          src={item.dishImg.url}
          alt='Ảnh pizza'
          className='rounded-t-[10px] h-[250px] w-full object-cover'
        />
        <div className='p-4 '>
          <div className='min-h-[18vh] sm:min-h-[22vh]'>
            <h6 className='text-[25px] font-extrabold line-clamp-1'>{item.name}</h6>
            <div className='border  border-black border-dashed w-full mt-3'></div>
            <p className='text-[15px] line-clamp-4 mt-2'>{item.description}</p>
          </div>
          <div className=' text-[20px] font-bold mt-1 text-right'>{item.price} vnđ</div>
          {/* <div className='flex gap-2 items-center mt-2'>
            <div className='text-blue-500 text-[15px]'>Xem thêm</div>
            <FontAwesomeIcon icon={faArrowRight} className='text-blue-500 text-lg' />
          </div> */}
        </div>
      </div>
    </Link>
  )
}
