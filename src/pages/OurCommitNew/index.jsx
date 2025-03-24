import * as React from 'react'

const OurCommit = () => {
  return (
    <div className='py-20 flex justify-center items-center'>
      <div>
        <div className='text-[60px] font-bold text-primary uppercase text-center '>
          CAM KẾT CỦA NAPOLIZZA
        </div>
        <div className='mb-10 text-primary font-medium text-[25px] text-center'>
          Chọn NapoliZza - Chọn Chất Lượng Đích Thực
        </div>
        <div className='max-w-[1150px]'>
          <div className='text-[20px] font-light'>
            Tại NapoliZza, chúng tôi không chỉ mang đến những chiếc pizza ngon miệng mà còn cam kết
            về chất lượng, dịch vụ và sự hài lòng của khách hàng. Dưới đây là những cam kết quan
            trọng của chúng tôi:
          </div>
          <div>
            <ol className='list-decimal pl-5'>
              <li className='mt-5 text-[20px] font-bold'>
                Chất Lượng Pizza Hảo Hạng
                <div className='font-light'>
                  Chúng tôi chỉ sử dụng nguyên liệu tươi ngon nhất để đảm bảo từng chiếc pizza đều
                  đạt tiêu chuẩn cao nhất:
                </div>
                <ul className='list-disc pl-10'>
                  <li className='font-light'>
                    Bột bánh được ủ thủ công, mang đến độ giòn hoàn hảo.
                  </li>
                  <li className='font-light'>Phô mai cao cấp, thơm béo, tan chảy hấp dẫn.</li>
                  <li className='font-light'>Nguyên liệu tươi sạch, đảm bảo an toàn thực phẩm.</li>
                </ul>
              </li>
              <li className='mt-5 text-[20px] font-bold'>
                Giá Cả Hợp Lý - Nhiều Ưu Đãi
                <div className=' font-light'>
                  NapoliZza cam kết mang đến giá thành hợp lý cùng nhiều chương trình ưu đãi hấp
                  dẫn:
                </div>
                <ul className='list-disc pl-10'>
                  <li className='font-light'>Giá cả minh bạch, không phí ẩn.</li>
                  <li className='font-light'>Ưu đãi thường xuyên cho khách hàng thân thiết.</li>
                  <li className='font-light'>Giảm giá đặc biệt cho đơn hàng số lượng lớn.</li>
                </ul>
              </li>
              <li className='mt-5 text-[20px] font-bold'>
                Giao Hàng Nhanh Chóng
                <div className='font-light'>
                  Chúng tôi hiểu rằng pizza ngon nhất khi còn nóng hổi, vì vậy NapoliZza cam kết:
                </div>
                <ul className='list-disc pl-10'>
                  <li className=' font-light'>Giao hàng nhanh trong vòng 30 phút.</li>
                  <li className=' font-light'>Hợp tác với đối tác giao hàng chuyên nghiệp.</li>
                </ul>
              </li>
            </ol>
            <div className='text-center mt-10 text-[25px] font-bold'>
              Với tất cả những cam kết trên, <strong className=' text-[30px]'>NapoliZza</strong> hy
              vọng sẽ trở thành lựa chọn hàng đầu của bạn, mang đến trải nghiệm ẩm thực tuyệt vời
              ngay tại nhà!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurCommit
