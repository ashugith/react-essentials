import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Layout/Navbar';
import About from './component/Pages/About';
import Gallery from './component/Pages/Gallery';
import Home from './component/Pages/Home';
import Register from './component/Pages/Register';
import Show from './component/Pages/Show';
import ErrorPage from './component/Pages/ErrorPage'
function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/show" element={<Show/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
      <h1 className='text-danger'>Project</h1>
    </div>
  );
}
export default App;

   
      

     


