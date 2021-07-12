import React, { Fragment, memo, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
let SearchCateBis = memo(function SearchCateBis(props) {
  let [state, setState] = useState(null);
  let history = useHistory();
  if (state !== null) {
    history.push({ pathname: '/cocktail', search: '&' + state });
  }
  return (
    <Fragment>
      <div
        style={{
          width: '100Vw',
          display: 'flex',
          flexWrap: 'wrap',
          background: '#0B0033',
          color: '#BAFF29',
          justifyContent: 'space-evenly',
        }}
      >
        {props.data &&
          props.data.map((items, index) => {
            return (
              <div
                key={index}
                style={{
                  flexBasis: '25%',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                }}
                onClick={() => setState(items.idDrink)}
              >
                <h1 style={{ fontSize: '1em', margin: '0px', padding: '0px' }}>
                  {' '}
                  {items.strDrink}
                </h1>
                <img
                  src={items.strDrinkThumb}
                  width='300px'
                  height='300px'
                  style={{ margin: 'auto' }}
                />
              </div>
            );
          })}
      </div>
    </Fragment>
  );
});

export default SearchCateBis;
