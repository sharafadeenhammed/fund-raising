
import React from 'react'
import { createHashRouter, RouterProvider, Router, createRoutesFromElements, Route } from "react-router-dom"
import App from './App'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' Component={App}>
      <Route path="/" index={true} element={<h1 className='text-3xl text-white'>hello</h1>} />
    </Route>
  )
)
function Navigator() {
  return (
    <RouterProvider router={router} />
  )
}

export default Navigator