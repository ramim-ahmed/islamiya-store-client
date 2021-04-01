import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
const Header = () => {
    const [loggedInUser, ] = useContext(userContext)
    return (
        <>
             <Navbar bg="light" variant="light">
                    <Navbar.Brand>
                        <Link to = '/'> <strong> Islamiya Store </strong> </Link>
                    </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link>
                        <Link to = '/' >Home</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link to = '/order' >Order</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to = '/admin' >Admin</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to = '/deals' >Deals</Link>
                    </Nav.Link>
                    <Nav.Link>
                        {
                            loggedInUser.email ? <span>{loggedInUser.user} </span> : <Link to = '/login' >Login</Link>
                        }
                    </Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
};

export default Header;