import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { IoLogoLinkedin } from "react-icons/io";
import { GoMarkGithub } from "react-icons/go";

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Ralph&apos;s Place</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <code>[React version: {React.version}]</code>
                </Nav>
                <Nav>
                    <Nav.Link href="/eyeCandy">Eye Candy</Nav.Link>
                    <Nav.Link href="/githubCards">Github Cards</Nav.Link>
                    <Nav.Link href="/shop">Shop</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/ralphmarkham/">
                        <IoLogoLinkedin size="1.4em" />
                    </Nav.Link>
                    <Nav.Link href="https://github.com/remarkham">
                        <GoMarkGithub size="1.4em" />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;