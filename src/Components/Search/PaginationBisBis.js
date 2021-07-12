import React, { Fragment, memo } from 'react';

let PaginationBisBis = ({ total, postperPage, paginate }) => {
  let d = [];
  for (let i = 1; i < Math.ceil(total / postperPage); i++) {
    d.push(i);
  }

  return (
    <Fragment>
      <div
        style={{
          width: '100vw',
          display: 'flex',
          zIndex: '10000',
          justifyContent: 'space-evenly',
          background: '#0B0033',
        }}
      >
        <ul
          style={{
            flexBasis: '50%',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          {d.map((items, index) => {
            return (
              <li
                key={index}
                style={{
                  color: '#BAFF29',
                  margin: '0px',
                  padding: '0px',
                  listStyle: 'none',
                  listStyleType: 'none',
                }}
                onClick={() => paginate(items)}
              >
                {items}
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default PaginationBisBis;
