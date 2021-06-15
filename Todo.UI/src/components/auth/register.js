import React from "react";

class Signup extends React.Component {
  render() {
    return (
      <div className="sign-content">
        <h3>Register</h3>
        <div className="App">
          <div className="input-container">
            <input type="text" placeholder="Username" />
            <i class="zmdi zmdi-account zmdi-hc-lg"></i>
          </div>

          <div className="input-container">
            <input type="password" placeholder="Password" />
            <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
          </div>
          <div className="input-container">
            <input type="password" placeholder="Confirm Password" />
            <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
          </div>
          <button type="submit">Signup</button>
        </div>
      </div>
    );
  }
}

export default Signup;
