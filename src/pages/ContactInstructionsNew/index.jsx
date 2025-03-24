import * as React from 'react'

export default function ContactInstructions() {
  return (
    <div className='py-20 flex justify-center items-center'>
      <div>
        <div className='text-[60px] font-bold text-primary uppercase text-center '>
          HƯỚNG DẪN LIÊN HỆ
        </div>
        <div className='max-w-[1150px] mt-10'>
          <div className='text-[20px] pl-5 font-light'>
            Chúng tôi luôn sẵn sàng hỗ trợ quý khách hàng trong mọi trải nghiệm đặt bánh. Nếu quý
            khách cần liên hệ với NapoliZza về đơn hàng, dịch vụ hoặc bất kỳ thắc mắc nào, vui lòng
            tham khảo các phương thức dưới đây:
          </div>
          <div>
            <ol className='list-decimal pl-5'>
              <li className='mt-5 text-[20px] font-bold'>
                Liên hệ qua tổng đài hỗ trợ
                <ul className='list-disc pl-5 font-light'>
                  <li>Số điện thoại: 0338963327</li>
                  <li>Phí gọi: Miễn phí</li>
                  <li>
                    Hỗ trợ: Đặt bánh, kiểm tra trạng thái đơn hàng, giải đáp thắc mắc và xử lý khiếu
                    nại.
                  </li>
                </ul>
              </li>
              <li className='mt-5 text-[20px] font-bold'>
                Liên hệ qua email
                <ul className='list-disc pl-5 font-light'>
                  <li>Email hỗ trợ khách hàng: napolizza.support@gmail.com</li>
                  <li>Thời gian phản hồi: 1-2 ngày làm việc</li>
                  <li>
                    Vui lòng cung cấp: Họ tên, số điện thoại, mã đơn hàng và chi tiết vấn đề cần hỗ
                    trợ để chúng tôi giúp bạn nhanh nhất.
                  </li>
                </ul>
              </li>
              <li className='mt-5 text-[20px] font-bold'>
                Quy trình xử lý khiếu nại
                <ul className='list-disc pl-5 font-light'>
                  <li>
                    Bước 1: Liên hệ NapoliZza qua tổng đài hoặc email, cung cấp thông tin khiếu nại.
                  </li>
                  <li>Bước 2: Đội ngũ hỗ trợ tiếp nhận và xác minh thông tin.</li>
                  <li>
                    Bước 3: Chúng tôi phản hồi và đề xuất phương án giải quyết trong 24 - 48 giờ.
                  </li>
                  <li>
                    Bước 4: Cập nhật kết quả và phản hồi đến khách hàng qua phương thức liên hệ đã
                    cung cấp.
                  </li>
                </ul>
              </li>
            </ol>
            <div className='mt-10 text-[25px] font-bold text-center'>
              Cảm ơn quý khách đã tin tưởng và lựa chọn{' '}
              <strong className='text-[30px]'>NapoliZza</strong>. Chúng tôi luôn sẵn sàng đồng hành
              để mang đến trải nghiệm đặt bánh tuyệt vời nhất!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
