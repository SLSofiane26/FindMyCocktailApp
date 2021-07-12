import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as ACT from '../../Reducer/ActionData';
import CocktailBis from './CocktailBis';
class Cocktail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount = () => {
    let d = null;
    for (let key of new URLSearchParams(this.props.location.search).entries()) {
      this.setState((prevState) => ({
        data: key[0],
      }));
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.data !== prevState.data) {
      this.props.handleCocktail(this.state.data);
    }
  };
  render() {
    return (
      <Fragment>
        <CocktailBis data={this.props.data} />
      </Fragment>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    data: state.data.CocktailBis,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleCocktail: (data) => dispatch(ACT.Cocktail(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Cocktail));
