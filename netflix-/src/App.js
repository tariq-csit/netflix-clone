import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./components/screens/HomeScreen";

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginScreen from "./components/screens/LoginScreen";
import { auth } from "./components/Firebase";
import { useDispatch, useSelector } from "react-redux";
import {login, logout, selectuser} from "./features/userSlice"
import ProfileScreen from "./components/screens/ProfileScreen";

function App() {
  const user = useSelector(selectuser);
  // const user = {
  //   name: "Subhan",
  // };

  const dispatch = useDispatch();

  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
      if (userAuth){
        // Logged in
        console.log(userAuth);
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email
        })
        );
      }
      else{
        //Logged out
        dispatch(logout())
      }
      
    });

    return unsubscribe;
    
  },[dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
      
      {!user ?(
        <LoginScreen />
      ):(
        <Switch>
          <Route exact path="/">
                <HomeScreen />
              </Route>

                <Route path="/profile">
                  <ProfileScreen />
                </Route>
                </Switch>
        

)}

      </BrowserRouter>
    </div>
  );
}

export default App;
