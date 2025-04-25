const AccountEndpoints = {
  getCustomerDetails: '/customer/manageAccount',
  updateCustomerInfo: '/customer/manageAccount',
  deleteCustomer: (id) => `/customer/manageAccount/${id}`,
  changePass: '/customer/manageAccount/changepass',
}

export default AccountEndpoints
