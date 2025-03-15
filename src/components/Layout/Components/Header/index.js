import { NavLink, Link } from 'react-router-dom'
import logo from '../../../assets/images/Logo.svg'
import { routes } from '../../../routes'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`bg-primary w-full h-[100px] flex items-center px-[138px] justify-between sticky top-0
        ${
          scrolled
            ? 'shadow-[0_4px_10px_rgba(255,255,255,0.8)] rounded-b-[20px]'
            : 'shadow-none rounded-b-none'
        }`}
    >
      <Link to={routes.HOME}>
        <img src={logo} alt='Logo Website' className='h-[60px]' />
      </Link>
      <div className='gap-9 w-[30vw] justify-between flex'>
        <NavLink
          to={routes.HOME}
          className={({ isActive }) =>
            isActive ? 'font-medium half-underline text-[20px]' : 'font-medium text-[20px]'
          }
          style={({ isActive }) => ({
            color: isActive ? '#FFF671' : '#fff',
          })}
        >
          Trang chủ
        </NavLink>

        <NavLink
          to={routes.RESERVATION}
          className={({ isActive }) =>
            isActive ? 'font-medium half-underline text-[20px]' : 'font-medium text-[20px]'
          }
          style={({ isActive }) => ({
            color: isActive ? '#FFF671' : '#fff',
          })}
        >
          Đặt bàn
        </NavLink>

        <NavLink
          to={routes.MENU}
          className={({ isActive }) =>
            isActive ? 'font-medium half-underline text-[20px]' : 'font-medium text-[20px]'
          }
          style={({ isActive }) => ({
            color: isActive ? '#FFF671' : '#fff',
          })}
        >
          Món ăn
        </NavLink>

        <NavLink
          to={routes.ABOUTUS}
          className={({ isActive }) =>
            isActive ? 'font-medium half-underline text-[20px]' : 'font-medium text-[20px]'
          }
          style={({ isActive }) => ({
            color: isActive ? '#FFF671' : '#fff',
          })}
        >
          Về chúng tôi
        </NavLink>
      </div>
      <div className='flex gap-4'>
        <Link to={routes.SIGNIN}>
          <button className='px-[20px] py-[8px] text-[20px] border-[2px] hover:border-secondary rounded-[10px] text-white hover:bg-secondary hover:text-primary '>
            Đăng nhập
          </button>
        </Link>
        <Link to={routes.SIGNUP}>
          <button className='px-[30px] py-[8px] text-[20px] border-[2px] hover:border-secondary rounded-[10px] text-white hover:bg-secondary hover:text-primary'>
            Đăng ký
          </button>
        </Link>
      </div>
    </div>
  )
}
