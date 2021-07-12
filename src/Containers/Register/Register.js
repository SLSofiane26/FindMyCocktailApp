import React, { Fragment, memo, PureComponent } from 'react';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
class Register extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    if (this.props.token !== null) {
      this.props.history.push({ pathname: '/home' });
    }
  };
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
          <RegisterForm />
        </div>
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};
export default connect(mapStateToProps, null)(Register);
