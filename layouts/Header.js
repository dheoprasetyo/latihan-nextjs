import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import Link from 'next/link'

export default function Header(){
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Nav className="me-auto">
            <Link href="/">
                <Nav.Link href="/">Home</Nav.Link>
            </Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}