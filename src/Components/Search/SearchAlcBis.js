import React, { Fragment, memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import SearchBar from './SearchBar';

let SearchAlcBis = memo(function SearchAlcBis(props) {
  return props.data ? (
    <Fragment>
      <div
        style={{
          display: 'flex',
          color: 'white',
          width: '100vw',
          height: 'auto',
          justifyContent: 'space-evenly',
        }}
      >
        <SearchBar />
        <div
          style={{
            display: 'flex',
            flexBasis: '40%',
            flexDirection: 'column',
            border: '2px solid #BAFF29',
            boxSizing: 'border-box',
            borderRadius: '40px',
            textAlign: 'center',
            paddingBottom: '30px',
            marginTop: '10px',
          }}
        >
          <h4 style={{}}>Catégories</h4>
          <ul style={{ margin: '0px', padding: '0px' }}>
            {props.data.map((items, index) => {
              return (
                <li
                  style={{
                    listStyle: 'none',
                    listStyleType: 'none',
                    padding: '0px',
                    margin: '0px',
                  }}
                  key={index}
                  onClick={() => props.handleRedirect(items)}
                >
                  {items.strAlcoholic}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Fragment>
  ) : null;
});
export default withRouter(SearchAlcBis);
