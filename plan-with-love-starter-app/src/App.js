
import Data from './Data'
import React, { useState } from 'react';
import Tours from './components/Tours'

const App = () => {
  const [tours , setTours] = useState(Data)
  return (
    <div>
      <Tours tours={tours}></Tours>
      
    </div>
  )
}

export default App

