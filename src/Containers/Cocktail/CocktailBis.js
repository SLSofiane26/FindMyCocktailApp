import React, { Fragment, memo } from 'react';

let CocktailBis = memo(function CocktailBis(props) {
  return props.data ? (
    <Fragment>
      <div
        style={{
          display: 'flex',
          width: '100vw',
          background: '#0B0033',
          position: 'fixed',
        }}
      >
        {props.data.map((items, index) => {
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexBasis: '100%',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
              }}
              key={index}
            >
              <div style={{ flexBasis: '40%', textAlign: 'center' }}>
                <h1
                  style={{
                    padding: '0px',
                    marginTop: '10px',
                    color: '#f1f6f5',
                  }}
                >
                  {items.strDrink}
                </h1>
                <h4
                  style={{
                    padding: '0px',
                    margin: '0px',
                    color: '#f1f6f5',
                    marginTop: '20px',
                  }}
                >
                  {items.strAlcoholic}
                </h4>
                <h4
                  style={{
                    padding: '0px',
                    margin: '0px',
                    color: '#f1f6f5',
                    marginTop: '20px',
                  }}
                >
                  {items.strCategory}
                </h4>

                <ul
                  style={{
                    margin: '0px',
                    padding: '0px',
                    color: '#BAFF29',
                    marginTop: '20px',
                  }}
                >
                  {items.strIngredient1 ? (
                    <li
                      style={{
                        listStyle: 'none',
                        listStyleType: 'none',
                        margin: '0px',
                        padding: '0px',
                      }}
                    >
                      {items.strIngredient1}
                    </li>
                  ) : null}
                  {items.strIngredient2 ? (
                    <li
                      style={{
                        listStyle: 'none',
                        listStyleType: 'none',
                        margin: '0px',
                        padding: '0px',
                      }}
                    >
                      {items.strIngredient2}
                    </li>
                  ) : null}
                  {items.strIngredient3 ? (
                    <li
                      style={{
                        listStyle: 'none',
                        listStyleType: 'none',
                        margin: '0px',
                        padding: '0px',
                      }}
                    >
                      {items.strIngredient3}
                    </li>
                  ) : null}
                  {items.strIngredient4 ? (
                    <li
                      style={{
                        listStyle: 'none',
                        margin: '0px',
                        padding: '0px',
                        listStyleType: 'none',
                      }}
                    >
                      {items.strIngredient4}
                    </li>
                  ) : null}
                  {items.strIngredient5 ? (
                    <li
                      style={{
                        listStyle: 'none',
                        margin: '0px',
                        padding: '0px',
                        listStyleType: 'none',
                      }}
                    >
                      {items.strIngredient5}
                    </li>
                  ) : null}
                  {items.strIngredient6 ? (
                    <li
                      style={{
                        listStyle: 'none',
                        listStyleType: 'none',
                        margin: '0px',
                        padding: '0px',
                      }}
                    >
                      {items.strIngredient6}
                    </li>
                  ) : null}
                  {items.strIngredient7 ? (
                    <li
                      style={{
                        listStyle: 'none',
                        listStyleType: 'none',
                        margin: '0px',
                        padding: '0px',
                      }}
                    >
                      {items.strIngredient7}
                    </li>
                  ) : null}
                  {items.strIngredient8 ? (
                    <li
                      style={{
                        margin: '0px',
                        padding: '0px',
                        listStyle: 'none',
                        listStyleType: 'none',
                      }}
                    >
                      {items.strIngredient8}
                    </li>
                  ) : null}
                </ul>
                <p style={{ color: '#f1f6f5' }}>{items.strInstructions}</p>
              </div>
              <div style={{ flexBasis: '50%' }}>
                <figure>
                  <img
                    src={items.strDrinkThumb}
                    width='700px'
                    height='700px'
                    style={{ borderRadius: '10px' }}
                  />
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  ) : (
    <h1>Erreur</h1>
  );
});
export default CocktailBis;
