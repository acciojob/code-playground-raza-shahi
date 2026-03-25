import React from "react";
import './../styles/App.css';
import { useState } from "react";
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import {Routes,Route,Link} from 'react-router-dom';


const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="main-container">
      {isLogin ? <h2>Logged in, Now you can enter playground</h2> : <h2>You are not authenticaed, Login first</h2>}

      <ul>
        <li><Link to='/play-ground'>Play Ground</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>

      <Routes>
        <Route path="/login" element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />} />
        <Route path='/play-ground' element={isLogin ? <PrivateRoute /> : <Login isLogin={isLogin} setIsLogin={setIsLogin} />} />
      </Routes>
      
    </div>
  )
}

export default App
