import React, { Fragment, memo } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import * as Link from './Link';

let ListContainer = styled.ul`
  width: 50vw;
  display: flex;
  justify-content: space-evenly;
  z-index: 100000;
`;

let NavsItems = memo(function NavsItems(props) {
  let token = useSelector((state) => state.login.token);
  return (
    <Fragment>
      <ListContainer>
        {token === null ? (
          <Fragment>
            <NavLink
              to={Link.Home}
              style={{
                color: '#BAFF29',
                listStyle: 'none',
                textDecoration: 'NONE',
              }}
              activeStyle={{ color: '#BAFF29' }}
            >
              Home
            </NavLink>{' '}
            <NavLink
              to={Link.Login}
              style={{
                color: '#BAFF29',
                listStyle: 'none',
                textDecoration: 'NONE',
              }}
              activeStyle={{ color: '#f1f6f5' }}
            >
              Login
            </NavLink>
            <NavLink
              to={Link.Register}
              style={{
                color: '#BAFF29',
                listStyle: 'none',
                textDecoration: 'NONE',
              }}
              activeStyle={{ color: '#f1f6f5' }}
            >
              Register
            </NavLink>{' '}
          </Fragment>
        ) : (
          <Fragment>
            {' '}
            <NavLink
              to={Link.Home}
              style={{
                color: '#BAFF29',
                listStyle: 'none',
                textDecoration: 'NONE',
              }}
              activeStyle={{ color: '#BAFF29' }}
            >
              Home
            </NavLink>
            <NavLink
              to={Link.Find}
              style={{
                color: '#BAFF29',
                listStyle: 'none',
                textDecoration: 'NONE',
              }}
              activeStyle={{ color: '#f1f6f5' }}
            >
              Find your Cocktail
            </NavLink>{' '}
            <NavLink
              to={Link.Logout}
              style={{
                color: '#BAFF29',
                listStyle: 'none',
                textDecoration: 'NONE',
              }}
              activeStyle={{ color: '#f1f6f5' }}
            >
              Logout
            </NavLink>
          </Fragment>
        )}
      </ListContainer>
    </Fragment>
  );
});

export default withRouter(NavsItems);
