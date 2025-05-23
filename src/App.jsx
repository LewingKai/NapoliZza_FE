import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './components/Layout'
import { routes } from './routes'
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
import DetailPage from './pages/DetailPage'
import Reservation from './pages/Reservation'
import OrderMenu from './pages/OrderMenu'
import OrderTracking from './pages/OrderTracking'
import DetailAccount from './pages/DetailAccount'
import VerifyOTP from './pages/VerifyOTP'
import ChangePasswordByOTP from './pages/ChangePasswordByOTP'
import LayoutForSeller from './components/Layout/LayoutForSeller'
import ScrollToTop from './components/Layout/ScrollToTop'
import Dashboard from './pages/Admin/Dashboard'
import ManageOder from './pages/Admin/ManageOder'
import ManageFood from './pages/Admin/ManageFood'
// import Dashboard from './pages/Admin/Dashboard'
// import ManageOder from './pages/Admin/ManageOder'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.MENU} element={<Menu />} />
          <Route path={routes.ABOUTUS} element={<AboutUs />} />
          <Route path={routes.COMMIT} element={<OurCommitNews />} />
          <Route path={routes.OPERATING_POLICY} element={<OperatingPolicyNew />} />
          <Route path={routes.POLICIES_REGULATIONS} element={<PolicyAndRegulations />} />
          <Route path={routes.BOOKING_GUIDE} element={<OrderInstructionsNew />} />
          <Route path={routes.CONTACT_INSTRUCTIONS} element={<ContactInstructionsNew />} />
          <Route path={routes.SIGNIN} element={<SignIn />} />
          <Route path={routes.SIGNUP} element={<SignUp />} />
          <Route path={routes.DETAILPAGE} element={<DetailPage />} />
          <Route path={routes.RESERVATION} element={<Reservation />} />
          <Route path={routes.ORDERMENU} element={<OrderMenu />} />
          <Route path={routes.ORDER_TRACKING} element={<OrderTracking />} />
          <Route path={routes.DETAIL_ACCOUNT} element={<DetailAccount />} />
          <Route path={routes.VERIFY_OTP} element={<VerifyOTP />} />
          <Route path={routes.CHANGE_PASSWORD} element={<ChangePasswordByOTP />} />
        </Route>

        <Route element={<LayoutForSeller />}>
          <Route path={routes.DASHBOARD} element={<Dashboard />} />
          <Route path={routes.MANAGEREQUEST} element={<ManageOder />} />
          <Route path={routes.MANAGEFOOD} element={<ManageFood />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
