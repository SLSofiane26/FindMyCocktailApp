import React, { Fragment, memo, useState } from 'react';
import { useHistory } from 'react-router';

let IgAlcBis = memo(function IgAlcBis(props) {
  let [state, setState] = useState(null);
  let history = useHistory();
  if (state !== null) {
    history.push({ pathname: '/cocktail', search: '&' + state });
  }
  return props.data ? (
    <div style={{ width: '100vw', display: 'flex', flexWrap: 'wrap' }}>
      {props.data.map((items, index) => {
        return (
          <div
            key={index}
            style={{ flexBasis: '25%' }}
            onClick={() => setState(items.idDrink)}
          >
            <h1
              style={{
                fontSize: '0.8em',
                marginLeft: '80px',
                color: ' #BAFF29',
              }}
            >
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
  ) : null;
});

export default IgAlcBis;
