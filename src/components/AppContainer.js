import React, { Component } from 'react';
import { Redirect  } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import Login from './Login/Login';
import Home from './Home/Index';
import Header from './Header/Index';

const SignUp = () => <h2>SignUp</h2>;
const Logout = () => <h2>Logout</h2>;

const history = createHistory();

class AppContainer extends Component {

  render() {
    const { auth } = this.props;

    return (
          <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" render={() => (
                  auth.isLoggedIn ? (
                    <div className="page-container">
                      <Header />
                      <Home />
                    </div>
                  ) : (
                    <Redirect to="/login" />
                  )
                )} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/logout" component={Logout} />
            </Switch>
          </ConnectedRouter>
    );
  }
};

export default AppContainer;
