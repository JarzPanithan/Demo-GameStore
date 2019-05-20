import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';

class Tabs extends Component {
    render(){
        return(
            <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="store-page=1">Store</Nav.Link>
              <Nav.Link href="#seller">Top Seller</Nav.Link>
              <Nav.Link href="#deal">Lastest Deal</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
            </Nav>
          </Navbar>
        );
    }
}

export default Tabs;