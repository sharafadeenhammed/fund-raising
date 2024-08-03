
import { Outlet } from 'react-router-dom'
import Header from './component/Header'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"

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
