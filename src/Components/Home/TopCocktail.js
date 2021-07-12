import React, { Fragment, memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import './Cocktail.css';

let TopCocktail = memo(function TopCockail(props) {
  let data = useSelector((state) => state.data.HomeCocktail);
  let history = useHistory();
  let [state, setState] = useState(null);
  if (state !== null) {
    history.push({ pathname: '/cocktail', search: '&' + state });
  }
  return (
    <Fragment>
      <div
        style={{
          position: 'fixed',
          zIndex: '100',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {' '}
        <div
          style={{
            display: 'flex',
            flexBasis: '50%',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {data &&
            data.slice(0, 9).map((items, index) => {
              return (
                <div
                  key={index}
                  style={{
                    zIndex: '4000',
                    display: 'flex',
                    flexBasis: '30%',
                    flexDirection: 'column',
                    textAlign: 'center',
                  }}
                  onClick={() => setState(items.idDrink)}
                >
                  <h4
                    style={{
                      fontSize: '0.8em',
                      margin: '0px',
                      padding: '5px',
                      position: 'fixed',
                      marginTop: '10px',

                      zIndex: '1000',
                      color: 'white',
                      background: '#0B0033',
                    }}
                  >
                    {items.strDrink}
                  </h4>
                  <p
                    style={{
                      padding: '5px',
                      margin: '0px',
                      fontSize: '0.5em',
                      position: 'fixed',
                      zIndex: '100',
                      color: 'white',
                      marginTop: '45px',
                      background: '#0B0033',
                    }}
                  >
                    {items.strAlcoholic}
                  </p>
                  <img
                    width='200px'
                    height='200px'
                    style={{
                      margin: 'auto',
                      borderRadius: '100px',
                      position: 'fixed',
                    }}
                    src={items.strDrinkThumb}
                  />{' '}
                  <ul
                    style={{
                      margin: '0px',
                      padding: '5px',
                      marginTop: '70px',
                    }}
                  >
                    <li
                      style={{
                        fontSize: '0.8em',
                        margin: '0px',
                        padding: '5px',
                        listStyle: 'none',
                        listStyleType: 'none',
                        background: '#69A197',
                        position: 'fixed',
                        marginTop: '10px',
                        color: 'black',
                        textAlign: 'center',
                      }}
                    >
                      {items.strIngredient1}
                    </li>
                    <li
                      style={{
                        fontSize: '0.8em',
                        margin: '0px',
                        listStyle: 'none',
                        background: '#69A197',
                        listStyleType: 'none',
                        padding: '5px',
                        position: 'fixed',
                        marginTop: '40px',
                        color: 'black',
                      }}
                    >
                      {items.strIngredient2}
                    </li>
                    {items.strIngredient3 ? (
                      <li
                        style={{
                          padding: '5px',
                          fontSize: '0.8em',
                          background: '#69A197',
                          margin: '0px',
                          listStyle: 'none',
                          listStyleType: 'none',
                          position: 'fixed',
                          marginTop: '70px',
                          color: 'black',
                        }}
                      >
                        {items.strIngredient3}
                      </li>
                    ) : null}
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
});

export default TopCocktail;
