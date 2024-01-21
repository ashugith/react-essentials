import './App.css';
import ChildA from './components/ChildA'
const msg = "Welcome to react app";


function App() {
  return (
    <div className='App'>
      <h1>Props Drilling in React</h1>
      <ChildA msgA = {msg}></ChildA>
      

    </div>
   
  );
}

export default App;
