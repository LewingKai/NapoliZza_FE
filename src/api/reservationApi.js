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
            Authorization: `Bearer ${token}`, // Sử dụng token
          },
        },
      )
      return response.data
    } catch (error) {
      console.error('Lỗi khi tạo đặt bàn:', error.response?.data || error.message)
      throw error
    }
  }
}

export default new ReservationApi()
