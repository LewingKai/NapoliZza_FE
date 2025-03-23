import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './components/Layout'
import { routes } from './configs'
import ScrollToTop from './components/Layout/ScrollToTop'

import Home from './pages/Home'
import Menu from './pages/Menu'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Đặt bên ngoài <Routes> */}
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.MENU} element={<Menu />} />
          <Route path={routes.SIGNIN} element={<SignIn />} />
          <Route path={routes.SIGNUP} element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
