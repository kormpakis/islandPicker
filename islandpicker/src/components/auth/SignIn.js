import React, {Component} from 'react';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
    // this.props.signIn(this.state)
  }

  render() {
    return (
      <div style={{width: '50%'}} className="container">
        <form onSubmit={this.handleSubmit} className="col s12">
          <h5 className="grey-text text-darken-3">Login</h5>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" onChange={this.handleChange}/>
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" onChange={this.handleChange}/>
              <label htmlFor="password">Password</label>
            </div>
            <div className="col s12 input-field">
              <button className="btn pink lighten-1 z-depth-0">Login</button>
              <div className="red-text center">
                {/*{authError ? <p>{authError}</p> : null}*/}
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
