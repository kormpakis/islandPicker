import React, {Component} from 'react';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    // this.props.signUp(this.state)
  }
  render() {
    return (
      <div style={{width: '50%'}} className="container">
        <form onSubmit={this.handleSubmit} className="col s12">
          <h5 className="grey-text text-darken-3">Register</h5>
          <div className="row">
            <div className="input-field col s6">
              <input id="firstName" type="text" className="validate"/>
                <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="lastName" type="text" className="validate"/>
                <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate"/>
                <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate"/>
                <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Register</button>
            <div className="red-text center">
              {/*{authError ? <p>{authError}</p> : null}*/}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
