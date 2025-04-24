import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Rating, TextareaAutosize } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import ReviewApi from '~/api/reviewApi'

export default function ReviewBox({ reviewList, fetchCommentList, dishDetail }) {
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState()
  const user = useSelector((state) => state.user.user)
  const handleDeleteComment = async (reviewId) => {
    const data = {
      commentID: reviewId,
      dishId: dishDetail._id,
    }
    try {
      await ReviewApi.deleteReview(data)
      toast.success('Đã xóa đánh giá thành công!')
      fetchCommentList()
    } catch (error) {
      console.log('Lỗi khi xóa review: ', error)
      toast.success('Không thể xóa đánh giá!')
    }
  }

  const handleAddReview = async () => {
    const review = {
      reviewContent: comment,
      rating: rating,
      dishId: dishDetail._id,
    }
    try {
      const res = await ReviewApi.createReview(review)
      toast.success('Đã thêm đánh giá thành công!')
      fetchCommentList()
    } catch (error) {
      console.log('Lỗi khi thêm review: ', error)
      toast.success('Không thể thêm đánh giá!')
    }
  }

  const handleResetReview = () => {
    setComment('')
    setRating(5)
  }
  return (
    <div className='px-[10vw] py-10'>
      <h2 className='text-[30px] md:text-[40px] font-bold mb-5'>Đánh giá của khách hàng...</h2>
      <div className='flex gap-3 justify-between '>
        <div className='w-[30vw] bg-[#d2f6fa]  flex-col justify-center items-center hidden md:flex'>
          <p className='text-[25px] font-bold'>{dishDetail.rating.toFixed(1)}/5</p>
          <Rating name='half-rating' defaultValue={dishDetail.rating} precision={0.5} />
          <p className='text-[20px] font-light text-center'>
            Dựa trên {reviewList.length} bài đánh giá!
          </p>
        </div>
        <div className='md:w-[65vw] w-[80vw] p-5 border-2 border-[#b8b5b5] rounded-lg bg-white'>
          <p className='font-bold text-[20px] md:text-[25px]'>Chia sẻ đánh giá của bạn!</p>
          <p className='text-[15px] md:text-[20px]'>Xếp hạng:</p>
          <Rating
            name='half-rating'
            value={rating}
            precision={0.5}
            sx={{ fontSize: 30 }}
            onChange={(e) => setRating(e.target.value)}
          />
          <p className='mt-1 text-[15px] md:text-[20px]'>Nội dung đánh giá: </p>
          <TextareaAutosize
            aria-label='minimum height'
            minRows={3}
            placeholder='Chia sẻ trải nghiệm của bạn về món ăn này....'
            style={{
              width: '100%',
              border: '2px solid #b8b5b5',
              borderRadius: '4px',
              padding: '8px',
              resize: 'vertical',
              height: '5%',
              marginTop: '5px',
            }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className='flex gap-4 justify-end mt-1'>
            <button
              className='px-6 py-2 border-2 border-[#b8b5b5] rounded-lg  text-[15px] md:text-[18px]'
              onClick={handleResetReview}
            >
              Hủy
            </button>
            <button
              className='px-6 py-2 rounded-lg bg-green-500 text-white text-[15px] md:text-[18px]'
              onClick={() => handleAddReview()}
            >
              Gửi đánh giá
            </button>
          </div>
        </div>
      </div>
      {reviewList.length != 0 ? (
        <div className='mt-10'>
          {reviewList.map((item) => {
            return (
              <div className='flex py-3 justify-between border-b-2 border-[#cfcfcf] mt-4'>
                <div>
                  <p className='text-[20px] font-bold '>Nguyễn Công Bá</p>
                  <Rating name='half-rating' defaultValue={item.rating} precision={0.5} />
                  <p className='text-[18px]'>{item.reviewContent}</p>
                </div>
                <div className='flex flex-col justify-between items-end'>
                  <p className='text-[10px] md:text-[15px]'>{item.createdAt}</p>
                  {user._id == item.accountId ? (
                    <button className='p-4' onClick={() => handleDeleteComment(item._id)}>
                      <FontAwesomeIcon icon={faTrash} size='xl' color='red' />
                    </button>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <p className='text-[20px] italic text-center mt-10'>Chưa có đánh giá nào từ khách hàng!</p>
      )}
    </div>
  )
}
