import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

function EmailTextField({ label, className, value, handleChange }) {
  const [error, setError] = useState(false)

  const handleBlur = () => {
    const emailPattern = /@/
    if (!emailPattern.test(value)) {
      setError(true)
    }
  }

  return (
    <div className={`mx-auto max-w-[432px] h-[34px] my-5 ${className}`}>
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
        value={value}
        onChange={(e) => {
          handleChange(e)
          if (error) setError(false)
        }}
        onBlur={handleBlur}
        required
        error={error}
        helperText={error ? 'Vui lòng nhập địa chỉ email hợp lệ' : ''}
      />
    </div>
  )
}

export default EmailTextField
