import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { DefaultLayout } from './components/Layout'
import Menu from './pages/Menu'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/dang-nhap' element={<SignIn />} />
        <Route path='/dang-ky' element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default App
