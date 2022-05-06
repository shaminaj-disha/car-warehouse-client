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
                            <Nav.Link as={Link} to="inventories">Inventories</Nav.Link>
                            <Nav.Link as={Link} to="manageInventories">Manage Inventories</Nav.Link>
                            <Nav.Link as={Link} to="addNewItem">Add New Item</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                {
                                    user && <>
                                        <NavDropdown.Item as={Link} to="manageItems">Manage Items</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="addItem">Add Item</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="myItems">My Items</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    </>
                                }
                                {
                                    user ?
                                        <NavDropdown.Item onClick={handleSignOut}>sign out</NavDropdown.Item>
                                        :
                                        <NavDropdown.Item as={Link} to="login">Login</NavDropdown.Item>
                                }
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;