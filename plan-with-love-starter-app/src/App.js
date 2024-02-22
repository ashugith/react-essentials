import Data from './Data'
import React, { useState } from 'react';
import Tours from './components/Tours'

const App = () => {
  const [tours , setTours] = useState(Data)
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
      
    </div>
  )
}

export default App

