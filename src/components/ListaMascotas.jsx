import CardMascota from "./CardMascota";

const ListaMascotas = ({ citas , borrarCita}) => {
    return (
        <section className="mt-3 row">
            {citas.length === 0 ? (
                <p className="text-center text-muted bold">No hay citas registradas aún.</p>
            ) : (
                citas.map((cita, index) => (
                    <div className="col-md-4 mb-3 contenedor-card" key={index}>
                        <CardMascota cita={cita} borrarCita = {borrarCita}/>
                    </div>
                ))
            )}
        </section>
    );
};

export default ListaMascotas;
