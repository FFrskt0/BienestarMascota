import LayoutInterno from "./componentes/LayoutInterno/LayoutInterno";
import PerfilMascota from "./componentes/PerfilCitas/PerfilMascota/PerfilMascota";
import AgendarCita from "./componentes/PerfilCitas/AgendarCita/AgendarCita";
import { TriageForm } from './components/triaje/TriageForm';

function App() {
  return (
    <LayoutInterno activo="mascota">
      <PerfilMascota />
      {/* <AgendarCita /> */}
      <TriageForm />
    </LayoutInterno>
  );
}

export default App;