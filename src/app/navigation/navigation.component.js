import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './navigation.component.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <CSSTransitionGroup
        transitionName="fade-in"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionEnter={false}
        transitionLeaveTimeout={300}
        transitionLeave={false}
      >
        <Navbar fixed="true" toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">PH-Balanced</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/kirikintha">LinkedIn</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/paul-huntsberger-6690793b/">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </CSSTransitionGroup>
    );
  }
}

export default Navigation;
