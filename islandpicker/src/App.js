import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from "./components/layout/Navbar"
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import PercentageBar from './components/dashboard/PercentageBar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/login" component={SignIn}/>
          <Route path="/register" component={SignUp}/>
        </Switch>
        <h1>Ready for some vacation?</h1>
        <PercentageBar percentage={80}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
