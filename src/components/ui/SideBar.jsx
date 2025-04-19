import { Drawer } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { routes } from '~/configs'
import { Link, NavLink } from 'react-router-dom'
import ScrollToTop from '../Layout/ScrollToTop'
import AccountMenu from './AccountMenu'
import { useSelector } from 'react-redux'

export default function SideBar({ isOpenSidebar, setIsOpenSideBar }) {
  const user = useSelector((state) => state.user.user)
  const handleClose = () => {
    setIsOpenSideBar(!isOpenSidebar)
  }
  return (
    <Drawer
      sx={{
        width: '320px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '320px',
        },
      }}
      variant='persistent'
      anchor='right'
      open={isOpenSidebar}
    >
      <div className='bg-primary h-full px-5 py-10 justify-between flex flex-col'>
        <div className='p-'>
          <button onClick={handleClose} className=' px-5 py-2 hover:bg-[#ddd] rounded-full'>
            <FontAwesomeIcon icon={faChevronRight} size='xl' color='white' />
          </button>
        </div>
        <div className='flex flex-col gap-3 mb-[20vh]'>
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
            <span className='absolute left-1 bottom-0 w-1/4 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
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
            <span className='absolute left-1 bottom-0 w-1/4 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
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
            <span className='absolute left-1 bottom-0 w-1/4 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
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
            <span className='absolute left-1 bottom-0 w-1/4 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
          </NavLink>
        </div>
        <div>
          {user && Object.keys(user).length > 0 ? (
            <div className='mb-[30vw]'>
              <AccountMenu user={user} />
            </div>
          ) : (
            <div className='gap-5 mb-[30vw flex flex-col justify-center items-center'>
              <Link to={routes.SIGNIN} onClick={ScrollToTop}>
                <button className='px-[20px] w-[250px] py-[8px] text-[20px] border-[2px] hover:border-secondary rounded-[10px] text-white hover:bg-secondary hover:text-primary '>
                  Đăng nhập
                </button>
              </Link>
              <Link to={routes.SIGNUP} onClick={ScrollToTop}>
                <button className='px-[30px] w-[250px] py-[8px] text-[20px] border-[2px] hover:border-secondary rounded-[10px] text-white hover:bg-secondary hover:text-primary'>
                  Đăng ký
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Drawer>
  )
}
