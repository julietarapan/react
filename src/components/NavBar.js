import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget/CartWidget";
import  "./CartWidget/CartWidget.css";
const NavBar = () => {
    return (
        <Navbar bg="dark">
          <Container>
          <Navbar.Brand href="#home">
            Tienda  
          </Navbar.Brand>
           <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Vestidos">Vestidos</Nav.Link>
            <Nav.Link href="#Sweaters">Sweaters</Nav.Link>
           </Nav>
           <CartWidget />
          </Container>
        </Navbar>
    )
}

export default NavBar;
