import { NavLink, Link } from 'react-router-dom'
import logo from '../../../../assets/images/Logo.svg'
import { routes } from '../../../../routes/index'
import { useState, useEffect } from 'react'
import ScrollToTop from '../../ScrollToTop'
import AccountMenu from '~/components/ui/AccountMenu'
import { useSelector } from 'react-redux'
export default function Header({ isOpenSidebar, setIsOpenSideBar }) {
  const [scrolled, setScrolled] = useState(false)
  const user = useSelector((state) => state.user.user)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleOpenSideBar = () => {
    setIsOpenSideBar(!isOpenSidebar)
  }
  return (
    <div
      className={`bg-primary h-[10vh] md:h-[15vh] flex items-center px-[5vw] justify-between sticky top-0 z-50
        ${
          scrolled
            ? 'shadow-[0_4px_10px_rgba(255,255,255,0.8)] rounded-b-[20px]'
            : 'shadow-none rounded-b-none'
        }`}
    >
      <Link to={routes.HOME} onClick={ScrollToTop}>
        <img src={logo} alt='Logo Website' className='h-[50px] md:h-[60px]' />
      </Link>
      <div className='gap-9 w-[30vw] justify-between hidden lg:flex'>
        <NavLink
          to={routes.HOME}
          className={({ isActive }) =>
            `relative font-medium text-[20px] group ${isActive ? 'half-underline' : ''}`
          }
          style={({ isActive }) => ({
            color: isActive ? '#FFF671' : '#fff',
          })}
          onClick={ScrollToTop}
        >
          Trang chủ
          <span className='absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
        </NavLink>

        <NavLink
          to={routes.RESERVATION}
          className={({ isActive }) =>
            `relative font-medium text-[20px] group ${isActive ? 'half-underline' : ''}`
          }
          style={({ isActive }) => ({
            color: isActive ? '#FFF671' : '#fff',
          })}
          onClick={ScrollToTop}
        >
          Đặt bàn
          <span className='absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
        </NavLink>

        <NavLink
          to={routes.MENU}
          className={({ isActive }) =>
            `relative font-medium text-[20px] group ${isActive ? 'half-underline' : ''}`
          }
          style={({ isActive }) => ({
            color: isActive ? '#FFF671' : '#fff',
          })}
          onClick={ScrollToTop}
        >
          Món ăn
          <span className='absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
        </NavLink>

        <NavLink
          to={routes.ABOUTUS}
          className={({ isActive }) =>
            `relative font-medium text-[20px] group ${isActive ? 'half-underline' : ''}`
          }
          style={({ isActive }) => ({
            color: isActive ? '#FFF671' : '#fff',
          })}
          onClick={ScrollToTop}
        >
          Về chúng tôi
          <span className='absolute left-1/4 bottom-0 w-1/2 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
        </NavLink>
      </div>
      {user && Object.keys(user).length > 0 ? (
        <div className='hidden lg:flex'>
          <AccountMenu user={user} />
        </div>
      ) : (
        <div className='lg:flex gap-4 hidden'>
          <Link to={routes.SIGNIN} onClick={ScrollToTop}>
            <button className='px-[20px] py-[8px] text-[20px] border-[2px] hover:border-secondary rounded-[10px] text-white hover:bg-secondary hover:text-primary '>
              Đăng nhập
            </button>
          </Link>
          <Link to={routes.SIGNUP} onClick={ScrollToTop}>
            <button className='px-[30px] py-[8px] text-[20px] border-[2px] hover:border-secondary rounded-[10px] text-white hover:bg-secondary hover:text-primary'>
              Đăng ký
            </button>
          </Link>
        </div>
      )}
      <button
        className='hidden max-lg:block text-white text-2xl focus:outline-none'
        onClick={handleOpenSideBar}
      >
        ☰
      </button>
    </div>
  )
}
