import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this is imported

const Layout = () => {
    return ( 
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/insert">Insert Product</Nav.Link>
                        <Nav.Link as={Link} to="/display">Display</Nav.Link>
                        <Nav.Link as={Link} to="/productsummery">Product Summery</Nav.Link>
                        <Nav.Link as={Link} to="/search">Search</Nav.Link>
                        <Nav.Link as={Link} to="update">Delete</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet/>
            <hr size="4" color="brown"/>
            www.abccompany.com
        </>
    );
}

export default Layout;
