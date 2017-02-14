import React, { PropTypes } from 'react';

import { Link } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = ({isAuthenticated, username, onLogout }) => {
    return (
      <Navbar inverse fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">the directory</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem><i className="fa fa-database" /> Dashboard</NavItem>
          </IndexLinkContainer>
          {/*
          <LinkContainer to="/browse">
            <NavItem><i className="fa fa-database" /> Lists</NavItem>
          </LinkContainer>
          <LinkContainer to="/classes">
            <NavItem><i className="fa fa-book" /> Classes</NavItem>
          </LinkContainer>
          */}
        </Nav>
        {/*
        <Navbar.Form pullLeft>
            <Button bsStyle="success" onClick={transitionToCreateListPage}>Create New List</Button>
        </Navbar.Form>
        */}
        { isAuthenticated &&
          <Nav pullRight>
            <LinkContainer to="/about">
              <NavItem>About</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={1} title={username} id="basic-nav-dropdown">
              <MenuItem eventKey={1.1}>My Profile</MenuItem>
              <MenuItem eventKey={1.2}>Settings</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={1.4} onClick={onLogout}>Logout</MenuItem>
            </NavDropdown>
          </Nav>
        }
        { !isAuthenticated &&
          <Nav pullRight>
            <LinkContainer to="/register">
              <NavItem><i className="fa fa-user-plus" /> Sign Up</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem><i className="fa fa-sign-in" />  Sign In</NavItem>
            </LinkContainer>
          </Nav>
        }
        </Navbar.Collapse>
      </Navbar>
  );
};
// <NavItem onClick={transitionToListPage}><i className="fa fa-list" /> My Lists</NavItem>

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  username: PropTypes.string,
  onLogout: PropTypes.func.isRequired
};

export default Header;
