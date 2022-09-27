import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserSearchPage, UserSinglePage } from '../pages';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={UserSearchPage}></Route>
      <Route exact path="/user" component={UserSinglePage}></Route>
    </Switch>
  );
};

export default Routes;
