import React from "react"
import logo from "../../assets/img/logo-yucatan.png"
import { Container, Nav, Navbar, Image } from "react-bootstrap"

const Menu: React.FC = () => {
    return (
        <>

            <Navbar sticky="top" expand="lg" className="bg-body-tertiary px-3">
                <Container fluid className="d-flex align-items-center justify-content-between">

                    {/* Logo */}
                    <Navbar.Brand href="#Inicio" className="d-flex align-items-center flex-shrink-0 me-3">
                        <Image src={logo} alt="Escudo de Yucatán" className="logo-img" />
                    </Navbar.Brand>

                    {/* Botón hamburguesa para móvil */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* Menú colapsable */}
                    <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-1">
                        <Nav className="ms-auto d-flex flex-wrap gap-2">
                            <Nav.Link href="#Inicio">Inicio</Nav.Link>
                            <Nav.Link href="#Fideicomiso">Cimientos del renacimiento</Nav.Link>
                            <Nav.Link href="#Ejes">Ejes</Nav.Link>
                            <Nav.Link href="#Avance">Avance</Nav.Link>
                            <Nav.Link href="#Mapa">Mapa</Nav.Link>
                            <Nav.Link href="#Municipios">Municipios</Nav.Link>
                            <Nav.Link href="#Transparencia">Transparencia</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    )
};

export default Menu