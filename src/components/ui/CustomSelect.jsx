import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

function CustomSelect({ label, options, placeholder, value }) {
  return (
    <FormControl fullWidth>
      <InputLabel id={`select-label-${label.replace(/\s+/g, '-')}`}>{label}</InputLabel>
      <Select
        labelId={`select-label-${label.replace(/\s+/g, '-')}`}
        id={`select-${label.replace(/\s+/g, '-')}`}
        value={value}
        label={label}
        sx={{
          borderRadius: '8px',
          backgroundColor: '#F0F4F8',
        }}
        placeholder={placeholder}
      >
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
  handleChange: () => {},
}

export default CustomSelect
