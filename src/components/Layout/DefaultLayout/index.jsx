import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import SideBar from '~/components/ui/SideBar'
import { useState } from 'react'

export default function DefaultLayout() {
  const [isOpenSidebar, setIsOpenSideBar] = useState(false)
  return (
    <div>
      <Header isOpenSidebar={isOpenSidebar} setIsOpenSideBar={setIsOpenSideBar} />
      <SideBar isOpenSidebar={isOpenSidebar} setIsOpenSideBar={setIsOpenSideBar} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
