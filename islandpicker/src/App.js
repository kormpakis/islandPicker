import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import PercentageBar from './components/dashboard/PercentageBar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <body>
    <main>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/login" component={SignIn}/>
          <Route path="/register" component={SignUp}/>
        </Switch>
        <h1 style={{marginTop: '50px'}} className="container">So... where to next?</h1>
        <PercentageBar percentage={80}/>
      </BrowserRouter>
    </main>
    <div className="footer"><Footer/></div>
    </body>
  );
}

export default App;
