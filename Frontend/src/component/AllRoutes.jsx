import React from 'react'
import Home from '../Pages/Home'
import Mybag from '../Pages/Mybag'
import Signin from '../Pages/Signin'
import { Route, Routes } from 'react-router-dom'

 export function AllRoutes() {
  return (
    <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/mybag" element={<Mybag/>}/>
        <Route path="/signin" element={<Signin/>}/>

    </Routes>
  )
}

