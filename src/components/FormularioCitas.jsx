import { useState} from "react";
import { Form, Button } from "react-bootstrap"
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import ListaMascotas from "./ListaMascotas";

const FormularioCitas = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const [citas, setCitas] = useState([])

    const agregarCita = (dato) => {
        const cita = {
            nombreMascota: dato.nombreMascota,
            nombreDuenio: dato.nombreDuenio,
            fechaConsulta: dato.fechaConsulta,
            horaConsulta: dato.horaConsulta,
            sintomas: dato.sintomas
        };
        setCitas([...citas, cita]);

        Swal.fire({
            title: "Cita creada",
            icon: "success",
            draggable: true
        });

        reset()
    }

    return (
        <>
            <Form onSubmit={handleSubmit(agregarCita)} className="p-3 bg-form rounded rounded-3 mx-auto d-flex flex-column justify-content-center ">
                <Form.Group className="mb-1" controlId="formMascota">
                    <Form.Label className="label">Nombre de Mascota</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa el nombre de tu mascota" {...register('nombreMascota', {
                        require: 'Este campo es obligatorio',
                        minLength: {
                            value: 2,
                            message: 'El nombre de la mascota debe tener al menos 2 caracteres.'
                        },
                        maxLength: {
                            value: 20,
                            message: 'El nombre de la mascota debe tener como máximo 20 caracteres.'
                        }
                    })} />
                </Form.Group>
                <Form.Text className="text-danger">
                    {errors.nombreMascota?.message}
                </Form.Text>
                <Form.Group className="mb-1" controlId="formDuenio">
                    <Form.Label className="label">Nombre de Dueño</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa el nombre del dueño" {...register('nombreDuenio', {
                        required: 'Este campo es obligatorio',
                        minLength: {
                            value: 2,
                            message: 'El nombre del dueño debe tener al menos 2 caracteres.'
                        },
                        maxLength: {
                            value: 20,
                            message: 'El nombre del dueño debe tener como máximo 20 caracteres.'
                        }
                    })} />
                </Form.Group>
                <Form.Text className="text-danger">
                    {errors.nombreDuenio?.message}
                </Form.Text>
                <Form.Group className="mb-1" controlId="formFecha">
                    <Form.Label className="label">Fecha</Form.Label>
                    <Form.Control type="date" placeholder="Ej: 17/04/25" {...register('fechaConsulta', {
                        required: 'Este campo es obligatorio'
                    })} />
                </Form.Group>
                <Form.Text className="text-danger">
                    {errors.fechaConsulta?.message}
                </Form.Text>
                <Form.Group className="mb-1" controlId="formHora">
                    <Form.Label className="label">Hora</Form.Label>
                    <Form.Control type="time" placeholder="Ej: 17:55" {...register('horaConsulta', {
                        required: 'Este campo es obligatorio'
                    })} />
                </Form.Group>
                <Form.Text className="text-danger">
                    {errors.horaConsulta?.message}
                </Form.Text>
                <Form.Group className="mb-1" controlId="formSintomas">
                    <Form.Label className="label">Síntomas</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Ingresa los síntomas de tu mascota" {...register('sintomas', {
                        required: 'Este campo es obligatorio',
                        minLength: {
                            value: 5,
                            message: 'Describe los síntomas de manera más detallada.'
                        },
                        maxLength: {
                            value: 200,
                            message: 'La descripción es muy larga.'
                        }
                    })} />
                </Form.Group>
                <Form.Text className="text-danger">
                    {errors.sintomas?.message}
                </Form.Text>
                <Button className="mt-3 mb-2 mx-auto btn py-2" variant="primary" type="submit">
                    Agregar cita
                </Button>
            </Form>
            <ListaMascotas citas={citas}></ListaMascotas>
        </>
    );
};

export default FormularioCitas;