import * as React from 'react'

const PolicyAndRegulations = () => {
  return (
    <div className='py-20 flex justify-center items-center'>
      <div>
        <div className='text-[60px] font-bold text-primary uppercase text-center'>
          CHÍNH SÁCH VÀ QUY ĐỊNH
        </div>
        <div className='mb-10 text-primary font-medium text-[25px] text-center'>
          Điều khoản sử dụng dịch vụ tại NapoliZza
        </div>
        <div className='max-w-[1150px]'>
          <div className='text-[20px] font-light'>
            Khi sử dụng dịch vụ của NapoliZza, bạn đồng ý tuân thủ các điều khoản và chính sách sau
            đây nhằm đảm bảo trải nghiệm tốt nhất cho tất cả khách hàng.
          </div>
          <div>
            <ol className='list-decimal pl-5'>
              <li className='mt-5 text-[20px] font-bold'>
                Chính sách đặt hàng
                <ul className='list-disc pl-10 font-light'>
                  <li>Khách hàng có thể đặt hàng qua website hoặc ứng dụng di động.</li>
                  <li>Hệ thống chỉ chấp nhận đơn hàng khi có xác nhận từ NapoliZza.</li>
                  <li>Thời gian xử lý đơn hàng tùy thuộc vào địa điểm và số lượng đặt.</li>
                </ul>
              </li>
              <li className='mt-5 text-[20px] font-bold'>
                Chính sách thanh toán
                <ul className='list-disc pl-10 font-light'>
                  <li>Chấp nhận thanh toán bằng tiền mặt, thẻ ngân hàng hoặc ví điện tử.</li>
                  <li>Giá cả hiển thị trên hệ thống là giá cuối cùng, không có phụ phí ẩn.</li>
                  <li>Hóa đơn điện tử sẽ được gửi qua email sau khi hoàn tất giao dịch.</li>
                </ul>
              </li>
              <li className='mt-5 text-[20px] font-bold'>
                Chính sách giao hàng
                <ul className='list-disc pl-10 font-light'>
                  <li>Thời gian giao hàng trung bình từ 30-45 phút, tùy địa điểm.</li>
                  <li>Khách hàng có thể theo dõi trạng thái đơn hàng trên ứng dụng.</li>
                  <li>
                    Trong trường hợp giao hàng trễ do điều kiện bất khả kháng, NapoliZza sẽ thông
                    báo ngay lập tức.
                  </li>
                </ul>
              </li>
              <li className='mt-5 text-[20px] font-bold'>
                Chính sách hoàn trả & hủy đơn
                <ul className='list-disc pl-10 font-light'>
                  <li>Khách hàng có thể hủy đơn trong vòng 5 phút sau khi đặt hàng.</li>
                  <li>
                    Trường hợp sản phẩm có vấn đề về chất lượng, vui lòng liên hệ để được hỗ trợ đổi
                    trả.
                  </li>
                  <li>Không hỗ trợ hoàn tiền khi khách hàng đổi ý sau khi đã nhận hàng.</li>
                </ul>
              </li>
            </ol>
            <div className='text-center mt-10 text-[25px] font-bold'>
              NapoliZza cam kết mang đến trải nghiệm tốt nhất cho khách hàng. Mọi thắc mắc vui lòng
              liên hệ với chúng tôi qua hotline hoặc email hỗ trợ!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PolicyAndRegulations
