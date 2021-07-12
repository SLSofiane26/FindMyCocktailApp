import React, { Fragment, memo } from 'react';

let PaginationBis = ({ total, postPerPage, paginate }) => {
  let e = [];
  for (let i = 0; i < Math.ceil(total / postPerPage); i++) {
    e.push(i);
  }
  return (
    <Fragment>
      <div
        style={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          zIndexl: '1000',
          background: '#0B0033',
        }}
      >
        <ul
          style={{
            flexBasis: '50%',
            display: 'flex',
            justifyContent: 'space-evenly',
            margin: '0px',
            padding: '0px',
            color: '#BAFF29',
            padding: '10px',
          }}
        >
          {e.map((items, index) => {
            return (
              <li
                style={{
                  padding: '0px',
                  margin: '0px',
                  listStyle: 'none',
                  listStyleType: 'none',
                }}
                key={index}
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

export default PaginationBis;
