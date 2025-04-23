import DishEndpoints from '~/services/dish.endpoints'
import axiosClient from './axiosClient'

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
      const res = await axiosClient.get(
        `${DishEndpoints.search}?page=${page}&limit=${itemPerPage}&category=${category}&name=${searchValue}&sort=price:${sortPrice},quantitySold:${sortStock}`,
      )
      return res.data
    } catch (error) {
      console.error('Lỗi từ server:', error)
      throw new Error('Đã có lỗi khi lấy món ăn: ', error)
    }
  }

  async getTopRatingDish(token) {
    try {
      const res = await axiosClient.get(`${DishEndpoints.getTopRating}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Sử dụng token
        },
      })
      return res.data
    } catch (error) {
      console.error('Lỗi từ server:', error)
      throw new Error('Đã có lỗi khi lấy món ăn: ', error)
    }
  }
}

const DishApi = new dishApi()
export default DishApi
