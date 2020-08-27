import React, {Component} from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

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
    this.props.signUp(this.state)
  }
  render() {
    return (
      <div style={{width: '70%'}} className="container">
        <form onSubmit={this.handleSubmit} className="col s12">
          <h5 className="grey-text text-darken-3">Register</h5>
          <div className="row">
            <div className="input-field col s12 m6">
              <input id="firstName" type="text" className="validate" onChange={this.handleChange}/>
                <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s12 m6">
              <input id="lastName" type="text" className="validate" onChange={this.handleChange}/>
                <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" onChange={this.handleChange}/>
                <label htmlFor="password">Password</label>
            </div>
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" onChange={this.handleChange}/>
                <label htmlFor="email">Email</label>
            </div>
            <div className="col s12 input-field">
              <button className="btn pink lighten-1 z-depth-0">Register</button>
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

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
