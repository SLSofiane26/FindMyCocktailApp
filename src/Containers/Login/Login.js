import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import LoginForm from './LoginForm';
import Spinner from '../../Components/Spinner/Spinner';
class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {};
  componentDidUpdate = (prevState, prevProps) => {
    if (this.props.token !== null) {
      this.props.history.push({ pathname: '/home' });
    }
  };
  render() {
    return (
      <Fragment>
        <div
          style={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            background: '#0B0033',
          }}
        >
          {this.props.loading ? <Spinner /> : <LoginForm />}
        </div>
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    token: state.login.token,
    error: state.login.error,
    reset: state.login.reset,
    loading: state.login.loading,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
