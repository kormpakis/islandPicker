import React, {Component} from 'react';

class SignUp extends Component {
  state = {

  }
  render() {
    return (
      <div style={{width: '50%'}} className="container">
        <form onSubmit={null} className="white">
          <h5 className="grey-text text-darken-3">Register</h5>
          <div className="input-field">
            <label htmlFor="name">Full name</label>
            <input type="text" id="name" onChange={null}/>
          </div>
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
          <button className="btn pink lighten-1 z-depth-0">Register</button>
        </div>
      </div>
    );
  }
}

export default SignUp;
