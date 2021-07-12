import React, { Fragment, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ACT from '../../Reducer/LoginActions';

let reg =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let RegisterForm = memo(function RegisterForm(props) {
  let error = useSelector((state) => state.login.error);
  let dispatch = useDispatch();
  let [Error, setError] = useState();
  let [Form, setForm] = useState({
    email: null,
    password: null,
    confirmpassword: null,
  });
  let [ErrorForm, setErrorForm] = useState({
    email: '',
    password: '',
  });

  let handleInput = (e) => {
    let { name, value } = e.target;
    switch (name) {
      case 'email':
        ErrorForm.email =
          value.length > 0 && reg.test(value) ? '' : 'Adresse email invalide';
      case 'password':
        ErrorForm.password =
          value.length > 5
            ? ''
            : 'Le mot de passe doit contenir 5 caracteres mininum';
      default:
        break;
    }
    setForm({
      ...Form,
      [name]: value,
    });
  };

  let valid = (Error, form) => {
    let validBis = true;
    Object.values(Error).forEach((val) => {
      !val.length ? (validBis = false) : (validBis = true);
    });
    Object.values(form).forEach((val) =>
      val === null ? (validBis = false) : (validBis = true)
    );
    return validBis;
  };

  let handleRegister = (e) => {
    e.preventDefault();
    if (valid(ErrorForm, Form) && Form.password === Form.confirmpassword) {
      dispatch(ACT.Login(Form.email, Form.password, true));
    } else {
      setError(true);
    }
  };
  let e = null;
  if (Error) {
    e = (
      <span style={{ marginTop: '50px' }}>
        Veuillez renseigner tout les champs
      </span>
    );
  }
  return (
    <Fragment>
      {error !== null && (
        <div
          style={{
            width: '100vw',
            justifyContent: 'center',
            display: 'flex',
            position: 'fixed',
            marginTop: '150px',
          }}
        >
          <h1
            style={{
              margin: '0px',
              padding: '0px',
              fontSize: '0.8em',
              color: 'red',
            }}
          >
            Adresse email déjà utilisée
          </h1>
        </div>
      )}
      <div
        style={{
          width: '100vw',
          position: 'fixed',
          color: '#BAFF29',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '50px',
        }}
      >
        <h1>Incription</h1>
      </div>
      <div
        style={{
          width: '100vw',
          justifyContent: 'space-evenly',
          display: 'flex',
          color: Error ? 'red' : '#BAFF29',
          flexWrap: 'wrap',
          marginTop: '250px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '45%',
          }}
        >
          <label htmlFor='email' style={{ margin: 'auto' }}>
            Email
          </label>
          <input
            style={{
              textAlign: 'center',
              borderRadius: '10px',
              height: '35px',
            }}
            type='text'
            name='email'
            placeholder='email'
            onChange={(e) => handleInput(e)}
          />{' '}
          {ErrorForm.email.length > 0 && (
            <span style={{ fontSize: '0.8em', color: 'red' }}>
              {ErrorForm.email}
            </span>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '45%',
          }}
        >
          <label style={{ margin: 'auto' }} htmlFor='password'>
            Password
          </label>
          <input
            style={{
              textAlign: 'center',
              borderRadius: '10px',
              height: '35px',
            }}
            type='text'
            name='password'
            placeholder='password'
            onChange={(e) => handleInput(e)}
          />
          {ErrorForm.password.length > 0 && (
            <span style={{ fontSize: '0.8em', color: 'red' }}>
              {ErrorForm.password}
            </span>
          )}
        </div>{' '}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '45%',
            marginTop: '20px',
          }}
        >
          <label style={{ margin: 'auto' }} htmlFor='confirmpassword'>
            Confirm password
          </label>
          <input
            style={{
              textAlign: 'center',
              borderRadius: '10px',
              height: '35px',
            }}
            type='text'
            name='confirmpassword'
            placeholder='confirmpassword'
            onChange={(e) => handleInput(e)}
          />
        </div>{' '}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '45%',
            marginTop: '40px',
            border: 'none',
          }}
        >
          {' '}
          <button
            style={{
              marginLeft: '250px',
              width: '10%',
              background: 'red',
              height: '50px',
              position: 'fixed',
              borderRadius: '10px',
              border: 'none',
              background: Error ? 'red' : '#69A197',
              boxShadow: '2px 2px 5px 1px #f1f6f5',
              borderRadius: '10px',
            }}
            onClick={(e) => handleRegister(e)}
          >
            S'inscrire
          </button>
        </div>{' '}
        {e}
      </div>
    </Fragment>
  );
});

export default RegisterForm;
