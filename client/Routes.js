
import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login } from './components/AuthForm';
import { Signup } from './components/SignUpForm'
import Home from './components/Home';
import { me } from './store'
import  Posters  from './components/Posters';
import GuessHomePage from './components/GuessHomePage';
import SinglePoster from "./components/SinglePoster";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route path ="/posters" component={Posters}/>
            <Route path="/posters/:posterId" component={SinglePoster} />
          </Switch>
        ) : (
          <Switch>
            <Route path='/' exact component={GuessHomePage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/home" component={GuessHomePage} />
            <Route exact path="/posters" component={Posters} />
            <Route path="/posters/:posterId" component={SinglePoster}
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
