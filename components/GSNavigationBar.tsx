import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const GSNavigationBar = () => {

    return (
        <Navbar className="color-nav" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Golden Shoe</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={"navItem"} >Products</Nav.Link>
                        <Nav.Link className={"navItem"} href={"/MyAccount"}>My Account</Nav.Link>
                        <Nav.Link className={"navItem"} href={"/About"}>About</Nav.Link>
                        <Nav.Link className={"navItem"} href={"/Contact"}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default GSNavigationBar
