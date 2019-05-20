import React, {Component} from 'react';
import {Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import {MDBIcon} from 'mdbreact';
import {Badge} from 'reactstrap';

class Toolbar extends Component {
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Demo Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Form inline>
                            <FormControl type="text" placeholder="Search PC, Linux, Mac Games" className="mr-sm-2" style={{width: "35rem"}}/>
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Nav>
                    <Nav>
                        <Button variant="outline-light" href="register">Sign In</Button>
                        <Button variant="outline-light" href="#favorties"><MDBIcon icon="heart" size="lg"/> <Badge color="danger">0</Badge></Button>
                        <Button variant="outline-light" href="#cart"><MDBIcon icon="shopping-cart" size="lg"/> $0.00 <Badge color="danger">0</Badge></Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Toolbar;
