import { Logo } from '../../../../assets/icons'
import { NavLink, Link } from 'react-router-dom'
import { routes } from '~/configs/routes'

export default function Footer() {
  return (
    <div className='bg-primary h-[610px] items-center px-[138px] py-[40px] relative'>
      <div className='flex gap-8 pt-[100px] w-full justify-between items-center'>
        <Link to={routes.HOME}>
          <img src={Logo} alt='Logo Website' className='h-[80px]' />
        </Link>
        <div>
          <div className='text-white text-[25px] mb-3 font-bold'>Liên hệ</div>
          <ul>
            <li className='text-white text-[15px]'>Email: info@napolizza.com</li>
            <li className='text-white text-[15px]'>
              Địa chỉ: Linh Trung, Tp. Thủ Đức, Tp. Hồ Chí Minh
            </li>
          </ul>
        </div>

        <div>
          <div className='text-white text-[25px] mb-3 font-bold'>Về NapoliZza</div>
          <ul>
            <li>
              <NavLink to={routes.ABOUTUS} className='text-white text-[15px]'>
                Giới thiệu
              </NavLink>
            </li>
            <li>
              <NavLink to={routes.COMMIT} className='text-white text-[15px]'>
                Cam kết của NapoliZza
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <div className='text-white text-[25px] mb-3 font-bold'>Chính sách</div>
          <ul>
            <li>
              <NavLink to={routes.OPERATING_POLICY} className='text-white text-[15px]'>
                Chính sách hoạt động
              </NavLink>
            </li>
            <li>
              <NavLink to={routes.POLICIES_REGULATIONS} className='text-white text-[15px]'>
                Chính sách và quy định
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <div className='text-white text-[25px] mb-3 font-bold'>Hướng dẫn</div>
          <ul>
            <li>
              <NavLink to={routes.BOOKING_GUIDE} className='text-white text-[15px]'>
                Hướng dẫn đặt bàn
              </NavLink>
            </li>
            <li>
              <NavLink to={routes.CONTACT_INSTRUCTIONS} className='text-white text-[15px]'>
                Hướng dẫn liên hệ
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className='border border-white border-dashed absolute bottom-[100px] w-[85%] left-1/2 -translate-x-1/2'></div>
      <div className='absolute bottom-[45px] text-white text-[15px]'>
        © 2025 - Bản quyền thuộc Lê Minh Khoai và Nguyễn Công Bá
      </div>
    </div>
  )
}
