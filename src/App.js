
import React from 'react'
import axios from 'axios'
import GetData from './component/getData';


const App = () => {

  
  
  ( async () => {
  const About = await GetData(1,2)
    console.log(About)
    
    })()
    
  return ( 
  <div>
  </div>
  )
}

export default App







