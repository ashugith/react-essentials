import './App.css';
import Navbar from './Navbar/Navbar'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Footer/Footer';
import men_banner from './Assets/banner_mens.png'
import women_banner from './Assets/banner_women.png'
import kids_banner from './Assets/banner_kids.png'




function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens"/>}/>
      <Route path='/womens' element={<ShopCategory banner={women_banner}category="womens"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>}/>
      <Route path="/product" element={<Product/>}>
        < Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
     
      

      
    </div>
  );
  
}

export default App;
