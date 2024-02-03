import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar style={{backgroundColor:"#FFD90F" }} >
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className="text-decoration-none text-white me-5">
              <Button style={{backgroundColor:"#FFD90F"}}>Home</Button>
            </Link>
            <Link to="/fav" className="text-decoration-none text-white">
              <Button style={{backgroundColor:"#FFD90F"}}>Favoritos</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
