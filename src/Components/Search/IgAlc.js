import React, { Fragment, memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import * as ACT from '../../Reducer/ActionData';
import FilterBar from './FilterBar';
import IgAlcBis from './IgAlcBis';
import Pagination from './Pagination';

let IgAlc = memo(function IgAlc(props) {
  let dispatch = useDispatch();
  let location = useLocation();
  let [postperPage, setpostperPage] = useState(20);
  let [current, setCurrent] = useState(1);

  let data = useSelector((state) => state.data.CatBis);
  let IndexofFirst = current * postperPage;
  let IndexofLast = IndexofFirst - postperPage;
  let DataBis = data.slice(IndexofLast, IndexofFirst);

  let paginate = (number) => {
    setCurrent(number);
  };

  let d = new URLSearchParams(location.search);
  useEffect(() => {
    for (let param of d.entries()) {
      if (param[0]) {
        dispatch(ACT.FetchCatBis(param[0]));
      }
    }
  }, []);

  return (
    <Fragment>
      <div
        style={{
          width: '100vw',
          height: 'auto',
          background: '#0B0033',
        }}
      >
        <FilterBar />
        <IgAlcBis data={DataBis} />
        <Pagination
          paginate={paginate}
          total={data.length}
          postperPage={postperPage}
        />
      </div>
    </Fragment>
  );
});

export default IgAlc;
