import React from "react";
import  {AppBarComp} from './components/AppBar';
import { useEffect, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import  {authOperations}  from "./redux/auth";
import { authSelectors } from "./redux/auth";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/Routes/PrivateRoute"
import PublicRoute from "./components/Routes/PublicRoute"


const HomePage = lazy(() => import('./views/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./views/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./views/LoginPage/LoginPage'));
const ContactPage = lazy(() => import('./views/ContactsPage/ContactPage'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
       <AppBarComp />
  
      {!isFetchingCurrentUser && (
          <Routes>
     <Route 
     path="/"
     exact="true"
      element={
      <PublicRoute>
      <Suspense fallback="">
        <HomePage />
        </Suspense>
      </PublicRoute>
    } 
    />
      <Route 
       path="/register"
       exact="true"
        element={
          <PublicRoute restricted>
        <Suspense fallback="">
          <RegisterPage />
          </Suspense>
          </PublicRoute>}
          />
      <Route 
      path ="/login"
      exact ="true"
       element={
         <PublicRoute restricted>
       <Suspense fallback="">
         <LoginPage />
         </Suspense>
         </PublicRoute>}/>
      <Route  
      path="/contacts"
      exact ="true"
      element ={
      <PrivateRoute>
        <Suspense fallback="">
         <ContactPage/> 
         </Suspense>
      </PrivateRoute>}/>  
   </Routes>

        )}
    </>
  );
}