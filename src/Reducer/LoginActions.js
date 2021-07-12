import Axios from 'axios';
import firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyArqvfKvHtwmi0wcgR75Dk7Hpzy4Ob9U4o',
  authDomain: 'hamburger-afe4d.firebaseapp.com',
  databaseURL: 'https://hamburger-afe4d.firebaseio.com',
  projectId: 'hamburger-afe4d',
  storageBucket: 'hamburger-afe4d.appspot.com',
  messagingSenderId: '235822040538',
  appId: '1:235822040538:web:08c490b64e729d13736ce3',
  measurementId: 'G-MDPZ7YVVG9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export let Login = (email, password, state) => async (dispatch) => {
  dispatch({ type: 'START' });
  let data = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_KEY}`;
  if (state) {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_KEY}`;
  }
  await Axios.post(url, data)
    .then((res) => {
      let expDate = new Date(new Date().getTime() + 3600 * 1000).getTime();
      localStorage.setItem('token', res.data.idToken);
      localStorage.setItem('id', res.data.localId);
      localStorage.setItem('email', res.data.email);
      localStorage.setItem('expDate', expDate);
      dispatch({ type: 'LOGINSUCCES', payload: { data: res.data } });
    })
    .catch((err) => {
      dispatch({ type: 'LOGINERROR', payload: { data: err } });
    });
};

export let LogoutTimeOut = (data) => (dispatch) => {
  setTimeout(() => {
    dispatch(Logout());
  }, data);
};

var provider = new firebase.auth.FacebookAuthProvider();
firebase.auth().languageCode = 'fr_FR';
var providerBis = new firebase.auth.GoogleAuthProvider();

export let GoogleLog = () => async (dispatch, getState) => {
  dispatch({
    type: 'START',
  });
  firebase
    .auth()
    .signInWithPopup(providerBis)
    .then((res) => {
      let expDate = new Date(new Date().getTime() + 3600 * 1000).getTime();
      localStorage.setItem('expDate', expDate);
      localStorage.setItem('photo', res.user.photoURL);
      localStorage.setItem('email', res.user.email);
      localStorage.setItem('name', res.user.displayName);
      localStorage.setItem('token', res.credential.accessToken);
      localStorage.setItem('id', res.credential.idToken);
      dispatch({ type: 'FACEBOOKSUCCES', payload: { data: res } });
    })
    .catch((err) => dispatch({ type: 'GOOGLERROR', payload: { data: err } }));
};

export let FacebookLog = () => async (dispatch, getState) => {
  dispatch({
    type: 'START',
  });
  await firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      let expDate = new Date(new Date().getTime() + 3600 * 1000).getTime();
      localStorage.setItem('expDate', expDate);
      localStorage.setItem('photo', res.user.photoURL);
      localStorage.setItem('email', res.user.email);
      localStorage.setItem('name', res.user.displayName);
      localStorage.setItem('token', res.credential.accessToken);
      localStorage.setItem('id', res.credential.providerId);
      dispatch({
        type: 'FACEBOOKSUCCES',
        payload: {
          data: {
            token: res.credential.accessToken,
            id: res.credential.providerId,
          },
        },
      });
    })
    .catch((err) => {
      dispatch({ type: 'FACEBOOKERROR', payload: { data: err } });
    });
};
export let CheikAuth = () => async (dispatch) => {
  let token = localStorage.getItem('token');
  if (!token) {
    dispatch(Logout());
  } else {
    let expDate = localStorage.getItem('expDate');
    if (expDate < new Date().getTime()) {
      dispatch(Logout());
    } else {
      let id = localStorage.getItem('id');
      dispatch(LogoutTimeOut(expDate - new Date().getTime()));
      dispatch({
        type: 'FACEBOOKSUCCES',
        payload: { data: { token: token, id: id } },
      });
    }
  }
};
export let Logout = () => async (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('id');
  localStorage.removeItem('email');
  localStorage.removeItem('expDate');
  localStorage.removeItem('name');
  localStorage.removeItem('email');
  localStorage.removeItem('photo');
  dispatch({
    type: 'LOGOUT',
  });
};
export let Reset = (email) => async (dispatch) => {
  dispatch({ type: 'START' });
  let data = {
    requestType: 'PASSWORD_RESET',
    email: email,
  };
  await Axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_KEY}`,
    data
  )
    .then((res) => dispatch({ type: 'RESET', payload: { data: res.data } }))
    .catch((err) => dispatch({ type: 'RESETERROR', payload: { data: err } }));
};
