import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import ProtectedRoute from './features/auth/ProtectedRoute'
import Dashboard from './pages/Dashboard/Dashboard'
import Products from './pages/Products/Products'

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
          <Route path='/products' element={<Products />} />
        </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
