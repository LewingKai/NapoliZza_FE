import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { DefaultLayout } from './components/Layout'
import Menu from './pages/Menu'
import AboutUs from './pages/AboutUs'
import OurCommitNews from './pages/OurCommitNew'
import OperatingPolicyNew from './pages/OperatingPolicyNew'
import ContactInstructionsNew from './pages/ContactInstructionsNew'
import OrderInstructionsNew from './pages/OrderInstructionsNew'
import PolicyAndRegulations from './pages/PolicyAndRegulations'

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/ve-chung-toi' element={<AboutUs />} />
        <Route path='/cam-ket-cua-chung-toi' element={<OurCommitNews />} />
        <Route path='/chinh-sach-hoat-dong' element={<OperatingPolicyNew />} />
        <Route path='/chinh-sach-va-quy-dinh' element={<PolicyAndRegulations />} />
        <Route path='/huong-dan-dat-ban' element={<OrderInstructionsNew />} />
        <Route path='/huong-dan-lien-he' element={<ContactInstructionsNew />} />
      </Route>
    </Routes>
  )
}

export default App
