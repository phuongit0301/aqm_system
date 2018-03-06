import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppContainer from './AppContainer';
import { fetchUser } from '../actions';
import { Waiting } from './Waiting';

class App extends Component {

  componentDidMount() {
      this.props.onFetchUser();
  }
  
  render() {
    const { auth } = this.props;
    
    if(auth && auth.isFetching) {
      return <Waiting />
    }
    
    return (
        <AppContainer {...this.props} />
    );
  }
};

const mapStateToProps = state => {
  return {
    ...state
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: id => {
      dispatch(fetchUser())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
