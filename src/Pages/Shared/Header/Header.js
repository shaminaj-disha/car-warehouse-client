import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img height={30} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Brand as={Link} to="/home">Car Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <NavDropdown title="Options" id="collasible-nav-dropdown">
                                        <NavDropdown.Item as={Link} to="manageItems">Manage Items</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="addItem">Add Item</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="myItems">My Items</NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            }
                            {
                                user ?
                                    <Nav.Link onClick={handleSignOut}>sign out</Nav.Link>
                                    :
                                    <Nav.Link as={Link} to="login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;