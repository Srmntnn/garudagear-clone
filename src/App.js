
import './App.css';
import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/homepage';
import ShopPage from './Pages/Shop';
import Productspage from './Pages/ProductsPage';
import DriversPage from './Pages/driverspage';
import FaqsPage from './Pages/faqspage';
import LoginSignUp from './Pages/LoginSignup'
import CartPage from './Pages/Cart'
import Footer from './Components/Footer/Footer';
import Signup from './Components/LoginSignupComponents/Signup';
import Login from './Components/LoginSignupComponents/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Checkout from './Components/Checkout/Checkout';
    

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path="/product" element={<Productspage />}> 
            <Route path=':productId' element={<Productspage />}/>
          </Route>
          <Route path='/driverspage' element={<DriversPage/>}/>
          <Route path='/faqspage' element={<FaqsPage/>}/>
          <Route path='/LoginSignup' 
            element=
            {
            <LoginSignUp/>
            }/>
          <Route path='/Cart' 
            element=
            {
            <PrivateRoute>
              <CartPage/>
            </PrivateRoute>
            }/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
