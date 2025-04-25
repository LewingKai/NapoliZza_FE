import React from 'react'
import { Modal, Box } from '@mui/material'
import { Button } from '~/components/ui/Button'

export default function ConfirmationModal({ isOpen, onClose, onConfirm, message }) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box className='max-w-[400px] p-5 bg-white rounded-lg shadow-lg mx-auto mt-20'>
        <p className='text-center text-lg mb-4'>{message}</p>
        <div className='flex justify-center gap-4'>
          <Button variant='outline' size='lg' className='bg-red-600' onClick={onConfirm}>
            Xác nhận
          </Button>
          <Button variant='outline' size='lg' className='border-black text-black' onClick={onClose}>
            Hủy
          </Button>
        </div>
      </Box>
    </Modal>
  )
}
