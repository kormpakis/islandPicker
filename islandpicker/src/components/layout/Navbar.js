import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'
import {isLoaded} from 'react-redux-firebase'
import 'materialize-css/dist/css/materialize.min.css'
import M from  'materialize-css/dist/js/materialize.min.js'
import island from '../../images/island.jpg'

const Navbar = (props) => {
  useEffect(() => {
    let navbar = document.querySelector('#slide-out');
    M.Sidenav.init(navbar, {});
  })

  const {auth, profile} = props;
  console.log(auth)
  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;

  return (
    <div>
      <nav className="nav-extended blue darken-4">
        <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo show-on-large">IslandPicker</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {isLoaded(auth) && links}
          </ul>
        </div>
      </nav>

      <ul id="slide-out" className="sidenav">
        <li>
          <div style={{height: '180px'}} className="user-view">
            <div className="background">
              <img style={{height: '180px', display: 'cover'}} src={island}/>
            </div>
            {/*<a href="#user"><img className="circle" src=""></a>*/}
            <a href="#name"><span className="white-text name">{auth.displayName}</span></a>
            <a href="#email"><span style={{marginTop: '100px'}} className="white-text email">{auth.email}</span></a>
          </div>
        </li>
        <li>{isLoaded(auth) && links}</li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);
