import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './components/Layout'
import { routes } from './configs'
import ScrollToTop from './components/Layout/ScrollToTop'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
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
          <Route path={routes.SIGNIN} element={<SignIn />} />
          <Route path={routes.SIGNUP} element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default App
