import logo from '../../../../assets/images/Logo.svg'
import { NavLink, Link } from 'react-router-dom'
import { routes } from '../../../../routes/index'

export default function Footer() {
  const ClickOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const text = ' lg:text-[20px] text-[15px]'
  const textTitle = 'text-[25px] lg:text-[30px]'
  return (
    <div className='bg-primary h-[610px] items-center px-[5vw] py-[40px] relative'>
      <div className='md:flex gap-8 md:pt-[100px] w-full justify-between'>
        <Link to={routes.HOME} onClick={ClickOnTop}>
          <img
            src={logo}
            alt='Logo Website'
            className='min-h-[80px] md:h-[90px] mx-auto my-[5vh]'
          />
        </Link>
        <div className='grid grid-cols-3 md:grid-cols-4 gap-3 w-full'>
          <div className='hidden md:block'>
            <div className={`text-white text-[20px] mb-3 font-bold ${textTitle}`}>Liên hệ</div>
            <ul>
              <li className={`text-white ${text}`}>SĐT: 0338963327</li>
              <li className={`text-white ${text}`}>Email: info@napolizza.com</li>
              <li className={`text-white ${text}`}>
                Địa chỉ: Linh Trung, Tp. Thủ Đức, Tp. Hồ Chí Minh
              </li>
            </ul>
          </div>

          <div>
            <div className={`text-white text-[20px] mb-3 font-bold ${textTitle}`}>Về NapoliZza</div>
            <ul>
              <li>
                <NavLink
                  to={routes.ABOUTUS}
                  className={`text-white ${text} hover:text-[#FFF671]`}
                  onClick={ClickOnTop}
                >
                  Giới thiệu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={routes.COMMIT}
                  className={`text-white ${text} hover:text-[#FFF671]`}
                  onClick={ClickOnTop}
                >
                  Cam kết của NapoliZza
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <div className={`text-white text-[20px] mb-3 font-bold ${textTitle}`}>Chính sách</div>
            <ul>
              <li>
                <NavLink
                  to={routes.OPERATING_POLICY}
                  className={`text-white ${text} hover:text-[#FFF671]`}
                  onClick={ClickOnTop}
                >
                  Chính sách hoạt động
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={routes.POLICIES_REGULATIONS}
                  className={`text-white ${text} hover:text-[#FFF671]`}
                  onClick={ClickOnTop}
                >
                  Chính sách và quy định
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <div className={`text-white text-[20px] mb-3 font-bold ${textTitle}`}>Hướng dẫn</div>
            <ul>
              <li>
                <NavLink
                  to={routes.BOOKING_GUIDE}
                  className={`text-white ${text} hover:text-[#FFF671]`}
                  onClick={ClickOnTop}
                >
                  Hướng dẫn đặt bàn
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={routes.CONTACT_INSTRUCTIONS}
                  className={`text-white ${text} hover:text-[#FFF671]`}
                  onClick={ClickOnTop}
                >
                  Hướng dẫn liên hệ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='border border-white border-dashed absolute bottom-[100px] w-[85%] left-1/2 -translate-x-1/2'></div>
      <div className={`absolute bottom-[45px] text-white ${text}`}>
        © 2025 - Bản quyền thuộc NapoliZza
      </div>
    </div>
  )
}
