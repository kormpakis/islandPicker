import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';
import {isLoaded} from 'react-redux-firebase';
import 'materialize-css/dist/css/materialize.min.css'
import M from  'materialize-css/dist/js/materialize.min.js'

const Navbar = (props) => {
  useEffect(() => {
    let navbar = document.querySelector('#slide-out');
    M.Sidenav.init(navbar, {});
  })

  const {auth, profile} = props;
  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;

  return (
    <div>
      <nav className="nav-extended blue darken-4">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">IslandPicker</a>
          <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {isLoaded(auth) && links}
          </ul>
        </div>
      </nav>

      <ul id="slide-out" className="sidenav">
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
