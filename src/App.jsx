// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './component/Header'

function App({ children }) {
  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />
    </>
  )

}

export default App
