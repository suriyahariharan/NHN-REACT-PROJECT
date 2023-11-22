import React, { useState } from "react";
import Metamask from './metamask/metamask'
import "./App.css";
import { useMoralis } from 'react-moralis';
import Home from "./components/pages/Home";
import Manager from './components/managerdashboard/manager'
import { BrowserRouter as Router, Routes, Switch, Route } from "react-router-dom";
import Registration from "./components/pages/Registration";
import Reports from "./components/pages/Reports";
import Prescription from "./components/pages/Prescription";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import Doctor from './components/doctordashboard/doctor';
import Patient from './components/userDashboard/userdashboard';

function App() {
  const [id,setId]= useState('');
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    
    const login = async () => {
      if (!isAuthenticated) {
  
        await authenticate({ signingMessage: "Log in" })
          .then(function (user) {
            console.log("logged in user:", user);
            console.log(user.get("ethAddress"));
            setId(user.get("ethAddress"))
            
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  
    const logOut = async () => {
      await logout();
      console.log("logged out");
    }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/"  element={<Home/>} />
           
          <Route path="/reports" element={Reports} />
        
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/sign-In" element={<SignIn/> } /> 
          
          <Route path="/patient" element={<Patient id={id}/>} />
          {/* <Route path="/doctor" element={<Doctor id={id}/>} /> */}
          {/* <Route path="/manager" element={<Manager id={id}/>} /> */}
          {/* <Route path="/meta" element={<Metamask/>}  */}
          </Routes>
      </Router>
    </>

  );
}

export default App;