import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "../features/Avance/Avance.css"

type CardAvanceProps = {
    img: string;
    title: string;
    porcentaje: number;
    descripcion: string;
}

const CardAvance: React.FC<CardAvanceProps> = ({img, title, porcentaje, descripcion}) => {
    return (
        <Card className="avance-card" style={{ width: '18rem' }}>
            <Card.Img 
                variant="bottom" 
                className="mx-auto d-block" 
                src={img} 
                style={{ 
                    width: '50px',
                    height: 'auto', 
                    paddingTop: '1rem' 
                    }} 
                />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {porcentaje} %
                    <div className="barra">
                        <div className="progreso" style={{ width: `${porcentaje}%` }}></div>
                    </div>
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{descripcion}</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default CardAvance