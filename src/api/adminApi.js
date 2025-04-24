import { apiAuth } from '~/services'
import DishEndpoints from '~/services/dish.endpoints'
import ReservationEndpoints from '~/services/reservation.endpoints'

class adminApi {
  async getAllReservation(status) {
    try {
      const res = await apiAuth.get(`${DishEndpoints.manageReservation}?status=${status}`)
      return res
    } catch (error) {
      console.log('Có lỗi xảy ra khi lấy các đơn đặt: ', error)
      throw new Error('Có lỗi xảy ra khi lấy các đơn đặt: ', error)
    }
  }
  async handleDeleteDish(id) {
    try {
      const res = await apiAuth.delete(`${DishEndpoints.deleteDish}/${id}`)
      return res
    } catch (error) {
      console.log('Có lỗi xảy ra khi xóa món ăn: ', error)
      throw new Error('Có lỗi xảy ra khi xóa món ăn: ', error)
    }
  }

  async handleUpdateDish(id, dish) {
    try {
      const res = await apiAuth.patch(`${DishEndpoints.updateDish}/${id}`, dish)
      return res
    } catch (error) {
      console.log('Có lỗi xảy ra khi update món ăn: ', error)
      throw new Error('Có lỗi xảy ra khi update món ăn: ', error)
    }
  }

  async addADish(dish) {
    try {
      const res = await apiAuth.post(DishEndpoints.addDish, dish)
      return res
    } catch (error) {
      console.log('Có lỗi xảy ra khi add món ăn: ', error)
      throw new Error('Có lỗi xảy ra khi add món ăn: ', error)
    }
  }

  async changeStatusReservation(data) {
    try {
      const res = await apiAuth.post(ReservationEndpoints.changeStatusReservation, data)
      return res
    } catch (error) {
      console.log('Có lỗi xảy ra khi đổi trạng thái đơn: ', error)
      throw new Error('Có lỗi xảy ra khi đổi trạng thái đơn: ', error)
    }
  }
}

const AdminApi = new adminApi()
export default AdminApi
