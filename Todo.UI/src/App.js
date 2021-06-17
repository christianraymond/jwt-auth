import Landing from './components/Landing';
import Login from "./components/auth/Login";
import Register from "./components/auth/register";
import Navigation from "./components/Navigation";
import TodoPage from './components/todos/TodoPage';
import { BrowserRouter as Router, Switch, Route, Redirect  } from "react-router-dom";
import "./App.css";
import { connect } from 'react-redux';

const App = props => {
  const { isLoggedIn } = props.auth;

  let prrivateLink = (
    <Router>
      <Navigation />
      <Switch>
      <Route exact path="/items" component={TodoPage} />
        <Redirect to="/items" />
      </Switch>
    </Router>
  )
  let guestLink = (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  )

  return isLoggedIn ? (<div>{prrivateLink}</div>) : (<div>{guestLink}</div>)
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    isLoggedIn: state.auth,
  }
}

export default connect(mapStateToProps)(App);
