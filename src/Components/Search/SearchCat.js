import React, { Fragment, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ACT from '../../Reducer/ActionData';
import SearchCatBis from './SearchCatBis';

let SearchCat = memo(function SearchCat(props) {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.data.AlcCatBis);

  useEffect(() => {
    dispatch(ACT.FetchCat());
  }, [dispatch]);

  return (
    <Fragment>
      <SearchCatBis data={data} />
    </Fragment>
  );
});

export default SearchCat;
