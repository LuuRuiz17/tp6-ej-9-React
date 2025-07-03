
import CardMascota from "./CardMascota";

const ListaMascotas = ({ citas }) => {
    return (
        <section className="mt-5 row">
            {citas.map((cita, index) => (
                <div className="col-md-4 mb-3 contenedor-card" key={index}>
                    <CardMascota cita={cita} />
                </div>
            ))}
        </section>
    );
};

export default ListaMascotas;