import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioCitas from './components/FormularioCitas';
import perritoIcon from './assets/perrito-icon.png';

function App() {

  return (
    <main className='container my-4 d-flex flex-column'>
    <h1 className='color-loop text-center'>Administrador Pacientes de Veterinaria <img className='mb-3' src={perritoIcon} alt='Ícono de perro'></img></h1>
    <FormularioCitas></FormularioCitas>
    </main>
  )
}

export default App
