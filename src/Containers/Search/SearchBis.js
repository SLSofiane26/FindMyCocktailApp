import React, { Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import IGlist from '../../Components/Search/IGlist';
import SearchAlc from '../../Components/Search/SearchAlc';
import SearchCat from '../../Components/Search/SearchCat';
import SearchRecent from '../../Components/Search/SearchRecent';

let ContainerSearch = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: #0b0033;
`;

class SearchBis extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {};
  componentDidUpdate = (prevProps, prevState) => {};
  render() {
    return (
      <Fragment>
        <ContainerSearch>
          <h1
            style={{
              position: 'fixed',
              marginTop: '150px',
              color: 'white',
              marginLeft: '200px',
              fontSize: '0.9em',
              marginLeft: '300px',
            }}
          >
            Séléctionner ingrédients
          </h1>
          <SearchAlc />
          <IGlist />
          <SearchCat />
          <SearchRecent />
        </ContainerSearch>
      </Fragment>
    );
  }
}

export default SearchBis;
