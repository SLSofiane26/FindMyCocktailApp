import React, { Fragment, memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useRouteMatch, withRouter } from 'react-router';
import * as ACT from '../../Reducer/ActionData.js';
import SearchAlcBis from './SearchAlcBis.js';
let SearchAlc = memo(function SearchAlc(props) {
  let dispatch = useDispatch();
  let history = useHistory();
  let match = useRouteMatch();
  let [state, setState] = useState(null);
  let data = useSelector((state) => state.data.AlcBis);
  useEffect(() => {
    dispatch(ACT.FetchAlc());
  }, [dispatch]);

  let handleRedirectBis = (items) => {
    setState(items);
  };

  let d = [];
  for (let key in state) {
    d.push(encodeURI(state[key]));
  }
  let g = d.join('&');
  return (
    <Fragment>
      {state !== null ? (
        <Redirect to={{ pathname: '/search/alc', search: '&' + g }} />
      ) : null}
      <SearchAlcBis data={data} handleRedirect={handleRedirectBis} />
    </Fragment>
  );
});

export default withRouter(SearchAlc);
