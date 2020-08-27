import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// Page imports
import Home from './pages/Home'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'

// Component imports
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <body>
    <main>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/login" component={SignIn}/>
          <Route path="/register" component={SignUp}/>
        </Switch>
      </BrowserRouter>
    </main>
    <div className="footer"><Footer/></div>
    </body>
  );
}

export default App;
