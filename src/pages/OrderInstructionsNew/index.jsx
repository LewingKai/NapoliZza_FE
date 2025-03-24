import * as React from 'react'

export default function OrderInstructions() {
  return (
    <div className='py-20 flex justify-center items-center'>
      <div>
        <div className='text-[60px] font-bold text-primary uppercase text-center'>
          HƯỚNG DẪN ĐẶT PIZZA
        </div>
        <div className='max-w-[1150px] mt-10'>
          <div className=' list-disc text-[20px] pl-5 font-light'>
            Chào mừng bạn đến với NapoliZza! Chúng tôi luôn mong muốn mang lại trải nghiệm đặt pizza
            trực tuyến nhanh chóng và tiện lợi. Dưới đây là các bước hướng dẫn giúp bạn đặt pizza
            một cách dễ dàng:
          </div>
          <div>
            <ol className='list-decimal pl-5'>
              <li className='mt-5 text-[20px] font-bold'>
                Đăng nhập hoặc Đăng ký tài khoản
                <ul className=' list-disc pl-5 font-light'>
                  <li>Truy cập website NapoliZza</li>
                  <li>
                    Chọn Đăng nhập nếu bạn đã có tài khoản, hoặc Đăng ký nếu bạn là người dùng mới.
                  </li>
                  <li>
                    Điền thông tin tài khoản bao gồm họ tên, số điện thoại, và email để hoàn tất
                    đăng ký.
                  </li>
                </ul>
              </li>

              <li className='mt-5 text-[20px] font-bold'>
                Chọn pizza yêu thích
                <ul className=' list-disc pl-5 font-light'>
                  <li>Duyệt qua menu của NapoliZza để chọn loại pizza yêu thích.</li>
                  <li>
                    Sử dụng bộ lọc để tìm kiếm theo kích thước, nguyên liệu hoặc ưu đãi đặc biệt.
                  </li>
                </ul>
              </li>

              <li className='mt-5 text-[20px] font-bold'>
                Thêm vào giỏ hàng
                <ul className=' list-disc pl-5 font-light'>
                  <li>Khi đã chọn được pizza ưng ý, nhấn nút "Thêm vào giỏ hàng".</li>
                  <li>Kiểm tra lại giỏ hàng trước khi tiến hành thanh toán.</li>
                </ul>
              </li>

              <li className='mt-5 text-[20px] font-bold'>
                Thanh toán và xác nhận đơn hàng
                <ul className=' list-disc pl-5 font-light'>
                  <li>
                    Chọn phương thức thanh toán: tiền mặt khi nhận hàng hoặc thanh toán trực tuyến.
                  </li>
                  <li>Kiểm tra thông tin giao hàng và xác nhận đơn hàng.</li>
                </ul>
              </li>

              <li className='mt-5 text-[20px] font-bold'>
                Theo dõi đơn hàng
                <ul className=' list-disc pl-5 font-light'>
                  <li>Bạn có thể theo dõi trạng thái đơn hàng trong mục "Lịch sử đơn hàng".</li>
                </ul>
              </li>

              <li className='mt-5 text-[20px] font-bold'>
                Nhận hàng và thưởng thức
                <ul className=' list-disc pl-5 font-light'>
                  <li>Khi pizza được giao đến, vui lòng kiểm tra và thanh toán nếu cần.</li>
                  <li>Thưởng thức pizza nóng hổi từ NapoliZza!</li>
                </ul>
              </li>
            </ol>
            <div className='mt-10 text-[25px] font-bold text-center'>
              <strong className=' text-[30px]'>NapoliZza</strong> hy vọng hướng dẫn này giúp bạn dễ
              dàng đặt pizza và có trải nghiệm tuyệt vời. Chúc bạn có những bữa ăn ngon miệng và
              tiện lợi với <strong className=' text-[30px]'>NapoliZza</strong>!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
