import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { DefaultLayout } from './components/Layout'
import Menu from './pages/Menu'
function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
      </Route>
    </Routes>
  )
}

export default App
