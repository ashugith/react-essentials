import {Route, Routes , BrowserRouter} from 'react-router-dom'
import './App.css';
import Navbar from './components/Layout/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        {/* <Route path='/contact' element={<Contact/>}></Route> */}
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
