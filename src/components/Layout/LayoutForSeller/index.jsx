import { Outlet } from 'react-router-dom'
import Navigation from '../Components/Seller/NagigationOfSellerPages'
import HeaderOfSeller from '../Components/Seller/HeaderofSeller'

export default function LayoutForSeller() {
  return (
    <div className='flex h-screen'>
      <Navigation />
      <main className='flex-1 overflow-y-auto ml-0.5'>
        <HeaderOfSeller />
        <Outlet />
      </main>
    </div>
  )
}
