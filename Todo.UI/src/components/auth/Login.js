import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { connect } from "react-redux";
import { login } from "../../redux/actions/authActions";

const Login = () => {
  const [error, setError] = useState('');
  const [inputs, setInput] = useState({
    username: '',
    password: ''
  });

  const { username, password } = inputs;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(inputs => ({ ...inputs, [name]: value }))
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    login(dispatch, username, password, error)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="login-content">
        <h3>Login</h3>
        <div className="App">
          <div className="input-container">
            <input
              type="email"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
            <i className="zmdi zmdi-account zmdi-hc-lg"></i>
          </div>

          <div className="input-container">
            <input
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
          </div>
          <button type="submit">Log In</button>
        </div>
      </div>
      {error && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </div>
      )}
    </form>
  );
}
const mapStateToProps = (state) => ({ 
  user: state.auth,
  error: state.error,
})

export default connect(mapStateToProps, null)(Login);
