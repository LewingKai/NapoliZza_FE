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
          minWidth: '120px',
          padding: '8px 16px',
          fontSize: { xs: 12, sm: 14 },
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'medium',
          color: '#333333',
          transition: 'color 0.3s, background-color 0.3s',
          '&:hover': {
            backgroundColor: '#f4e4d8',
            color: '#233000',
          },
        },
        '& .MuiTabs-indicator': {
          backgroundColor: '#233000',
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
              color: '#7D0600',
              fontWeight: 'bold',
            },
          }}
        />
      ))}
    </Tabs>
  )
}

export default Navigation
