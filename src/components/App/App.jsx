import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation, useNavigate} from 'react-router-dom';
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
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";


function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const authToken = getCookie('token');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getIngredients());
    if (authToken) {
      dispatch(accessUserData('GET', authToken));
    }
  }, [])

  const onModalClose = () => {
    navigate(-1);
  };

  return (

    <>
      <AppHeader/>
      <Routes location={background || location}>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<ProtectedRouteElement element={<Register/>} anon={true}/>}/>
        <Route path="/login" element={<ProtectedRouteElement element={<Login/>} anon={true}/>}/>
        <Route path="/forgot-password" element={<ProtectedRouteElement element={<ForgotPassword/>} anon={true}/>}/>
        <Route path="/reset-password" element={<ProtectedRouteElement element={<ResetPassword/>} anon={true}/>}/>
        <Route path="/profile" element={<ProtectedRouteElement element={<Profile/>} anon={false}/>}/>
        <Route path="/ingredients/:id" element={<IngredientDetails/>}/>
      </Routes>
      {background && (
        <Routes location={location}>
          <Route path="/ingredients/:id" element={
            <Modal onClose={onModalClose}>
              <IngredientDetails/>
            </Modal>}
          >s
          </Route>
        </Routes>
      )}
    </>

  );
}

export default App;
