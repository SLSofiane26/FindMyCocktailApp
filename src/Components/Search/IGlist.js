import React, { Fragment, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ACT from '../../Reducer/ActionData';
import IGlistBis from './IGlistBis';
let IGlist = memo(function IGlist(props) {
  let dispatch = useDispatch();

  let data = useSelector((state) => state.data.Ig);
  useEffect(() => {
    dispatch(ACT.Ig());
  }, [dispatch]);

  return (
    <Fragment>
      <IGlistBis data={data} />
    </Fragment>
  );
});
export default IGlist;
