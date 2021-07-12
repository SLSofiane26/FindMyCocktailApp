import React, { Fragment, memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import * as ACT from '../../Reducer/ActionData';
import SearchRecentBis from './SearchRecentBis';

let SearchRecent = memo(function SearchRecent(props) {
  let data = useSelector((state) => state.data.Recent);
  let [state, setState] = useState(null);
  let history = useHistory();
  let handleRedirect = (items) => {
    if (items) {
      setState(items);
    }
  };
  if (state !== null) {
    history.push({ pathname: '/cocktail', search: '&' + state });
  }

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(ACT.FetchTop());
  }, [dispatch]);
  return (
    <Fragment>
      <SearchRecentBis data={data} handleRedirect={handleRedirect} />
    </Fragment>
  );
});
export default SearchRecent;
