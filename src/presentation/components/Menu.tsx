import React from "react"
import logo from "../../assets/img/logo-yucatan.png"
import { Container, Nav, Navbar, Image } from "react-bootstrap"

const Menu: React.FC = () => {
    return (
        <>

            <Navbar sticky="top" expand="lg" className="bg-body-tertiary px-3">
                <Container fluid>

                    {/* Logo alineado a la izquierda */}
                    <Navbar.Brand href="#Inicio" className="d-flex align-items-center">
                        <Image src={logo} alt="Escudo de Yucatán" className="logo-img" fluid />
                    </Navbar.Brand>


                    {/* Botón colapsable para móvil alineado a la derecha */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto"/>

                    {/* Menú de navegación */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#Inicio">Inicio</Nav.Link>
                            <Nav.Link href="#Fideicomiso">Cimientos del renacimiento</Nav.Link>
                            <Nav.Link href="#Ejes">Ejes de trabajo</Nav.Link>
                            <Nav.Link href="#Avance">Avance por entidad</Nav.Link>
                            <Nav.Link href="#Mapa">Mapa de obra pública georreferenciada</Nav.Link>
                            <Nav.Link href="#Municipios">Municipios con obras</Nav.Link>
                            <Nav.Link href="#Transparencia">Transparencia</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    )
};

export default Menu