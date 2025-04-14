import React from 'react'
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'

const DisabledTextField = ({ value, label, className }) => {
  return (
    <div className={`mx-auto w-full sm:max-w-[300px] md:max-w-[500px] my-5 ${className}`}>
      <TextField
        label={label}
        value={value}
        InputProps={{
          readOnly: true,
        }}
        sx={{
          margin: 'auto',
          width: '100%',
          '& .MuiOutlinedInput-root': {
            borderRadius: '20px',
            '& .MuiInputBase-input.Mui-disabled': {
              WebkitTextFillColor: '#333333',
            },
          },
          '& .MuiOutlinedInput-root.Mui-disabled fieldset.MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
          },
        }}
        disabled
      />
    </div>
  )
}

DisabledTextField.propTypes = {
  value: PropTypes.string.isRequired, // Giá trị hiển thị, bắt buộc
  label: PropTypes.string.isRequired, // Nhãn của trường, bắt buộc
  className: PropTypes.string, // Lớp CSS tùy chỉnh
}

DisabledTextField.defaultProps = {
  className: '', // Giá trị mặc định cho className
}

export default DisabledTextField
