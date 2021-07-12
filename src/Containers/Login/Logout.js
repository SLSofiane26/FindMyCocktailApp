import React, { Fragment, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import * as ACT from '../../Reducer/LoginActions';

let Logout = memo(function (props) {
  let token = useSelector((state) => state.data.token);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(ACT.Logout());
  }, [dispatch]);
  return <Fragment>{token ? null : <Redirect to='/login' />}</Fragment>;
});

export default Logout;
