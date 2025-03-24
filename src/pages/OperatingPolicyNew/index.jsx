import * as React from 'react'

export default function OperatingPolicy() {
  return (
    <div className='py-20 flex justify-center items-center'>
      <div>
        <div className='text-[60px] font-bold text-primary uppercase text-center '>
          CHÍNH SÁCH HOẠT ĐỘNG
        </div>
        <div className='max-w-[1150px] mt-10'>
          <div className='text-[20px] pl-5 font-light'>
            Chào mừng quý khách đến với NapoliZza - nền tảng đặt bánh pizza trực tuyến nhanh chóng
            và tiện lợi. Chúng tôi cam kết mang đến những chiếc bánh pizza thơm ngon, chất lượng cao
            và dịch vụ giao hàng tận nơi chuyên nghiệp.
          </div>
          <div>
            <ol className='list-decimal pl-5'>
              <li className='mt-5 text-[20px] font-bold'>
                Phạm vi hoạt động
                <ul className='list-disc pl-5 font-light'>
                  <li>
                    NapoliZza hiện phục vụ tại nhiều khu vực, đảm bảo giao bánh nóng hổi đến tận tay
                    khách hàng trong thời gian nhanh nhất.
                  </li>
                </ul>
              </li>

              <li className='mt-5 text-[20px] font-bold'>
                Quy trình đặt bánh và xác nhận đơn hàng
                <ul className='list-disc pl-5 font-light'>
                  <li>
                    Khách hàng có thể dễ dàng truy cập NapoliZza qua website, lựa chọn loại pizza
                    yêu thích và đặt hàng chỉ với vài cú nhấp chuột.
                  </li>
                  <li>
                    Sau khi đặt hàng, hệ thống sẽ xác nhận đơn và khách hàng có thể theo dõi trạng
                    thái đơn hàng trực tiếp trên NapoliZza.
                  </li>
                </ul>
              </li>

              <li className='mt-5 text-[20px] font-bold'>
                Phí giao hàng và thời gian giao bánh
                <ul className='list-disc pl-5 font-light'>
                  <li>
                    Phí giao hàng được tính theo khoảng cách với nhiều tùy chọn giao hàng nhanh hoặc
                    theo thời gian mong muốn.
                  </li>
                  <li>
                    NapoliZza cam kết giao bánh đúng thời gian cam kết để đảm bảo hương vị tươi ngon
                    nhất.
                  </li>
                </ul>
              </li>

              <li className='mt-5 text-[20px] font-bold'>
                Cam kết chất lượng
                <ul className='list-disc pl-5 font-light'>
                  <li>
                    Pizza tại NapoliZza được làm từ nguyên liệu tươi ngon, chế biến theo công thức
                    truyền thống với tiêu chuẩn chất lượng cao.
                  </li>
                  <li>
                    Nếu khách hàng không hài lòng về chất lượng, chúng tôi sẽ hỗ trợ đổi trả hoặc
                    hoàn tiền theo chính sách dịch vụ.
                  </li>
                </ul>
              </li>

              <li className='mt-5 text-[20px] font-bold'>
                Chính sách đổi trả và khiếu nại
                <ul className='list-disc pl-5 font-light'>
                  <li>
                    Khách hàng có thể liên hệ với NapoliZza nếu có vấn đề với đơn hàng trong vòng 24
                    giờ kể từ khi nhận bánh.
                  </li>
                  <li>
                    NapoliZza sẽ xem xét và đưa ra phương án giải quyết nhanh chóng nhất trong vòng
                    1-2 ngày làm việc.
                  </li>
                </ul>
              </li>
            </ol>
            <div className='mt-10 text-[25px] font-bold text-center'>
              Cảm ơn quý khách đã tin tưởng và lựa chọn{' '}
              <strong className='text-[30px]'>NapoliZza</strong>. Chúng tôi luôn nỗ lực mang đến
              những chiếc pizza ngon nhất và dịch vụ tốt nhất dành cho bạn!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
