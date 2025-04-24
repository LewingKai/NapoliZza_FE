import logo from '~/assets/images/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faListCheck, faArrowLeft, faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { routes } from '~/routes'
import ScrollToTop from '~/components/Layout/ScrollToTop'

import { NavLink } from 'react-router-dom'
export default function Navigation() {
  return (
    <div className='w-[20vw] bg-primary h-full flex flex-col px-10 py-10 justify-between'>
      <img src={logo} alt='Logo NapoliZza' />

      <div className='flex flex-col gap-7 mt-20 ml-5 h-[70vh]'>
        <NavLink
          to={routes.DASHBOARD}
          className={({ isActive }) =>
            `font-medium text-[25px] group flex items-center gap-3 relative transition-all duration-300 ${
              isActive ? 'text-[#FFF671]' : 'text-[white] hover:text-[#FFF671]'
            }`
          }
          onClick={ScrollToTop}
        >
          <FontAwesomeIcon icon={faHouse} size='lg' />
          <div className='text-[20px]'>Dashboard</div>
          <span className='absolute left-1/4 bottom-0 w-1/3 h-[3px] bg-[white] scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
        </NavLink>

        <NavLink
          to={routes.MANAGEREQUEST}
          className={({ isActive }) =>
            `font-medium text-[25px] group flex items-center gap-3 relative transition-all duration-300 ${
              isActive ? 'text-[#FFF671]' : 'text-[white] hover:text-[#FFF671]'
            }`
          }
          onClick={ScrollToTop}
        >
          <FontAwesomeIcon icon={faListCheck} size='lg' />
          <div className='text-[20px]'>Quản lý đơn</div>
          <span className='absolute left-1/4 bottom-0 w-1/2 h-[3px] bg-[white] scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
        </NavLink>

        <NavLink
          to={routes.MANAGEFOOD}
          className={({ isActive }) =>
            `font-medium text-[25px] group flex items-center gap-3 relative transition-all duration-300 ${
              isActive ? 'text-[#FFF671]' : 'text-[white] hover:text-[#FFF671]'
            }`
          }
          onClick={ScrollToTop}
        >
          <FontAwesomeIcon icon={faPizzaSlice} size='lg' />
          <div className='text-[20px]'>Quản lý món ăn</div>
          <span className='absolute left-1/4 bottom-0 w-1/2 h-[3px] bg-[white] scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
        </NavLink>
      </div>
      <NavLink to={routes.HOME} className='flex items-center gap-5 justify-center h-[20px] group'>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size='xl'
          className='p-2 transition-all duration-300 text-white group-hover:bg-[#FFF671] group-hover:rounded-full'
        />
        <div className='text-white text-[20px] font-bold transition-all duration-300 group-hover:text-[#FFF671]'>
          Về trang chủ
        </div>
      </NavLink>
    </div>
  )
}
