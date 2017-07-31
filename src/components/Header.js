import React, { Component } from 'react';
// import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    // const btn = {
    //   background: '#5cb85c',
    //   color: '#fff'
    // };

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Check The Weather</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        { /*
        <Navbar.Form pullRight>
          <FormGroup>
            <FormControl bsSize="lg" type="text" placeholder="Search" />
          </FormGroup>
          {' '}
          <Button style={btn} type="submit">Get Weather</Button>
          </Navbar.Form>
        */ }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;

