import AppointmentForm from "../AppointmentForm/AppointmentForm";
import CitaSidebar from "../CitaSidebar/CitaSidebar";
import "./AgendarCita.css";

export default function AgendarCita() {
  return (
    <main className="agendar-cita">
      <nav className="agendar-cita__migas" aria-label="Migas de pan">
        Inicio <span>/</span> Agendar cita <span>/</span> <strong>Contacto</strong>
      </nav>

      <header className="agendar-cita__header">
        <div>
          <h1 className="agendar-cita__titulo">Un momento para cuidar de él.</h1>
          <p className="agendar-cita__subtitulo">
            Elige el cuidado que necesita tu mascota y cuéntanos cuándo te viene bien. Nuestro equipo te acompañará en el siguiente paso.
          </p>
        </div>
        <span className="agendar-cita__chip">Cita y contacto</span>
      </header>

      <div className="agendar-cita__grid">
        <AppointmentForm />
        <CitaSidebar />
      </div>

      <p className="agendar-cita__nota">
        Maqueta conceptual: formulario sin envío. Datos personales, contacto, horarios y disponibilidad son ejemplos ficticios.
      </p>
    </main>
  );
}