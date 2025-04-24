import DishEndpoints from '~/services/dish.endpoints'
import { apiAuth } from '~/services'
class dishApi {
  async searchDish(itemPerPage, page, searchValue, category, sortList) {
    let sortPrice = ''
    let sortStock = ''
    for (let i = 0; i < sortList.length; i++) {
      if (sortList[i] == 1) {
        sortPrice = 'asc'
      } else if (sortList[i] == 2) {
        sortPrice = 'desc'
      } else if (sortList[i] == 3) {
        sortStock = 'asc'
      } else if (sortList[i] == 4) {
        sortStock = 'desc'
      }
    }
    try {
      const res = await apiAuth.get(
        `${DishEndpoints.search}?page=${page}&limit=${itemPerPage}&category=${category}&name=${searchValue}&sort=price:${sortPrice},quantitySold:${sortStock}`,
      )
      return res.data
    } catch (error) {
      console.error('Lỗi từ server:', error)
      throw new Error('Đã có lỗi khi lấy món ăn: ', error)
    }
  }

  async getTopRatingDish() {
    try {
      const res = await apiAuth.get(DishEndpoints.getTopRating)
      return res.data
    } catch (error) {
      console.error('Lỗi lấy món nổi bật:', error)
      throw new Error('Đã có lỗi khi lấy món ăn: ', error)
    }
  }

  async getDetailDish(dishId) {
    try {
      const res = await apiAuth.get(`${DishEndpoints.detailDish}/${dishId}`)
      return res
    } catch (error) {
      console.error('Lỗi lấy detail món:', error)
      throw new Error('Đã có lỗi khi lấy món ăn: ', error)
    }
  }
}

const DishApi = new dishApi()
export default DishApi
