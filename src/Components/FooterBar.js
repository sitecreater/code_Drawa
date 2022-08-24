import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styled from 'styled-components' //style components를 선언

let Fix = styled.div `
    position:sticky;
    bottom: 0;
    width: 100%; 
    opacity: 0;

  &:hover {
    opacity: 1;
    transition-duration: 1.5s
  }
`; //Fix div 선언

const Dis = styled.div `
&:hover ~ ${Fix} {
    opacity: 1;
    
  }
`; //Dis div 선언

function FooterBar() {

    return (
        <div className="FooterBar">
            <Fix className="pt-5">
                <Dis className="pt-5">
                    <Navbar bg="light" variant='light'>
                        <Container>
                            <Navbar.Collapse
                                id="basic-navbar-nav"
                                className='d-flex justify-content-between'>
                                <Nav.Link as={Link} to="/">
                                    <i
                                        className="fa-solid fa-house"
                                        style={{
                                            color: 'black'
                                        }}></i>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/draw">
                                    <i
                                        className="fa-solid fa-pen"
                                        style={{
                                            color: 'black'
                                        }}></i>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/trading">
                                    <i
                                        className="fa-solid fa-arrow-trend-up"
                                        style={{
                                            color: 'black'
                                        }}></i>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/shop">
                                    <i
                                        className="fa-solid fa-shirt"
                                        style={{
                                            color: 'black'
                                        }}></i>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/cart">
                                    <i
                                        className="fa-solid fa-cart-shopping"
                                        style={{
                                            color: 'black'
                                        }}></i>
                                </Nav.Link>
                                {/* <Nav.Link as={Link} to="/loginPage">
                                    <i
                                        className="fa-solid fa-user"
                                        style={{
                                            color: 'black'
                                        }}></i>
                                </Nav.Link> */
                                }
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Dis>
            </Fix>
        </div>
    )
}

export default FooterBar;