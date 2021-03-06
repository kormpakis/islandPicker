import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = (props) => {
  return (
    <ul className="">
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/register">Register</NavLink></li>
    </ul>
  );
}

export default SignedOutLinks;
