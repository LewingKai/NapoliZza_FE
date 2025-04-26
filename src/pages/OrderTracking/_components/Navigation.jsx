import React from 'react'
import { Tabs, Tab } from '@mui/material'

const Navigation = ({ labels, value, onChange }) => {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      variant='scrollable'
      scrollButtons='auto'
      aria-label='navigation tabs'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fdf8e7',
        '& .MuiTabs-flexContainer': {
          justifyContent: 'center',
        },
        '& .MuiTab-root': {
          minWidth: '40px',
          padding: { xs: '6px 12px', sm: '8px 16px' },
          fontSize: { xs: '10px', sm: '14px' },
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'medium',
          color: 'var(--color-black)',
          transition: 'color 0.3s, background-color 0.3s',
          '&:hover': {
            backgroundColor: '#cfe1b9',
            color: 'var(--color-third)',
          },
        },
        '& .MuiTabs-indicator': {
          backgroundColor: 'var(--color-third)',
          height: '3px',
        },
      }}
    >
      {labels.map((label, index) => (
        <Tab
          key={`tab-${index}`}
          label={label}
          sx={{
            '&.Mui-selected': {
              color: 'var(--color-third)',
              fontWeight: 'bold',
            },
          }}
        />
      ))}
    </Tabs>
  )
}

export default Navigation
