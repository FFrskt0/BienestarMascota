import AppointmentForm from "../AppointmentForm/AppointmentForm";
import CitaSidebar from "../CitaSideBar/CitaSideBar";
import "./AgendarCita.css";

export default function AgendarCita({ mascotas, servicioInicial, notasIniciales, onSubmitSolicitud, onVolver }) {
  return (
    <main className="agendar-cita">
      <nav className="agendar-cita__migas" aria-label="Migas de pan">
        <button type="button" onClick={onVolver}>Mi mascota</button> <span>/</span> <strong>Agendar cita</strong>
      </nav>

      <header className="agendar-cita__header">
        <div>
          <h1 className="agendar-cita__titulo">Un momento para cuidar de él.</h1>
          <p className="agendar-cita__subtitulo">
            Elige un cuidado y un horario de preferencia. En esta demo la solicitud no se envía ni se confirma con una clínica.
          </p>
        </div>
        <span className="agendar-cita__chip">Cita y contacto</span>
      </header>

      <div className="agendar-cita__grid">
        <AppointmentForm
          mascotas={mascotas}
          servicioInicial={servicioInicial}
          notasIniciales={notasIniciales}
          onSubmitSolicitud={onSubmitSolicitud}
        />
        <CitaSidebar />
      </div>

      <p className="agendar-cita__nota">
        Demo local: la solicitud queda guardada en este navegador, pero no se envía a una clínica ni confirma disponibilidad.
      </p>
    </main>
  );
}