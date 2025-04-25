import { apiAuth } from '~/services'
import AccountEndpoints from '~/services/account.endpoints'

class AccountApi {
  async getAccount() {
    try {
      const res = await apiAuth.get(AccountEndpoints.getCustomerDetails)
      if (!res.data) {
        throw new Error('Không tìm thấy dữ liệu tài khoản.')
      }

      if (res.data.avatar && typeof res.data.avatar === 'object') {
        res.data.avatar = res.data.avatar.url || null
      }

      return res.data
    } catch (error) {
      console.error('Error fetching account:', error)
      throw new Error('Có lỗi xảy ra khi lấy thông tin tài khoản.')
    }
  }

  async updateAccount(accountData) {
    try {
      const res = await apiAuth.patch(AccountEndpoints.updateCustomerInfo, accountData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      return res.data
    } catch (error) {
      console.error('Error updating account:', error)
      throw new Error('Có lỗi xảy ra khi cập nhật thông tin tài khoản.')
    }
  }

  async changePassword(passwordData) {
    try {
      const res = await apiAuth.patch(AccountEndpoints.changePass, {
        password: passwordData.password,
        newpassword: passwordData.newpassword,
      })
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
