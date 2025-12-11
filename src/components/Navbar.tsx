import { Navbar, Nav, Container } from "react-bootstrap";
//g
const MyNavbar = () => {
  return (
    <Navbar className="space-navbar fixed-top" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="space-brand">
          LukeDev
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="space-link">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="space-link">
              About
            </Nav.Link>
            <Nav.Link href="#projects" className="space-link">
              Projects
            </Nav.Link>

            <Nav.Link href="#contact" className="space-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
