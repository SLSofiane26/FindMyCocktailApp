import React, { Fragment, memo } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Layout from '../Layout/Layout';
import * as LINK from '../../Components/Navs/Link';
import Home from '../Home/Home';
import SearchBis from '../Search/SearchBis';
import IgDetail from '../../Components/Search/IgDetail';
import IgAlc from '../../Components/Search/IgAlc';
import SearchCate from '../../Components/Search/SearchCate';
import Cocktail from '../Cocktail/Cocktail';
import Login from '../Login/Login';
import Logout from '../../Containers/Login/Logout';
import Register from '../Register/Register';
let App = memo(function App(props) {
  return (
    <Fragment>
      <Layout>
        <Redirect from='/' to={LINK.Home} />
        <Switch>

          <Route path={LINK.Find} exact component={SearchBis} />
          <Route path={LINK.Home} exact component={Home} />
          <Route path={LINK.Register} exact component={Register} />
          <Route path={LINK.Login} exact component={Login} />
          <Route path='/search/ig' exact component={IgDetail} />
          <Route path='/search/alc' exact component={IgAlc} />
          <Route path='/search/cat' exact component={SearchCate} />
          <Route path='/cocktail' exact component={Cocktail} />
          <Route path={LINK.Logout} exact component={Logout} />
        </Switch>
      </Layout>
    </Fragment>
  );
});

export default App;
