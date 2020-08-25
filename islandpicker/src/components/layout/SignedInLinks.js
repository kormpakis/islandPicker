import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  return (
    <ul className="">
      <li><NavLink to="/">QuestionMark</NavLink></li>
      <li><a onClick={props.signOut}>Log Out</a></li>
    </ul>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
