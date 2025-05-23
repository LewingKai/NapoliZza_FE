import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalStyles from './components/GlobalStyles'
import { store, persistor } from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles>
          <ToastContainer autoClose={1000} />
          <App />
        </GlobalStyles>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
