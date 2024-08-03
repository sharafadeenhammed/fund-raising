
import Home from './screens/Home'
import React from 'react'
import { createHashRouter, RouterProvider, Router, createRoutesFromElements, Route } from "react-router-dom"
import App from './App'
import About from './screens/About'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' Component={App}>
      <Route path="/" index={true} element={<Home />} />
      <Route path="/about" index={true} element={<About />} />
    </Route>
  )
)
function Navigator() {
  return (
    <RouterProvider router={router} />

  )
}

export default Navigator