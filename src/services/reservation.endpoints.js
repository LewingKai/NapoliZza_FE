const ReservationEndpoints = {
  createReservation: '/customer/reservation',
  getReservations: (status) => `/customer/reservation?status=${status}`,
  cancelReservation: (id) => `/customer/reservation/${id}`,
  changePaymentMethod: (id) => `/customer/reservation/${id}/payment-method`,
  changePaymentStatus: (id) => `/customer/reservation/${id}/payment-status`,
  paymentReservation: '/customer/reservation/create-payment-link',
  changeStatusReservation: '/admin/manageReservation',
}

export default ReservationEndpoints
