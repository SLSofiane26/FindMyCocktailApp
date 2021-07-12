import DetailContext from './DetailContext';
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import * as ACT from '../../Reducer/ActionData';

class IgDetailBis extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      data: null,
    };
  }
  static contextType = DetailContext;

  componentDidMount = () => {
    if (this.props.dataBis !== 'None Found') {
      this.setState((prevState) => ({
        items: this.props.dataBis,
      }));
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.props.dataBis !== prevState.dataBis &&
      this.props.dataBis !== 'None Found'
    ) {
      this.setState((prevState) => ({
        items: this.props.dataBis,
      }));
    }
  };

  render() {
    if (this.state.data !== null) {
      this.props.history.push({
        pathname: '/cocktail',
        search: '&' + this.state.data,
      });
    }
    return (
      <Fragment>
        {this.state.items.length > 1 ? (
          <div
            style={{
              width: '100vw',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              textAlign: 'center',
              background: '#0B0033',
              height: 'auto',
              minHeight: '100vh',
              color: '#BAFF29',
            }}
          >
            {this.state.items.map((items, index) => {
              return (
                <div
                  key={index}
                  style={{ flexBasis: '25%' }}
                  onClick={() =>
                    this.setState((prevState) => ({
                      data: items.idDrink,
                    }))
                  }
                >
                  <h4>{items.strDrink}</h4>
                  <img
                    src={items.strDrinkThumb}
                    width='300px'
                    height='400px'
                    style={{ borderRadius: '10px' }}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div
            style={{
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              background: '#0B0033',
              color: '#69A197',
              height: '100vh',
              position: 'fixed',
            }}
          >
            <h1 style={{ fontSize: '1em' }}>Aucun résultat</h1>
          </div>
        )}
      </Fragment>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    HandleF: (data) => dispatch(ACT.FetchIg(data)),
  };
};
let mapStateToProps = (state) => {
  return {
    data: state.data.IgFBis,
    error: state.data.error,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(IgDetailBis));
