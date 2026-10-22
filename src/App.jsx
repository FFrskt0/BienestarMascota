import { useState } from "react";
import LayoutInterno from "./componentes/LayoutInterno/LayoutInterno";
import PerfilMascota from "./componentes/PerfilCitas/PerfilMascota/PerfilMascota";
import AgendarCita from "./componentes/PerfilCitas/AgendarCita/AgendarCita";
import { TriageForm } from "./componentes/triaje/TriageForm";
import { citas as citasIniciales, mascota as mascotaInicial, servicios } from "./data/mascotaData";
import "./App.css";

const CLAVE_MASCOTAS = "bienestar-mascotas";
const CLAVE_CITAS = "bienestar-citas";

function leerAlmacenamiento(clave, inicial) {
  try {
    const valor = localStorage.getItem(clave);
    const datos = valor === null ? inicial : JSON.parse(valor);
    if (!Array.isArray(datos)) {
      return { valor: inicial, error: "Los datos guardados no tienen el formato esperado. Se usarán datos de ejemplo." };
    }
    return { valor: datos, error: "" };
  } catch (error) {
    console.error(`No se pudo leer ${clave} del almacenamiento local.`, error);
    return { valor: inicial, error: "No pudimos leer los datos guardados. La demo seguirá con datos de ejemplo." };
  }
}

function guardarAlmacenamiento(clave, datos, setError) {
  try {
    localStorage.setItem(clave, JSON.stringify(datos));
    setError("");
  } catch (error) {
    console.error(`No se pudo guardar ${clave} en el almacenamiento local.`, error);
    setError("No pudimos guardar los cambios en este navegador. Seguirán disponibles mientras la página permanezca abierta.");
  }
}

function fechaLocal(fecha) {
  const [anio, mes, dia] = fecha.split("-").map(Number);
  return new Date(anio, mes - 1, dia, 12);
}

function Inicio({ onNavegar }) {
  return (
    <main className="app-pagina">
      <p className="app-pagina__eyebrow">CLÍNICA VETERINARIA LAZO</p>
      <h1>Tu tranquilidad.<br />Nuestro lazo.</h1>
      <p>Un espacio de prueba para consultar el perfil de tu mascota y organizar sus cuidados.</p>
      <div className="app-pagina__acciones">
        <button onClick={() => onNavegar("mascota")}>Ver perfil de mascota</button>
        <button className="app-pagina__secundario" onClick={() => onNavegar("cita")}>Solicitar una cita</button>
      </div>
    </main>
  );
}

function Servicios({ onSolicitar }) {
  return (
    <main className="app-pagina">
      <p className="app-pagina__eyebrow">CUIDADOS</p>
      <h1>Servicios para acompañar su bienestar.</h1>
      <div className="app-servicios">
        {servicios.map((servicio) => (
          <article className="app-servicios__tarjeta" key={servicio.nombre}>
            <h2>{servicio.nombre}</h2>
            <p>{servicio.descripcion}</p>
            <span>Duración estimada: {servicio.duracion}</span>
            <button onClick={() => onSolicitar(servicio.nombre)}>Solicitar este servicio ↗</button>
          </article>
        ))}
      </div>
    </main>
  );
}

function App() {
  const [mascotasCargadas] = useState(() => leerAlmacenamiento(CLAVE_MASCOTAS, [mascotaInicial]));
  const [citasCargadas] = useState(() => leerAlmacenamiento(CLAVE_CITAS, citasIniciales));
  const [mascotas, setMascotas] = useState(() => Array.isArray(mascotasCargadas.valor) ? mascotasCargadas.valor : [mascotaInicial]);
  const [citas, setCitas] = useState(() => Array.isArray(citasCargadas.valor) ? citasCargadas.valor : citasIniciales);
  const [pagina, setPagina] = useState("mascota");
  const [mascotaActivaId, setMascotaActivaId] = useState(() => mascotaInicial.id);
  const [formMascota, setFormMascota] = useState("");
  const [servicioInicial, setServicioInicial] = useState("");
  const [notasIniciales, setNotasIniciales] = useState("");
  const [errorAlmacenamiento, setErrorAlmacenamiento] = useState(mascotasCargadas.error || citasCargadas.error);
  const mascotaActiva = mascotas.find((item) => item.id === mascotaActivaId) || mascotas[0] || mascotaInicial;

  const navegar = (destino) => {
    setFormMascota("");
    setPagina(destino);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const guardarMascota = (datos) => {
    if (formMascota === "editar") {
      const mascotasActualizadas = mascotas.map((item) => item.id === mascotaActiva.id
        ? {
            ...item,
            ...datos,
            raza: datos.especie === item.especie ? item.raza : datos.especie,
            edad: `${datos.edad} ${Number(datos.edad) === 1 ? "año" : "años"}`,
            peso: datos.peso ? `${datos.peso} kg` : "Sin registrar",
          }
        : item);
      setMascotas(mascotasActualizadas);
      guardarAlmacenamiento(CLAVE_MASCOTAS, mascotasActualizadas, setErrorAlmacenamiento);
    } else {
      const nuevaMascota = {
        ...datos,
        id: Date.now(),
        raza: datos.especie,
        sexo: "Sin registrar",
        edad: `${datos.edad} ${Number(datos.edad) === 1 ? "año" : "años"}`,
        peso: datos.peso ? `${datos.peso} kg` : "Sin registrar",
        nacimiento: "Sin registrar",
        dueno: "Familia",
        pesoFecha: "Sin registrar",
        foto: mascotaInicial.foto,
      };
      const mascotasActualizadas = [...mascotas, nuevaMascota];
      setMascotas(mascotasActualizadas);
      guardarAlmacenamiento(CLAVE_MASCOTAS, mascotasActualizadas, setErrorAlmacenamiento);
      setMascotaActivaId(nuevaMascota.id);
    }
    setFormMascota("");
  };

  const guardarCita = (solicitud) => {
    const fecha = fechaLocal(solicitud.fecha);
    const servicio = servicios.find((item) => item.nombre === solicitud.servicio);
    const citasActualizadas = [...citas, {
      id: Date.now(),
      fecha: solicitud.fecha,
      mascota: solicitud.mascota,
      hora: solicitud.hora,
      dia: fecha.toLocaleDateString("es-ES", { day: "2-digit" }),
      mes: fecha.toLocaleDateString("es-ES", { month: "short", year: "numeric" }).toUpperCase(),
      titulo: solicitud.servicio,
      doctora: "Pendiente de asignar",
      duracion: servicio?.duracion || "Por confirmar",
      modalidad: "Presencial · Solicitud pendiente",
    }];
    setCitas(citasActualizadas);
    guardarAlmacenamiento(CLAVE_CITAS, citasActualizadas, setErrorAlmacenamiento);
  };

  const solicitarServicio = (servicio) => {
    setServicioInicial(servicio);
    setNotasIniciales("");
    navegar("cita");
  };

  const continuarDesdeTriaje = (notas) => {
    setServicioInicial("");
    setNotasIniciales(notas);
    navegar("cita");
  };

  const mascotaOpciones = mascotas.map((item) => ({
    id: item.id,
    label: `${item.nombre} · ${item.especie}`,
  }));

  return (
    <LayoutInterno activo={pagina} onNavegar={navegar}>
      {errorAlmacenamiento && <p className="app-aviso" role="status">{errorAlmacenamiento}</p>}
      {pagina === "inicio" && <Inicio onNavegar={navegar} />}
      {pagina === "servicios" && <Servicios onSolicitar={solicitarServicio} />}
      {pagina === "triaje" && <TriageForm onContinuar={continuarDesdeTriaje} />}
      {pagina === "mascota" && (
        <PerfilMascota
          mascota={mascotaActiva}
          esMascotaInicial={mascotaActiva.id === mascotaInicial.id}
          mascotas={mascotas}
          citas={citas}
          formMascota={formMascota}
          onSeleccionarMascota={setMascotaActivaId}
          onAgendarCita={() => solicitarServicio("")}
          onIrTriaje={() => navegar("triaje")}
          onEditar={() => setFormMascota("editar")}
          onRegistrar={() => setFormMascota("nueva")}
          onGuardarMascota={guardarMascota}
          onCancelarEdicion={() => setFormMascota("")}
        />
      )}
      {pagina === "cita" && (
        <AgendarCita
          mascotas={mascotaOpciones}
          servicioInicial={servicioInicial}
          notasIniciales={notasIniciales}
          onSubmitSolicitud={guardarCita}
          onVolver={() => navegar("mascota")}
        />
      )}
    </LayoutInterno>
  );
}

export default App;