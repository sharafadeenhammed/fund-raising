// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App({ children }) {
  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  )

}

export default App
