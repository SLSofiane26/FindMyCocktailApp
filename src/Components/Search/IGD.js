import React, { Fragment, memo, useEffect, useState } from 'react';
import styled from './IG.module.css';
let IGD = memo(function IGD(props) {
  let [show, setShow] = useState(false);
  let [showBis, setShowBis] = useState(false);

  let d = [];
  d.push(styled.container);
  if (showBis) {
    d.push(styled.bis);
  }

  return props.data ? (
    <Fragment>
      {props.data.map((items, index) => {
        return (
          <div
            className={d.join(' ')}
            key={index}
            onClick={() => setShowBis(!showBis)}
          >
            <h1 style={{ margin: '0px', padding: '0px' }}>
              {items.strIngredient}
            </h1>
            <h1 style={{ margin: '0px', padding: '0px' }}>
              Alcool : {items.strAlcohol}
            </h1>
            <p style={{ textAlign: 'justify', fontSize: '0.7em' }}>
              {items.strDescription}
            </p>
          </div>
        );
      })}
    </Fragment>
  ) : null;
});

export default IGD;
