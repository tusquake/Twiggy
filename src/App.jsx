import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppDownload from './components/AppDownload/AppDownload';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Myorders from './pages/Myorders/Myorders';
import Payment from './pages/Payment/Payment';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Verify from './pages/Verify/Verify';

const App = () => {
  const [showLogin, setShowlogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowlogin={setShowlogin} /> : <></>}
      <div className='app'>
        <ToastContainer /> {/* ToastContainer is added here */}
        <Navbar setShowlogin={setShowlogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<Myorders />} />
        </Routes>
      </div>
      <AppDownload />
      <Footer />
    </>
  );
};

export default App;
