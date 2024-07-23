import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full flex flex-row items-center justify-between min-h-3 fixed top-0 bg-gray-400 px-2 py-3 '>

      <Link to="/about" className='text-gray-600' >
        <h1 className='font-semibold font-serif text-lg text-gray-600 ' >About </h1>
      </Link>


    </div>
  )
}

export default Header