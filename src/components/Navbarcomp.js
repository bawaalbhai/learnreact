import React from 'react'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from 'prop-types'
import Switch from './htmlelements/Switch';
import { Link } from 'react-router-dom';


function Navbarcomp(props) {
  
 
  return (
    <>
      <Navbar bg={`${props.mode}`} variant={`${props.mode}`} expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} className="nav-link" to="/">{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Link >  */}
              <Nav.Link as={Link} className="nav-link" to="/">Home </Nav.Link>
              {/* </Link> */}
              <Nav.Link as={Link} className="nav-link" to="about">{props.aboutText}</Nav.Link>
            </Nav>
            <Switch
              onClick={props.toggleMode}
              modelabel={props.modelabel}
              labelColor={props.labelColor}
              //className="mx-10px"
             
            ></Switch>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
// eslint-disable-next-line react/no-typos
Navbarcomp.propTypes = {
  title : PropTypes.string.isRequired,
  aboutText : PropTypes.string.isRequired
}

Navbarcomp.defaultProps = {
  title : 'Default Title',
  aboutText : 'Default About Text'
}
export default Navbarcomp
