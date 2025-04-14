import { api } from '~/services'

class AccountApi {
  // Lấy thông tin tài khoản
  async getAccount(accessToken) {
    try {
      const res = await api.get('/customer/manageAccount', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      if (!res.data) {
        throw new Error('Không tìm thấy dữ liệu tài khoản.')
      }
      return res.data // Trả về dữ liệu tài khoản
    } catch (error) {
      console.error('Error fetching account:', error)
      throw new Error('Có lỗi xảy ra khi lấy thông tin tài khoản.')
    }
  }
}

const accountApi = new AccountApi()
export default accountApi
