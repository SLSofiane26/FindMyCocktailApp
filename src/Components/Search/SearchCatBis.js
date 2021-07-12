import React, { memo, useState } from 'react';
import { useHistory, withRouter } from 'react-router';
let SearchCatBis = memo(function SearchCatBis(props) {
  let [data, setdata] = useState(null);
  let history = useHistory();
  if (data !== null) {
    for (let key in data) {
      history.push({ pathname: '/search/cat', search: '&' + data[key] });
    }
  }
  return props.data ? (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        textAlign: 'center',
        marginTop: '30px',
      }}
    >
      <ul
        style={{
          display: 'flex',
          flexBasis: '100%',
          height: 'auto',
          margin: '0px',
          padding: '0px',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        {props.data.map((items, index) => {
          return (
            <li
              style={{
                marginTop: '40px',
                padding: '0px',
                color: 'white',
                listStyle: 'none',
                listStyleType: 'none',
                color: '#f1f6f5',
              }}
              key={index}
              onClick={() => setdata(items)}
            >
              {items.strCategory}
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;
});

export default withRouter(SearchCatBis);
