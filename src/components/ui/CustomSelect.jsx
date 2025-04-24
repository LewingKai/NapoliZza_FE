import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

function CustomSelect({ label, options, placeholder, value, onChange, className, ...rest }) {
  return (
    <FormControl fullWidth className={`mx-auto w-full max-w-[432px] ${className}`}>
      <InputLabel id={`select-label-${label.replace(/\s+/g, '-')}`}>{label}</InputLabel>
      <Select
        labelId={`select-label-${label.replace(/\s+/g, '-')}`}
        id={`select-${label.replace(/\s+/g, '-')}`}
        value={value}
        onChange={(event) => onChange && onChange(event.target.value)}
        label={label}
        sx={{
          borderRadius: '8px',
          backgroundColor: '#F0F4F8',
        }}
        {...rest}
      >
        {placeholder && (
          <MenuItem value='' disabled>
            {placeholder}
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

CustomSelect.defaultProps = {
  value: '',
  onChange: () => {},
  options: [],
  placeholder: '',
}

export default CustomSelect
