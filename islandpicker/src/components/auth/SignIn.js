import React, {Component} from 'react';

class SignIn extends Component {
  state = {

  }
  render() {
    return (
      <div style={{width: '50%'}} className="container">
        <form onSubmit={null} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={null}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={null}/>
          </div>
        </form>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </div>
    );
  }
}

export default SignIn;
