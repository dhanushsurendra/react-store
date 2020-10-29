import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './container/Auth';

import Navigation from './components/Nav/Navigation';
import Products from './components/Products/Products';
import Favorites from './container/Favorites';
import { connect } from 'react-redux';

const App = props => {

  return (
    <React.Fragment>
      <React.Fragment>
          <Navigation />
          <Switch>
            <Route path="/favorites" exact component={Favorites}/>
            <Route path="/auth" exact component={Auth}/>
            <Route path="/" component={Products}/>
          </Switch>
        </React.Fragment>
    </React.Fragment>
  );
}

  const mapStateToProps = state => {
    return {
      auth: state.auth.isAuth
    }
  }

export default connect(mapStateToProps)(App);
