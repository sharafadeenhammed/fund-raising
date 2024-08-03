import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/img/logo.png"
import { FaBars, FaCross, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';
import OngoingItemModal from './OngoingItemModal';

function Header() {
  const [ open, setOpen ] = useState(false)
  const [ openModal, setOpenModal ] = useState(false);
  return (
    <>
      <OngoingItemModal openModal={openModal} handleClose={() => setOpenModal(false)} />
      <AnimatePresence>
        <div
          key="one"
          className='z-40 md:w-full md:flex flex-row items-center justify-between min-h-3 fixed top-0 bg-red-950 px-2 py-3 hidden '>
          <div className='flex flex-row items-center justify-center'>
            <img className='mr-2 overflow-hidden h-8 inline-block' src={logo} alt="" />
            <h3 className='text-white text-lg font-bold '>Our<sapn className="text-orange-400" >Voices</sapn></h3>
          </div>


          <div className='flex flex-row items-center'>
            <NavLink to="/" className={({ isActive }) => (isActive ?
              " text-sm font-light text-white px-4 py-[1px] rounded-2xl bg-red-500" :
              'mx-2 text-sm font-light text-white rounded-lg hover:underline')} >
              <h1 className=' ' >Home </h1>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ?
              " text-sm font-light text-white px-4 py-[1px] rounded-2xl bg-red-500" :
              'mx-2 text-sm font-light text-white rounded-lg hover:underline')} >
              <h1 >About Us </h1>
            </NavLink>
            <NavLink to="/our-cause" className={({ isActive }) => (isActive ?
              " text-sm font-light text-white px-4 py-[1px] rounded-2xl bg-red-500" :
              'mx-2 text-sm font-light text-white rounded-lg hover:underline')} >
              <h1 >Ways to Fundraise </h1>
            </NavLink>
            {/* <NavLink to="/tools" className={({ isActive }) => (isActive ?
              " text-sm font-light text-white px-4 py-[1px] rounded-2xl bg-red-500" :
              'mx-2 text-sm font-light text-white rounded-lg hover:underline')} >
              <h1 >Tips and Tools </h1>
            </NavLink> */}
            {/* <NavLink to="/fundraise" className='mr-5 bg-red-700 rounded-[30px] px-5 py-2  text-sm font-bold text-white ' >
              <h1 >FUNDRAISE </h1>
            </NavLink> */}
            <div onClick={() => setOpenModal(true)} to="" className='mr-5 bg-orange-500 rounded-[30px] px-5 py-2 cursor-pointer  text-sm font-bold text-white ' >
              <h1 >DONATE </h1>
            </div>
          </div>
        </div>

        {/* hamburger */}
        <div
          onClick={() => setOpen(!open)}
          className=' md:hidden z-40 items-center justify-between min-h-3 fixed right-3 top-1 px-5 py-3 bg-orange-400 rounded-[10px] hover:cursor-pointer '
        >
          {
            !open ?
              <motion.div
                key="two"
                initial={{ y: -30 }}
                animate={{ y: 0 }}
                exit={{ y: 30 }}
              >
                <FaBars color='#ffffff' size={20} />
              </motion.div>
              :
              <motion.div
                key="three"
                initial={{ y: -30 }}
                animate={{ y: 0 }}
                exit={{ y: -30 }}
              >
                <FaTimes color='#ffffff' size={20} />
              </motion.div>

          }
        </div>

        {/* side nav bar */}
        {
          open ?
            <motion.div
              key="side nav bar"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300, opacity: 0 }}
              style={{ scrollbarWidth: "thin" }}
              className='z-40 overflow-y-scroll md:hidden scroll-smooth flex-col items-center justify-between h-[95vh] fixed top-0 bg-red-900 rounded-r-lg px-2 py-3 w-[50%] '>
              <div className='flex flex-row items-center justify-start mb-10'>
                <img className='mr-2 overflow-hidden h-8 inline-block' src={logo} alt="" />
                <h3 className='text-white text-lg font-bold '>Our<sapn className="text-orange-400" >Voices</sapn></h3>
              </div>


              <div className='flex flex-col  items-start'>
                <NavLink
                  onClick={() => setOpen(false)}
                  to="/" className={({ isActive }) => (isActive ?
                    " text-sm font-light text-white px-4 py-[1px] rounded-2xl bg-red-500" :
                    'mx-2 text-sm font-light my-5 text-white rounded-lg hover:underline')} >
                  <h1 className=' ' >Home </h1>
                </NavLink>
                <NavLink
                  onClick={() => setOpen(false)}
                  to="/about" className={({ isActive }) => (isActive ?
                    " text-sm font-light text-white px-4 py-[1px] rounded-2xl bg-red-500" :
                    'mx-2 text-sm my-5 font-light text-white rounded-lg hover:underline')} >
                  <h1 >About Us </h1>
                </NavLink>
                <NavLink
                  onClick={() => setOpen(false)}
                  to="/our-cause" className={({ isActive }) => (isActive ?
                    " text-sm font-light text-white px-4 py-[1px] rounded-2xl bg-red-500" :
                    'mx-2 text-sm my-5 font-light text-white rounded-lg hover:underline')} >
                  <h1 >Ways to Fundraise </h1>
                </NavLink>
                {/* <NavLink
                  onClick={() => setOpen(false)}
                  to="/tools" className={({ isActive }) => (isActive ?
                    " text-sm font-light text-white px-4 py-[1px] rounded-2xl bg-red-500" :
                    'mx-2 text-sm my-5 font-light text-white rounded-lg hover:underline')} >
                  <h1 >Tips and Tools </h1>
                </NavLink> */}
                {/* <NavLink
                  onClick={() => setOpen(false)}
                  to="/fundraise" className='mr-5 bg-red-700 rounded-[30px] px-5 py-2  text-sm font-bold my-5 text-white ' >
                  <h1 >FUNDRAISE </h1>
                </NavLink> */}
                {/* <NavLink
                  onClick={() => setOpen(false)}
                  to="/donate" className='mr-5 bg-orange-500 rounded-[30px] px-5 py-2  text-sm font-bold my-3 text-white ' >
                  <h1 >DONATE </h1>
                </NavLink> */}
                <div onClick={() => setOpenModal(true)} to="" className='mr-5 bg-orange-500 rounded-[30px] px-5 py-2 cursor-pointer  text-sm font-bold text-white ' >
                  <h1 >DONATE </h1>
                </div>

              </div>
            </motion.div>
            : null
        }
      </AnimatePresence>
    </>


  )
}

export default Header