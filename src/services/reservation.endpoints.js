const ReservationEndpoints = {
  createReservation: '/customer/reservation',
  getReservations: (status) => `/customer/reservation?status=${status}`,
  cancelReservation: (id) => `/customer/reservation/${id}`,
  changePaymentMethod: (id) => `/customer/reservation/${id}/payment-method`,
  changeStatusReservation: '/admin/manageReservation',
  paymentReservation: '/customer/reservation/create-payment-link',
}

export default ReservationEndpoints
