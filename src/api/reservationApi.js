import axiosClient from '~/api/axiosClient'
import ReservationEndpoints from '~/services/reservation.endpoints'

class ReservationApi {
  async createReservation(reservationData, token) {
    try {
      const response = await axiosClient.post(
        ReservationEndpoints.createReservation,
        reservationData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      return response.data
    } catch (error) {
      console.error('Lỗi khi tạo đặt bàn:', error.response?.data || error.message)
      throw error
    }
  }

  async getReservations(token, status) {
    try {
      const response = await axiosClient.get(ReservationEndpoints.getReservations(status), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return response.data
    } catch (error) {
      console.error('Lỗi khi lấy danh sách đặt bàn:', error.response?.data || error.message)
      throw error
    }
  }

  async cancelReservation(id, token) {
    try {
      const response = await axiosClient.delete(ReservationEndpoints.cancelReservation(id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return response.data
    } catch (error) {
      console.error('Lỗi khi hủy đặt bàn:', error.response?.data || error.message)
      throw error
    }
  }

  async changePaymentMethod(id, paymentMethod, token) {
    try {
      const response = await axiosClient.put(
        ReservationEndpoints.changePaymentMethod(id),
        { paymentMethod },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      return response.data
    } catch (error) {
      console.error(
        'Lỗi khi thay đổi phương thức thanh toán:',
        error.response?.data || error.message,
      )
      throw error
    }
  }
}

export default new ReservationApi()
