import { apiAuth } from '~/services'
import AccountEndpoints from '~/services/account.endpoints'

class AccountApi {
  async getAccount() {
    try {
      const res = await apiAuth.get(AccountEndpoints.getCustomerDetails)
      if (!res.data) {
        throw new Error('Không tìm thấy dữ liệu tài khoản.')
      }
      return res.data
    } catch (error) {
      console.error('Error fetching account:', error)
      throw new Error('Có lỗi xảy ra khi lấy thông tin tài khoản.')
    }
  }

  async updateAccount(accountData) {
    try {
      const res = await apiAuth.put(AccountEndpoints.updateCustomerInfo, accountData)
      return res.data
    } catch (error) {
      console.error('Error updating account:', error)
      throw new Error('Có lỗi xảy ra khi cập nhật thông tin tài khoản.')
    }
  }

  async changePassword(passwordData) {
    try {
      const res = await apiAuth.put(AccountEndpoints.changePass, passwordData)
      return res.data
    } catch (error) {
      console.error('Error changing password:', error)
      throw new Error('Có lỗi xảy ra khi thay đổi mật khẩu.')
    }
  }

  async deleteAccount(userId) {
    try {
      const res = await apiAuth.delete(AccountEndpoints.deleteCustomer(userId))
      return res.data
    } catch (error) {
      console.error('Error deleting account:', error)
      throw new Error('Có lỗi xảy ra khi xóa tài khoản.')
    }
  }
}

export default new AccountApi()
