import { useParams } from 'react-router-dom'
import img from '../../assets/images/detail/image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import DishApi from '~/api/dishApi'
import { useEffect, useState } from 'react'
import LoadingComponent from '~/components/ui/LoadingComponent'
import ReviewBox from './components/ReviewsBox'
import ReviewApi from '~/api/reviewApi'

export default function DetailPage() {
  const { id } = useParams()
  const [isLoadingDish, setIsLoadingDish] = useState(true)
  const [isLoadingReview, setIsLoadingReview] = useState(true)
  const [data, setData] = useState({})
  const [ingredientImg, setIngredientImg] = useState([])
  const [reviewList, setReviewList] = useState([])

  const fetchDishDetail = async () => {
    setIsLoadingDish(true)
    try {
      const res = await DishApi.getDetailDish(id)
      setData(res.data.data)
    } catch (error) {
      console.log('Lỗi khi lấy chi tiết món: ', error)
    } finally {
      setIsLoadingDish(false)
    }
  }

  const fetchCommentList = async () => {
    setIsLoadingReview(true)
    try {
      const res = await ReviewApi.getReviewList(id)
      setReviewList(res.data)
    } catch (error) {
      console.log('Lỗi khi lấy đánh giá: ', error)
    } finally {
      setIsLoadingReview(false)
    }
  }

  useEffect(() => {
    fetchDishDetail()
    fetchCommentList()
  }, [])

  if (isLoadingDish || isLoadingReview) {
    return <LoadingComponent />
  }

  return (
    <div className='bg-white'>
      <div
        style={{
          backgroundImage: `url(${data.dishImg.url ? data.dishImg.url : null})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='w-full h-[500px] flex flex-col items-center justify-center text-white gap-5'
      >
        <div className='w-full h-full bg-[#00000057] flex flex-col items-center justify-between px-5 py-10'>
          <div className='px-5 py-2 border-2 border-white flex justify-center bg-primary rounded-2xl'>
            <p className='text-white text-center italic font-serif text-[15px] md:text-[25px]'>
              Loại {data.category}
            </p>
          </div>
          <h1 className='text-center text-white text-[40px] md:text-[60px] font-bold px-[5vw]'>
            {data.name}
          </h1>
          <div className='flex justify-between gap-1 items-center'>
            <p className='text-[20px] md:text-[30px]'>Đánh giá: {data.rating.toFixed(1)}</p>
            <FontAwesomeIcon icon={faStar} size='lg' color='#FFF01E' />
          </div>
          <p className='text-black text-center text-[20px] md:text-[30px] font-bold mt-10 px-7 py-3 bg-white rounded-2xl'>
            {data.price} VNĐ
          </p>
        </div>
      </div>
      <div className='px-[10vw] py-10'>
        <p className='text-[25px] text-center '>{data.description}</p>
        <div className=' mt-10'>
          <h2 className='text-[30px] md:text-[40px] font-bold'>Nguyên liệu ...</h2>
          {data.ingredients.length != 0 ? (
            <ul className='list-disc pl-5'>
              {data.ingredients.map((item) => {
                return <li className='text-[25px] ml-10'>{item}</li>
              })}
            </ul>
          ) : (
            <p className='text-[15px] md:text-[20px] italic font-light'>
              Hiện tại chưa có nguyên liệu nào!
            </p>
          )}
        </div>
        {data.ingredientImgs.length != 0 ? (
          <div className='flex gap-2 justify-between mt-10'>
            <img
              src={data.ingredientImgs[0] ? data.ingredientImgs[0].url : null}
              alt='Ảnh nguyên liệu'
              className='w-[42vw]'
            />
            <img
              src={data.ingredientImgs[1] ? data.ingredientImgs[1].url : null}
              alt='Ảnh nguyên liệu'
              className='w-[42vw]'
            />
          </div>
        ) : null}

        {data.judgeContent.length != 0 ? (
          <div className='mt-15'>
            <h2 className='text-[50px] font-bold'>
              {data.judgeContent ? data.judgeContent[0].title : null}
            </h2>
            <p className='text-[25px] mt-3'>
              {data.judgeContent ? data.judgeContent[0].desc : null}
            </p>
          </div>
        ) : null}
      </div>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='w-[full] h-[400px] mb-10 items-center flex'
      >
        <h2 className='text-[30px] md:text-[50px] italic text-center px-[10vw] text-white'>
          Thưởng thức ngay tại NapoliZza – nơi hương vị Ý thăng hoa trong từng miếng Pizza!
        </h2>
      </div>
      <div className='border-1  border-black border-dashed w-70vw'></div>
      <ReviewBox reviewList={reviewList} fetchCommentList={fetchCommentList} dishDetail={data} />
    </div>
  )
}
