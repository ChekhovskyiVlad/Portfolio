import React from "react"
import { Routes,Route,Navigate } from "react-router-dom"
import { HomePage } from './src/pages/HomePage/HomePage'
import { Project1 } from './src/pages/Projects/Project1/Project1'
import { Project2 } from './src/pages/Projects/Project2/Project2'
import { Project3 } from './src/pages/Projects/Project3/Project3'


export const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to="/home" />}/>
    <Route path='/home' element={<HomePage/>}/>
    <Route path='/project1' element={<Project1/>}/>
    <Route path='/project2' element={<Project2/>}/>
    <Route path='/project3' element={<Project3/>}/>

  </Routes>
}
