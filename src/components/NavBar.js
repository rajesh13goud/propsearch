import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

class MainNav extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <a href="#home">Property Development</a>
        </Navbar.Brand>
        <Nav pullRight>
          {this.props.userId ? (
            <NavItem eventKey={5} href="#">
              {this.props.userId}
            </NavItem>
          ) : null}
          {this.props.userId ? null : (
            <NavItem eventKey={1} href="#" onClick={this.props.inLoginClicked}>
              Login
            </NavItem>
          )}
          {this.props.userId ? null : (
            <NavItem eventKey={2} href="#" onClick={this.props.onSignupClicked}>
              Sign Up
            </NavItem>
          )}
          {this.props.userId ? (
            <NavItem eventKey={4} href="#" onClick={this.props.onLogoutClicked}>
              Log Out
            </NavItem>
          ) : null}
        </Nav>
      </Navbar>
    );
  }
}

export default MainNav;
