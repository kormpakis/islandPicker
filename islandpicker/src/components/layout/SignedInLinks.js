import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li><NavLink to="/">QuestionMark</NavLink></li>
      <li><NavLink to="/">Log Out</NavLink></li>
    </ul>
  );
}

export default SignedInLinks;
