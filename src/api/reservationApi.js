import { apiAuth } from '~/services'
import ReservationEndpoints from '~/services/reservation.endpoints'

class ReservationApi {
  async createReservation(reservationData) {
    try {
      const response = await apiAuth.post(ReservationEndpoints.createReservation, reservationData)
      return response.data
    } catch (error) {
      console.error('Lỗi khi tạo đặt bàn:', error.response?.data || error.message)
      throw error
    }
  }

  async getReservations(status) {
    try {
      const response = await apiAuth.get(ReservationEndpoints.getReservations(status))
      return response.data
    } catch (error) {
      console.error('Lỗi khi lấy danh sách đặt bàn:', error.response?.data || error.message)
      throw error
    }
  }

  async cancelReservation(id) {
    try {
      const response = await apiAuth.delete(ReservationEndpoints.cancelReservation(id))
      return response.data
    } catch (error) {
      console.error('Lỗi khi hủy đặt bàn:', error.response?.data || error.message)
      throw error
    }
  }

  async changePaymentMethod(id, paymentMethod) {
    try {
      const response = await apiAuth.patch(ReservationEndpoints.changePaymentMethod(id), {
        paymentMethod,
      })
      return response.data
    } catch (error) {
      console.error(
        'Lỗi khi thay đổi phương thức thanh toán:',
        error.response?.data || error.message,
      )
      throw error
    }
  }

  async changePaymentStatus(id) {
    try {
      const response = await apiAuth.patch(ReservationEndpoints.changePaymentStatus(id))
      return response.data
    } catch (error) {
      console.error(
        'Lỗi khi cập nhật trạng thái thanh toán:',
        error.response?.data || error.message,
      )
      throw error
    }
  }

  async createPaymentLink(reservationData) {
    try {
      const response = await apiAuth.post(ReservationEndpoints.paymentReservation, reservationData)
      return response.data
    } catch (error) {
      console.error('Lỗi khi tạo liên kết thanh toán:', error.response?.data || error.message)
      throw error
    }
  }
}

export default new ReservationApi()
