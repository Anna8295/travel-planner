import React from 'react';
import { Container, Nav, Navbar, Form } from 'react-bootstrap'; 
import { Autocomplete } from '@react-google-maps/api';

const Header = ({onPlaceChanged, onLoad}) => {
    return (
        <Navbar bg="light" expand="sm">
            <Container fluid>
                <Navbar.Brand href="#">Travel Planner</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                </Navbar.Collapse>
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                        </Form>
                </Autocomplete>
            </Container>
        </Navbar>
    );
};

export default Header;