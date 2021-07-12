import React, { Fragment, memo, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import * as ACT from '../../Reducer/ActionData';
import IgDetailBis from './IgDetailBis.js';
import PaginationBis from './PaginationBis';

let IgDetail = memo(function IgDetail(props) {
  let dispatch = useDispatch();
  let location = useLocation();
  let [currentPage, setcurrentPage] = useState(1);
  let [postperPage, setpostperPage] = useState(12);

  let data = useSelector((state) => state.data.IgFBis);

  let indexofLast = currentPage * postperPage;
  let indexofFirst = indexofLast - postperPage;
  let dataBis = data.slice(indexofFirst, indexofLast);

  useEffect(() => {
    let d = [];
    let q = new URLSearchParams(location.search);
    for (let param of q.entries()) {
      d.push(param[1]);
    }
    let f = [];
    d.forEach((val) => {
      return val === 'null' ? null : f.push(val);
    });
    dispatch(ACT.FetchIg(f.toString()));
  }, []);

  let paginate = (items) => {
    setcurrentPage(items);
  };
  return (
    <Fragment>
      <IgDetailBis dataBis={dataBis} />{' '}
      <PaginationBis
        total={data.length}
        postPerPage={postperPage}
        paginate={paginate}
      />
    </Fragment>
  );
});

export default IgDetail;
