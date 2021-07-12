import React, { Fragment, memo, useEffect, useState } from 'react';

let HomeCocktail = memo(function Cocktail(props) {
  let [state, setState] = useState(false);
  useEffect(() => {
    if (props.show) {
      setTimeout(() => {
        setState(true);
      }, 2000);
    }
  }, [props.show]);

  return props.show ? (
    <Fragment>
      <div
        style={{
          position: 'fixed',
          width: '50vw',
          height: '100vh',
          display: 'flex',
          margin: '0px',
          padding: '0px',
          zIndex: '1000',
          transform: state ? 'translate(100px,0px)' : 'translate(-500px,0px',
          transition: 'all 1s ease-in',
        }}
      >
        <img
          src={require('../../Assets/cock.png')}
          width='500px'
          height='90%'
          style={{ marginTop: '0px' }}
        />
      </div>
    </Fragment>
  ) : null;
});

export default HomeCocktail;
