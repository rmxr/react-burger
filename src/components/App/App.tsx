import React, {useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Register from "../../pages/Register/Register";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import AppHeader from "../AppHeader/AppHeader";
import Profile from "../../pages/Profile/Profile";
import {ProtectedRouteElement} from "../ProtectedRouteElement/ProtectedRouteElement";
import {accessUserData} from "../../services/actions/auth";
import {getCookie} from "../../utils/util";
import {getIngredients} from "../../services/actions/burgerIngredients";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";
import {useAppDispatch} from "../../utils/hooks";
import Feed from "../../pages/Feed/Feed";
import FeedOrderDetails from "../FeedOrderDetails/FeedOrderDetails";
import ProfileOrders from "../ProfileOrders/ProfileOrders";
import {ROUTES} from "../../constants/routes";


function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const authToken = getCookie('token');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getIngredients());
    if (authToken) {
      dispatch(accessUserData('GET', authToken));
    }
  }, [authToken, dispatch])

  const onModalClose = () => {
    navigate(-1);
  };

  return (

    <>
      <AppHeader/>
      <Routes location={background || location}>
        <Route path={ROUTES.home} element={<Home/>}/>
        <Route path={ROUTES.feed} element={<Feed/>}/>
        <Route path={ROUTES.feedItem} element={<FeedOrderDetails/>}/>
        <Route path={ROUTES.register} element={<ProtectedRouteElement element={<Register/>} anon={true}/>}/>
        <Route path={ROUTES.login} element={<ProtectedRouteElement element={<Login/>} anon={true}/>}/>
        <Route path={ROUTES.forgotPassword} element={<ProtectedRouteElement element={<ForgotPassword/>} anon={true}/>}/>
        <Route path={ROUTES.resetPassword} element={<ProtectedRouteElement element={<ResetPassword/>} anon={true}/>}/>
        <Route path={ROUTES.profileOrdersItem}
               element={<ProtectedRouteElement element={<FeedOrderDetails/>} anon={false}/>}/>
        <Route path={ROUTES.profile} element={<ProtectedRouteElement element={<Profile/>} anon={false}/>}>
          <Route path={ROUTES.orders} element={<ProfileOrders/>}/>
        </Route>
        <Route path={ROUTES.ingredientsItem} element={<IngredientDetails/>}/>
      </Routes>
      {background && (
        <Routes location={location}>
          <Route path={ROUTES.ingredientsItem} element={
            <Modal onClose={onModalClose}>
              <IngredientDetails/>
            </Modal>}
          >
          </Route>
          <Route path={ROUTES.feedItem} element={
            <Modal onClose={onModalClose}>
              <FeedOrderDetails/>
            </Modal>}
          >
          </Route>
          <Route path={ROUTES.profileOrdersItem} element={
            <Modal onClose={onModalClose}>
              <ProtectedRouteElement element={<FeedOrderDetails/>} anon={false}/>
            </Modal>}
          >
          </Route>
        </Routes>
      )}
    </>

  );
}

export default App;