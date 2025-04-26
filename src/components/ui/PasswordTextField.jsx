import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

function PasswordTextField({ label, confirm = false, className, placeholder, value, onChange }) {
  const [password, setPassword] = useState(value || '')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)
  const [matchError, setMatchError] = useState(false)

  const isPasswordValid = (password) => password.length >= 6

  const isConfirmPasswordValid = (password, confirmPassword) =>
    confirmPassword !== '' && password === confirmPassword

  const handlePasswordBlur = () => {
    setErrorPassword(!isPasswordValid(password))
  }

  const handleConfirmPasswordBlur = () => {
    setErrorConfirmPassword(confirmPassword === '')
    setMatchError(!isConfirmPasswordValid(password, confirmPassword))
  }

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value
    setPassword(newPassword)
    onChange && onChange(newPassword) // Gọi hàm onChange từ props nếu có
  }

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value
    setConfirmPassword(newConfirmPassword)
  }

  const toggleShowPassword = () => setShowPassword((prev) => !prev)
  const toggleShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev)

  return (
    <div className={`mx-auto w-full ${className}`}>
      <TextField
        sx={{
          margin: 'auto',
          width: '100%',
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: '#F0F4F8',
          },
        }}
        label={label}
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur} // Kiểm tra khi người dùng rời khỏi trường nhập liệu
        type={showPassword ? 'text' : 'password'}
        error={errorPassword}
        placeholder={placeholder}
        helperText={errorPassword ? 'Mật khẩu phải có ít nhất 6 kí tự' : ''}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={toggleShowPassword} edge='end'>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {confirm && (
        <TextField
          sx={{
            margin: 'auto',
            width: '100%',
            marginTop: '16px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              backgroundColor: '#F0F4F8',
            },
          }}
          label='Nhập lại mật khẩu'
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          onBlur={handleConfirmPasswordBlur} // Kiểm tra khi người dùng rời khỏi trường nhập liệu
          type={showConfirmPassword ? 'text' : 'password'}
          error={errorConfirmPassword || matchError}
          placeholder={placeholder}
          helperText={
            errorConfirmPassword
              ? 'Đây là trường bắt buộc'
              : matchError
                ? 'Mật khẩu không trùng khớp'
                : ''
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={toggleShowConfirmPassword} edge='end'>
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    </div>
  )
}

export default PasswordTextField
