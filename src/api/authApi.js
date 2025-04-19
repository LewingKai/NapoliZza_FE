import AuthEndpoints from '~/services/auth.endpoints'
import axiosClient from './axiosClient'

class authApi {
  async logout() {
    try {
      const res = await axiosClient.post(AuthEndpoints.logout)
      return res.data
    } catch (error) {
      throw new Error('Có lỗi xảy ra khi đăng xuất: ', error)
    }
  }
}

const AuthApi = new authApi()
export default AuthApi
