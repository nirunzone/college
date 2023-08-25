import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomeComponents from '../pages/HomeComponents'

function RouterComponents() {
  return (
    <React.Fragment>
    <Routes>
        <Route path='/' element={<HomeComponents/>}></Route>
    </Routes>
    </React.Fragment>
  )
}

export default RouterComponents