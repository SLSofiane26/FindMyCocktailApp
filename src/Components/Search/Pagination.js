import React, { Fragment } from 'react';

let Pagination = ({ total, postperPage, paginate }) => {
  let d = [];
  for (let i = 1; i < Math.ceil(total / postperPage); i++) {
    d.push(i);
  }
  return (
    <Fragment>
      {' '}
      <ul
        style={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'space-evenly',
          margin: '0px',
          padding: '0px',
          color: '#BAFF29',
        }}
      >
        {d.map((items, index) => {
          return (
            <li
              style={{ listStyle: 'none', padding: '0px', margin: '0px' }}
              key={index}
              onClick={() => paginate(items)}
            >
              {items}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default Pagination;
