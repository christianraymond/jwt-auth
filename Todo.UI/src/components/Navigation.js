import React from "react";
import { connect } from "react-redux";
import { logout } from '../redux/actions/authActions'

const Navigation = (props) => {
  const { isLoggedIn } = props.auth;

  let privateLink = (
    <ul className="main-nav">
      <li className="nav-item"><a className="nav-link" id="active2" href="/items">Todo</a></li>
      <li className="nav-item"><a type="button" className="nav-link" id="active2" href="/login" onClick={props.logout}>Logout</a></li>
    </ul>
  )
  let guestLink = (
    <ul className="main-nav">
      <li className="nav-item"><a className="nav-link" id="active1" href="/register">Register</a></li>
      <li className="nav-item"><a className="nav-link" id="active2" href="/login">Login</a></li>
    </ul>
  )
  return isLoggedIn ? (
    <div>
      <header className="header">
        <h1 className="logo"><a href="/">LOGO</a></h1>
        {privateLink}
      </header>
    </div>
  ) : (
    <div>
      <header className="header">
        <h1 className="logo"><a href="/">LOGO</a></h1>
        {guestLink}
      </header>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    isLoggedIn: state.auth
  }
}

export default connect(mapStateToProps, { logout })(Navigation);



