import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'

function ValidatedTextField({
  label,
  value,
  onChange,
  validationRules,
  errorMessage,
  className,
  placeholder,
  ...props
}) {
  const [error, setError] = useState(false)

  const handleBlur = () => {
    if (validationRules && !validationRules(value)) {
      setError(true)
    } else {
      setError(false)
    }
  }

  const handleChange = (event) => {
    const inputValue = event.target.value
    onChange && onChange(inputValue)
    if (validationRules && validationRules(inputValue)) {
      setError(false)
    }
  }

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
        onChange={handleChange}
        onBlur={handleBlur}
        error={error}
        helperText={error ? errorMessage : ''}
        {...props}
      />
    </div>
  )
}

ValidatedTextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validationRules: PropTypes.func,
  errorMessage: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
}

ValidatedTextField.defaultProps = {
  validationRules: () => true,
  errorMessage: '',
  className: '',
  placeholder: '',
}

export default ValidatedTextField
