import React, { Fragment, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ACT from '../../Reducer/LoginActions';
let reg =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let LoginForm = memo(function LoginForm(props) {
  let dispatch = useDispatch();
  let loading = useSelector((state) => state.login.loading);
  let errorBis = useSelector((state) => state.login.error);
  let resetBis = useSelector((state) => state.login.reset);

  let [reset, setReset] = useState(false);
  let [form, setForm] = useState({
    email: null,
    password: null,
    confirmpassword: null,
  });
  let [state, setState] = useState();
  let [errorForm, seterrorForm] = useState(false);
  let [error, setError] = useState({
    email: '',
    password: '',
  });
  let handleReset = () => {
    setReset(true);
  };

  let handleResetPassword = (e) => {
    if (e.keyCode === 13) {
      dispatch(ACT.Reset(form.email));
    }
  };

  let validForm = (object, objectbis) => {
    let valid = true;
    Object.keys(object).forEach((key) => {
      if (object[key].length > 0) {
        return (valid = false);
      }
    });
    Object.values(objectbis).forEach((val) => {
      if (val === null) {
        return (valid = false);
      }
    });

    return valid;
  };

  let handleSubmitBis = (e) => {
    let d = true;
    if (validForm(error, form) && form.confirmpassword === form.password) {
      dispatch(ACT.Login(form.email, form.password, d));
    } else {
      seterrorForm(true);
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let d = false;
    if (validForm(error, form) && form.confirmpassword === form.password) {
      dispatch(ACT.Login(form.email, form.password, d));
    } else {
      seterrorForm(true);
    }
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    switch (name) {
      case 'email':
        error.email =
          value.length > 0 && reg.test(value)
            ? ''
            : 'Veuillez entrez une adresse email valide';
        break;
      case 'password':
        error.password =
          value.length > 5 && value.length < 10
            ? ''
            : 'Veuillez entrez un mot de passe entre 6 et 10 caracteres';
      default:
        break;
    }
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Fragment>
      {resetBis && (
        <div
          style={{
            width: '100vw',
            display: 'flex',
            position: 'fixed',
            justifyContent: 'center',
            color: 'greenyellow',
            fontSize: '0.5em',
            margin: '0px',
            padding: '0px',
          }}
        >
          <h1>Email de réinitialisation envoyé avec succés</h1>
        </div>
      )}
      {reset && (
        <div
          style={{
            position: 'fixed',
            display: 'flex',
            color: 'white',
            width: '100vw',
            justifyContent: 'center',
            marginTop: '500px',
            zIndex: '1000',
            marginLeft: '230px',
          }}
        >
          <input
            style={{
              borderRadius: '10px',
              height: '50px',
              width: '200px',
              textAlign: 'center',
            }}
            onChange={(e) =>
              setForm({
                email: e.target.value,
              })
            }
            name='input'
            placeholder='Entrez votre adresse email'
            onKeyUp={(e) => handleResetPassword(e)}
          />
        </div>
      )}{' '}
      {}
      {!loading ? (
        <Fragment>
          <div
            style={{
              color: !errorForm ? '#BAFF29' : 'red',
              width: '100vw',
            }}
          >
            {errorBis !== null && (
              <div
                style={{
                  width: '100vw',
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'fixed',
                }}
              >
                <h5
                  style={{
                    textAlign: 'center',
                    color: 'red',
                    background: 'white',
                    padding: '10px',
                    borderRadius: '10px',
                  }}
                >
                  Utilisateur inconnu ou mot de passe incorrect<br></br>,
                  veuillez vous inscrire ou réessayer. <br></br>Connectez vous
                  avec le même fournisseur de connexion
                </h5>
              </div>
            )}
            <div
              style={{
                flexBasis: '100%',
                justifyContent: 'center',
                display: 'flex',
                flexWrap: 'wrap',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  flex: '100%',
                  marginTop: '30px',
                }}
              >
                <label>Connexion | Inscription</label>
              </div>
              <div
                style={{
                  flexBasis: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '30px',
                }}
              >
                <label htmlFor='email'>Email</label>
                <input
                  style={{
                    width: '50%',
                    margin: 'auto',
                    marginTop: '30px',
                    borderRadius: '10px',
                    height: '35px',
                    textAlign: 'center',
                    background: 'white',
                  }}
                  onChange={(e) => handleChange(e)}
                  type='text'
                  name='email'
                  placeholder='email'
                />
                {error.email && (
                  <span style={{ color: 'red', textAlign: 'center' }}>
                    {error.email}
                  </span>
                )}
              </div>
              <div
                style={{
                  flexBasis: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '30px',
                }}
              >
                <label htmlFor='password'>Password</label>
                <input
                  onChange={(e) => handleChange(e)}
                  style={{
                    width: '50%',
                    margin: 'auto',
                    height: '35px',
                    marginTop: '30px',
                    borderRadius: '10PX',
                    textAlign: 'center',
                    background: 'white',
                  }}
                  type='password'
                  name='password'
                  placeholder='password'
                />
                {error.password && (
                  <span style={{ color: 'red' }}>{error.password}</span>
                )}
              </div>
              <div
                style={{
                  flexBasis: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '30px',
                }}
              >
                <label htmlFor='confirmpassword'>Confirm password</label>
                <input
                  onChange={(e) => handleChange(e)}
                  style={{
                    width: '50%',
                    margin: 'auto',
                    marginTop: '30px',
                    borderRadius: '10PX',
                    height: '35px',
                    textAlign: 'center',
                    background: 'white',
                  }}
                  type='password'
                  name='confirmpassword'
                  placeholder='confirmpassword'
                />
              </div>
              <div
                style={{
                  flexBasis: '50%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: '30px',
                }}
              >
                <button
                  style={{
                    width: '25%',
                    height: '80px',
                    border: 'none',
                    background: !errorForm ? '#69A197' : 'red',
                    borderRadius: '10px',
                    boxShadow: '2px 2px 5px 1px #f1f6f5',
                  }}
                  name='login'
                  onClick={(e) => handleSubmit(e)}
                >
                  Connexion
                </button>

                <button
                  style={{
                    width: '25%',
                    height: '80px',
                    border: 'none',
                    background: !errorForm ? '#69A197' : 'red',
                    boxShadow: '2px 2px 5px 1px #f1f6f5',
                    borderRadius: '10px',
                  }}
                  name='register'
                  onClick={(e) => handleSubmitBis(e)}
                >
                  Inscription
                </button>
                <span onClick={() => handleReset()}>
                  Mot de passe oublié ?{' '}
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              color: '#f1f6f5',
              marginTop: '30px',
            }}
          >
            {errorForm && <span>Veuillez respectez les champs indiqués</span>}
          </div>{' '}
          <div
            style={{
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                onClick={() => dispatch(ACT.GoogleLog())}
                name='google'
                src='https://www.polymtl.ca/calendrier/sites/calendrier.amigow2020.polymtl.ca/files/googlelogo.jpg'
                width='80px'
                height='80px'
                style={{ borderRadius: '50px' }}
              />

              <img
                onClick={() => dispatch(ACT.FacebookLog())}
                name='facebook'
                src='https://i.pinimg.com/originals/78/db/c9/78dbc9c84d0124b0b9f63b896b12b3f1.png'
                width='80px'
                height='80px'
              />
            </div>
          </div>
        </Fragment>
      ) : (
        <div
          style={{
            position: 'fixed',
            width: '100Vw',
            height: '100vh',
            background: '#0B0033',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <h1 style={{ color: '#BAFF29', fontSize: '3em' }}>....Chargement</h1>
        </div>
      )}
    </Fragment>
  );
});

export default LoginForm;
