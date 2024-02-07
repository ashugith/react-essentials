import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[name, setText] = useState('');
  // variations - on fisrt render + whenever dependency changes
  useEffect (() => {
    console.log("Change observed")
  }, [name]);
  function changeHandler(event){
    setText(event.target.value);
    console.log(name);
  }
  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
      
    </div>
  );
}

export default App;
