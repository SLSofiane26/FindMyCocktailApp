import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TopCocktail from '../../Components/Home/TopCocktail';
import Video from '../../Components/Home/Video';
import HomeContext from './HomeContext';
import * as ACT from '../../Reducer/ActionData';
import styled from 'styled-components';
import HomeCocktail from '../../Components/Home/HomeCocktail';
import { Helmet } from 'react-helmet';

let HomeStyled = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  position: fixed;
`;

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  componentDidMount = () => {
    this.props.handleData();
    setTimeout(() => {
      this.setState((prevState) => ({
        show: !prevState.show,
      }));
    }, 1000);
  };

  componentDidUpdate = (prevState, prevProps) => {};

  render() {
    let { show } = this.state;
    return (
      <Fragment>
        <HomeContext.Provider value={{ show }}>
          <Helmet>
            <meta charset='utf-8' />
            <meta name='keywords' content='cocktail, cocktails, boissons' />
            <meta
              name='description'
              content='Trouver votre cocktail, vos cocktails rapidement'
            />
            <title>Find your Cocktail</title>
          </Helmet>
          <HomeStyled>
            {this.props.token === null ? (
              <Fragment>
                <div
                  style={{ zIndex: '-10', position: 'fixed', width: '100vw' }}
                >
                  <Video />
                </div>
                <div
                  style={{
                    width: '100vw',
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '4em',
                    zIndex: '1000',
                    position: 'fixed',
                    color: '#BAFF29',
                    marginTop: '150px',
                  }}
                >
                  <h1
                    style={{
                      background: '#0B0033',
                      margin: '0px',
                      padding: '30px',
                      borderRadius: '50px',
                      fontSize: '1.5em',
                    }}
                  >
                    Find your Cocktail !
                  </h1>
                </div>{' '}
                <div
                  style={{
                    display: 'flex',
                    width: '100vw',
                    position: 'fixed',
                    justifyContent: 'center',
                    marginTop: '400px',
                  }}
                >
                  <div
                    style={{
                      flexBasis: '40%',
                      justifyContent: 'space-evenly',
                      display: 'flex',
                    }}
                  >
                    <button
                      onClick={() =>
                        this.props.history.push({ pathname: '/login' })
                      }
                      style={{
                        flexBasis: '30%',
                        height: '100px',
                        borderRadius: '20px',
                        background: '#0B0033',
                        textTransform: 'uppercase',
                        color: '#f1f6f5',
                        border: '4px solid #0B0033',
                        boxShadow: '1px 1px 50px 10px #f1f6f5 ',
                      }}
                    >
                      Se connecter
                    </button>
                    <button
                      onClick={() =>
                        this.props.history.push({ pathname: '/register' })
                      }
                      style={{
                        flexBasis: '30%',
                        height: '100px',
                        borderRadius: '20px',
                        background: '#0B0033',
                        textTransform: 'uppercase',
                        color: '#f1f6f5',
                        border: '4px solid #0B0033',
                        boxShadow: '1px 1px 50px 10px #f1f6f5 ',
                      }}
                    >
                      S'inscrire
                    </button>
                  </div>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <HomeCocktail show={true} />
                <Video />
                <TopCocktail />
              </Fragment>
            )}
          </HomeStyled>
        </HomeContext.Provider>
      </Fragment>
    );
  }
}

Home.contextType = { HomeContext };

let mapDispatchToProps = (dispatch) => {
  return {
    handleData: () => dispatch(ACT.TopCocktail()),
  };
};

let mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
