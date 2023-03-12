import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from "../../pages/register/register";
import Home from "../../pages/home/Home"
import Login from "../../pages/login/login";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import AppHeader from "../AppHeader/AppHeader";
import Profile from "../../pages/profile/profile";
import {ProtectedRouteElement} from "../ProtectedRouteElement/ProtectedRouteElement";
import {accessUserData} from "../../services/actions/Auth";
import {useDispatch} from "react-redux";
import {getCookie} from "../../utils/constants";
import {getIngredients} from "../../services/actions/BurgerIngredients";


function App() {
  const authToken = getCookie('token');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
    if (authToken) {
      dispatch(accessUserData('GET', authToken));
    }
  }, [])

  return (
    <Router>
      <AppHeader/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<ProtectedRouteElement element={<Register/>} anon={true}/>}/>
        <Route path="/login" element={<ProtectedRouteElement element={<Login/>} anon={true}/>}/>
        <Route path="/forgot-password" element={<ProtectedRouteElement element={<ForgotPassword/>} anon={true}/>}/>
        <Route path="/reset-password" element={<ProtectedRouteElement element={<ResetPassword/>} anon={true}/>}/>
        <Route path="/profile" element={<ProtectedRouteElement element={<Profile/>} anon={false}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
