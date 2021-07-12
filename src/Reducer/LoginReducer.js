let LoginState = {
  loading: false,
  error: null,
  token: null,
  id: null,
  photo: null,
  email: null,
  name: null,
  reset: null,
  errorReset: null,
};

let LoginReducer = (state = LoginState, action) => {
  switch (action.type) {
    case 'START':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'LOGINSUCCES':
      return Object.assign({}, state, {
        loading: false,
        token: action.payload.data.idToken,
        id: action.payload.data.localId,
        email: action.payload.data.email,
      });
    case 'LOGINERROR':
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.data,
      });
    case 'LOGOUT':
      return Object.assign({}, state, {
        token: null,
        id: null,
        name: null,
        email: null,
        photo: null,
        loading: false,
      });
    case 'FACEBOOKSUCCES':
      return Object.assign({}, state, {
        loading: false,
        token: action.payload.data.token,
        id: action.payload.data.id,
      });
    case 'FACEBOOKERROR':
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.data,
      });
    case 'GOOGLESUCCES':
      return Object.assign({}, state, {
        loading: false,
        token: action.payload.data.credential.accessToken,
        id: action.payload.data.credential.idToken,
        name: action.payload.data.user.displayName,
        email: action.payload.data.user.email,
        photo: action.payload.data.user.photoURL,
      });
    case 'GOOGLERROR':
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.data,
      });
    case 'RESET':
      return Object.assign({}, state, {
        reset: action.payload.data,
        loading: false,
      });
    case 'RESETERROR':
      return Object.assign({}, state, {
        errorReset: action.payload.data,
        loading: false,
      });
    default:
      break;
  }
  return state;
};
export default LoginReducer;
