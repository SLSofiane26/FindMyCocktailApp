import React, { memo } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import NavsItems from './NavsItems';
import * as Link from '../Navs/Link';
import { useSelector } from 'react-redux';
let ContainerNav = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  background: #0b0033;
`;

let Navs = memo(function Navs(props) {
  let token = useSelector((state) => state.login.token);

  let history = useHistory();
  return (
    <ContainerNav>
      <div style={{ width: '100vw', position: 'fixed', zIndex: '10000' }}>
        <h1
          style={{
            color: 'white',
            padding: '0px',
            marginTop: '10px',
            marginLeft: '10px',
          }}
          onClick={() => history.push({ pathname: Link.Home })}
        >
          Find your COCKTAIL !
        </h1>
      </div>
      <NavsItems />
    </ContainerNav>
  );
});

export default Navs;
