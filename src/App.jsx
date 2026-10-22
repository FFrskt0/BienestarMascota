import LayoutInterno from "./componentes/LayoutInterno/LayoutInterno";
import PerfilMascota from "./componentes/PerfilCitas/PerfilMascota/PerfilMascota";
import AgendarCita from "./componentes//PerfilCitas/AgendarCita/AgendarCita";

function App() {
  return (
    <LayoutInterno activo="mascota">
      <PerfilMascota />
      {/* <AgendarCita /> */} 
    </LayoutInterno>
  );
};

export default App;
