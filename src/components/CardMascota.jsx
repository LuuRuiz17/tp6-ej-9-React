import { Card, ListGroup } from "react-bootstrap";

const CardMascota = ({ cita }) => {
    return (
        <Card className="card-mascota"> 
            <Card.Body className="card-mascota">
                <Card.Title>Paciente: {cita.nombreMascota}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush card-mascota">
                <ListGroup.Item><span className="bold">🧑🏻‍🦱 Nombre del dueño:</span> {cita.nombreDuenio}</ListGroup.Item>
                <ListGroup.Item><span className="bold">🗓️ Fecha de consulta:</span> {cita.fechaConsulta}</ListGroup.Item>
                <ListGroup.Item><span className="bold">🕑 Hora de Consulta:</span> {cita.horaConsulta}</ListGroup.Item>
                <ListGroup.Item><span className="bold">🌡️ Síntomas:</span> {cita.sintomas}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
};

export default CardMascota;