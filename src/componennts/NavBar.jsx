import React, { useState } from 'react'
import {Button, Container, Form, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import '../style/NavBar.css'
import { NavLink, useNavigate } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';


function NavBar() {

  const [input, setInput] = useState("");
  const navigasi = useNavigate();


  const submitHandler = (e) => {
    e.preventDefault();
    navigasi(`/search/${input}`);
  }


  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand}  expand="sm" className="Navnav" fixed="bottom">
          <Container fluid>
            <Navbar.Brand href="#" className='harusnya-gambar'>Mbut</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <LinkContainer to='/' >
                  <Nav.Link className='arahan'>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={'/kategori'}>
                  <Nav.Link href="#action2" className='arahan'>Category</Nav.Link>
                  </LinkContainer>
                  <Nav.Link href="#action2" className='arahan'>News</Nav.Link>
                  <Nav.Link href="#action2" className='arahan'>Login</Nav.Link>
                </Nav>
                <Form className="d-flex" onSubmit={submitHandler}>
                  <Form.Control
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button className='Tombol' variant="outline-success"><span className='toommbooll'
                  onClick={submitHandler}
                  >Search</span></Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar