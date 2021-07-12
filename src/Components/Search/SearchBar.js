import React, { Fragment, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as ACT from '../../Reducer/ActionData';
import IGD from './IGD';
let InputStyled = styled.input`
  ::placeholder {
    color: black;
    text-align: center;
  }
  border: 2px solid #baff29;
  border-radius: 100px;
  height: 50px;
`;

let SearchBar = memo(function SearchBar(props) {
  let dispatch = useDispatch();
  let [state, setState] = useState(null);
  let data = useSelector((state) => state.data.FigBis);

  let handleChangeBis = (e) => {
    setState(e.target.value);
  };
  let handleChange = (e) => {
    if (e.keyCode === 13) {
      dispatch(ACT.FetchIgBis(state));
    }
  };
  return (
    <Fragment>
      {' '}
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          zIndex: '1000',
        }}
      >
        <InputStyled
          type='search'
          name='search'
          placeholder='SEARCH'
          style={{ width: '80%', margin: 'auto' }}
          onChange={(e) => handleChangeBis(e)}
          onKeyUp={(e) => handleChange(e)}
        />
      </div>{' '}
      <IGD data={data} />
    </Fragment>
  );
});

export default SearchBar;
