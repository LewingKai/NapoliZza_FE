// Kiểm tra trường không được để trống
export const validateRequired = (value) => value && value.trim() !== ''

// Kiểm tra tên hợp lệ (chỉ chứa chữ cái và viết hoa chữ cái đầu mỗi từ)
export const validateName = (value) => {
  const nameRegex = /^[A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯỲÝỴỶỸàáâãèéêìíòóôõùúăđĩũơưỳýỵỷỹ\s]+$/
  return (
    nameRegex.test(value) &&
    value.split(' ').every((word) => word.charAt(0) === word.charAt(0).toUpperCase())
  )
}

// Kiểm tra email hợp lệ (chỉ chấp nhận email dạng ***@gmail.com)
export const validateEmail = (value) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
  return emailRegex.test(value)
}

// Kiểm tra số điện thoại hợp lệ (chỉ chứa 10 chữ số)
export const validatePhone = (value) => {
  const phoneRegex = /^\d{10}$/
  return phoneRegex.test(value)
}

// Kiểm tra mật khẩu hợp lệ (ít nhất 6 ký tự)
export const validatePassword = (value) => value && value.length >= 6

// Kiểm tra xác nhận mật khẩu (phải khớp với mật khẩu)
export const validateConfirmPassword = (password, confirmPassword) =>
  confirmPassword !== '' && password === confirmPassword

// Kiểm tra ngày sinh hợp lệ (không được để trống)
export const validateBirthday = (value) => value && value.trim() !== ''

// Kiểm tra giới tính hợp lệ (không được để trống)
export const validateGender = (value) => value && value.trim() !== ''
