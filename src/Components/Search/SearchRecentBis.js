import React, { Fragment, memo, useState } from 'react';
let SearchRecentBis = memo(function SearchRecentBis(props) {
  let [state, setState] = useState(null);

  return props.data ? (
    <Fragment>
      {' '}
      <div style={{ marginTop: '0px', maxHeight: '100vh', marginTop: '25px' }}>
        <h1
          style={{
            textAlign: 'center',
            color: '#f1f6f5',
            fontStyle: 'oblique',
            fontSize: '0.8em',
          }}
        >
          ... Dernierement ajoutés
        </h1>
        <div
          style={{
            width: '100vw',
            display: 'flex',
            textAlign: 'center',
            color: 'white',
            flexWrap: 'wrap',
          }}
        >
          {props.data.map((items, index) => {
            return (
              <div
                key={index}
                style={{ flexBasis: '20%' }}
                onClick={() => setState(items)}
              >
                <h4 style={{ fontSize: '0.7em' }}>{items.strDrink}</h4>
                <figure>
                  <img
                    onClick={() => props.handleRedirect(items.idDrink)}
                    src={items.strDrinkThumb}
                    width='100px'
                    height='100px'
                    style={{ borderRadius: '10px' }}
                  />
                  <figcaption style={{ color: '#f1f6f5' }}>
                    {items.strCategory}
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  ) : null;
});

export default SearchRecentBis;
