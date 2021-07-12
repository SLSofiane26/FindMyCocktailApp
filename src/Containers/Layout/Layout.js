import React, { Fragment, memo, PureComponent, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import Navs from '../../Components/Navs/Navs';
import * as ACT from '../../Reducer/LoginActions';
class Layout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    this.props.handle();
  };
  componentDidUpdate = (prevState, prevProps) => {
    this.props.handle();
  };
  render() {
    return (
      <Fragment>
        {' '}
        <body>
          <header>
            <Navs />
          </header>
          <main>{this.props.children}</main>
        </body>
      </Fragment>
    );
  }
}

Layout.defaultProps = {};
let mapDispatchToProps = (dispatch) => {
  return {
    handle: () => dispatch(ACT.CheikAuth()),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Layout));
