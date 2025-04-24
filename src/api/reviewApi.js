import { apiAuth } from '~/services'
import ReviewEndpoints from '~/services/review.endpoints'

class reviewApi {
  async getReviewList(dishId) {
    try {
      const res = await apiAuth.get(`${ReviewEndpoints.getReviewList}/${dishId}`)
      return res.data
    } catch (error) {
      console.error('Lỗi lấy reivew:', error)
      throw new Error('Đã có lỗi khi lấy revire: ', error)
    }
  }

  async createReview(review) {
    try {
      const res = await apiAuth.post(ReviewEndpoints.createReview, review)
      return res
    } catch (error) {
      console.error('Lỗi lấy reivew:', error)
      throw new Error('Đã có lỗi khi lấy revire: ', error)
    }
  }

  async deleteReview(data) {
    try {
      const res = await apiAuth.delete(ReviewEndpoints.deleteReview, { data })
      return res
    } catch (error) {
      console.error('Lỗi lấy reivew:', error)
      throw new Error('Đã có lỗi khi lấy revire: ', error)
    }
  }
}

const ReviewApi = new reviewApi()
export default ReviewApi
