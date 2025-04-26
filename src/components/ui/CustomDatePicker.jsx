import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'

function CustomDatePicker({ label, className, placeholder, value, onChange, ...rest }) {
  return (
    <div className={`mx-auto w-full ${className}`}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value ? dayjs(value) : null}
          onChange={(newValue) => onChange && onChange(newValue ? newValue.toISOString() : null)}
          slotProps={{
            textField: {
              fullWidth: true,
              sx: {
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: '#F0F4F8',
                },
              },
              label,
              placeholder,
            },
          }}
          {...rest}
        />
      </LocalizationProvider>
    </div>
  )
}

CustomDatePicker.defaultProps = {
  value: null,
  onChange: () => {},
}

export default CustomDatePicker
