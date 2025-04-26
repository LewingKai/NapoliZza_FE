import AuthEndpoints from '~/services/auth.endpoints'
import { api } from '~/services'

class authApi {
  async logout() {
    try {
      const res = await api.post(AuthEndpoints.logout)
      return res.data
    } catch (error) {
      throw new Error('Có lỗi xảy ra khi đăng xuất: ', error)
    }
  }

  async sendOTP(email) {
    try {
      const res = await api.post(AuthEndpoints.sendOTP, { email })
      return res.data
    } catch (error) {
      throw new Error('Có lỗi xảy ra khi gửi OTP: ', error)
    }
  }

  async verifyOTP(email, otp) {
    try {
      const res = await api.post(AuthEndpoints.verifyOTP, { email, otp })
      return res.data
    } catch (error) {
      throw new Error('Có lỗi xảy ra khi xác minh OTP: ', error)
    }
  }

  async changePassByOTP(email, otp, newpass) {
    try {
      const res = await api.post(AuthEndpoints.changePassByOTP, { email, otp, newpass })
      return res.data
    } catch (error) {
      throw new Error('Có lỗi xảy ra khi đổi mật khẩu bằng OTP: ', error)
    }
  }
}

const AuthApi = new authApi()
export default AuthApi
