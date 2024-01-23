import './App.css';
import { useState } from 'react';


function App() {
  const[count , setCount] = useState(0);
  function decreaseHandler(){
    setCount(count-1);

  }
  function increaseHandler(){
    setCount(count+1);

  }
  function resetHandler(){
    setCount(0);

  }
  return (
    <div className="App">
      <div className='in_de'>Increment && Decrement</div>
      <div className='btn'>
        <button onClick={increaseHandler}>
          +
        </button>
        <div className='counter'>
          {count}

        </div>
        <button onClick={decreaseHandler}>
        -
      </button>
      </div>
      <button onClick={resetHandler} className='reset'>
        reset
        </button>

    </div>
  );
}

export default App;
