import React from 'react'

export default function LoadingDisplay({ message = 'Đang xử lý...', isLoading }) {
  if (!isLoading) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-50'>
      <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-lg'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-third mb-4'></div>
        <p className='text-lg font-semibold text-gray-700'>{message}</p>
      </div>
    </div>
  )
}
