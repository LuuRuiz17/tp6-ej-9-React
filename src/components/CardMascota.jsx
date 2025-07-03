import { Card, ListGroup, Button } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

const CardMascota = ({ cita , borrarCita }) => {
    return (
        <Card className="card-mascota"> 
            <Card.Body className="card-mascota d-flex">
                <Card.Title className="my-auto">Paciente: {cita.nombreMascota}</Card.Title>
                <button className="btn-eliminar ms-auto me-3 rounded rounded-3 text-center py-1" onClick={() => borrarCita(cita.id)}><i class="bi bi-trash3 text-dark icono-grande"></i></button>
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