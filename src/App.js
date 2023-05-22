
import React from 'react'
import '../src/style.css'

import Main from './components/main'
import Navbar from './components/navbar'

export default function App(){
  return(
    <div className='container'>
      <Navbar/>
      <Main/>
    </div>
  )  
  
}


