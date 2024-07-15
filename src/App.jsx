import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import  Home from './component/Home'
import Basket from './component/Basket'
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/basket' element={<Basket/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
