import React from 'react'
import Navigation from './Navigation'
import { Route, Routes, } from "react-router-dom";
import Home from '../Pages/Home'


const Main = () => {
  return (
    <>
        <Navigation/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </>
  )
}

export default Main