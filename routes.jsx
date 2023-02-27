import React from "react"
import { Routes,Route,Navigate } from "react-router-dom"
import { HomePage } from './src/pages/HomePage/HomePage'



export const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to="/home" />}/>
    <Route path='/home' element={<HomePage/>}/>
  </Routes>
}
