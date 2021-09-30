import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import Link from 'next/link'
import {sidebar} from './sidebar'

export default function Header(){
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Nav className="me-auto">
            {sidebar.map((item) => (
            <Link href={item.path}>
                <Nav.Link href={item.path}>{item.label}</Nav.Link>
            </Link>
            ))}
            </Nav>
            </Container>
        </Navbar>
    )
}