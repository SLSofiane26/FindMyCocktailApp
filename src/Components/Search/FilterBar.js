import React, { Fragment, memo } from 'react';
import { useDispatch } from 'react-redux';
import * as ACT from '../../Reducer/ActionData';
let FilterBar = memo(function FilterBar(props) {
  let dispatch = useDispatch();
  let handleAlpha = (e) => {
    dispatch(ACT.FilterCat(e.target.value));
  };
  let handleSearch = (e) => {
    dispatch(ACT.SearchCat(e.target.value));
  };

  return (
    <Fragment>
      <div style={{ width: '100vw', display: 'flex', flexDirection: 'row' }}>
        <div style={{ flexBasis: '50%' }}>
          <select onChange={(e) => handleAlpha(e)} style={{ width: '100%' }}>
            <option value='ABC'>Alphabétique</option>
            <option value='DESC'>Inversé</option>
          </select>{' '}
        </div>
        <div style={{ flexBasis: '50%' }}>
          <input
            style={{ width: '100%' }}
            type='search'
            placeholder='RECHERCHER'
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </div>
    </Fragment>
  );
});

export default FilterBar;
