import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavbarStatus = () => {
  return (
    <Nav
      variant="underline"
      defaultActiveKey="/"
      style={{ backgroundColor: "#3a444d" }}
    >
      <Container className="d-flex">
        <div className="d-flex gap-3">
          <Nav.Item>
            <Nav.Link as={Link} to={`/`} className="text-light">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={`/bugdet`} className="text-light">
              Budget
            </Nav.Link>
          </Nav.Item>
        </div>
        <Container
          className="d-flex"
          style={{ justifyContent: "flex-end", gap: "0.5em" }}
        >
          <h2 style={{ color: "green", margin: "0" }}>&#8226;</h2>
          <Nav.Link className="justify-content-end text-light">
            John Doe (Manager)
          </Nav.Link>
        </Container>
      </Container>
    </Nav>
  );
};

export default NavbarStatus;
