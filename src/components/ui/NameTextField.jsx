import React from 'react'
import TextField from '@mui/material/TextField'

function NameTextField({ label, className, placeholder, value }) {
  return (
    <div className={`mx-auto w-full max-w-[432px] ${className}`}>
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
        placeholder={placeholder}
      />
    </div>
  )
}

export default NameTextField
