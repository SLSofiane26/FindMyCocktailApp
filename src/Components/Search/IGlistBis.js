import React, { Fragment, memo, useState } from 'react';
import { useHistory } from 'react-router';

let IGlistBis = memo(function IGlistBis(props) {
  let history = useHistory();

  let [state, setState] = useState({
    form: {
      select1: null,
      select2: null,
      select3: null,
    },
    load: false,
  });

  let handleSearch = (e) => {
    e.preventDefault();
    let d = [];
    for (let key in state.form) {
      d.push(encodeURI(key) + '=' + encodeURI(state.form[key]));
    }
    let f = d.join('&');
    history.push({ pathname: '/search/ig', search: '&' + f });
  };
  let handleChange = (e) => {
    setState({
      ...state,
      form: {
        ...state.form,
        select1: e.target.value,
      },
      load: true,
    });
  };
  let handleChangeB = (e) => {
    setState({
      form: { ...state.form, select2: e.target.value },
      load: true,
    });
  };
  let handleChangeBis = (e) => {
    setState({
      form: { ...state.form, select3: e.target.value },
      load: true,
    });
  };

  return (
    <Fragment>
      <div style={{ position: 'fixed' }}>
        <div
          style={{
            display: 'flex',
            width: '50vw',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <select
              onChange={(e) => handleChange(e)}
              name='selectone'
              style={{ background: '#69A197' }}
            >
              {' '}
              <option value='null'> </option>
              {props.data.map((items, index) => {
                return (
                  <option key={index} value={items.strIngredient1}>
                    {items.strIngredient1}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <select
              onChange={(e) => handleChangeB(e)}
              name='selecttwo'
              style={{ background: '#69A197' }}
            >
              {' '}
              <option value='null'> </option>
              {props.data.map((items, index) => {
                return (
                  <option value={items.strIngredient1}>
                    {items.strIngredient1}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <select
              onChange={(e) => handleChangeBis(e)}
              name='selectthree'
              style={{ background: '#69A197' }}
            >
              {' '}
              <option value='null'> </option>
              {props.data.map((items, index) => {
                return (
                  <option value={items.strIngredient1}>
                    {items.strIngredient1}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {state.load && (
          <div
            style={{
              width: '100vw',
              display: 'flex',
              justifyContent: 'start',
              zIndex: '1000',
            }}
          >
            <button
              style={{
                flexBasis: '20%',
                background: '#0B0033',
                border: 'none',
                color: '#BAFF29',
                height: '50px',
                borderRadius: '50px',
                border: '1px solid #BAFF29 ',
                marginTop: '10px',
                zIndex: '1000',
                marginLeft: '250px',
                textTransform: 'uppercase',
              }}
              onClick={(e) => handleSearch(e)}
            >
              Rechercher
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
});

export default IGlistBis;
