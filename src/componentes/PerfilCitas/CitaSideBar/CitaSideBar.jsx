import foto from "../../../assets/veterinaria.jpg";
import "./CitaSidebar.css";

const CONTACTO = [
  { label: "Teléfono", valor: "+34 910 000 000", nota: "Atención durante el horario de la clínica." },
  { label: "Correo", valor: "hola@lazo.example", nota: "Para consultas y solicitudes no urgentes." },
  { label: "Ven a vernos", valor: "Calle del Olivo, 12 · Madrid", nota: "Dirección ficticia para esta maqueta." },
  { label: "Horario", valor: "Lunes a viernes · 09:00–19:00", nota: "Sábados · 10:00–14:00 / Domingos · Cerrado" },
];

export default function CitaSidebar() {
  return (
    <aside className="cita-sidebar">
      <section className="cita-sidebar__foto-card">
        <img src={foto} alt="Veterinaria revisando a un perro" />
        <div className="cita-sidebar__foto-texto">
          <h3>Cerca de ti.<br />Siempre de su lado.</h3>
          <p>Si tienes dudas sobre qué servicio elegir, hablemos. Estamos aquí para ayudarte.</p>
        </div>
      </section>

      <section className="cita-sidebar__contacto">
        <h3>Hablemos</h3>
        <ul>
          {CONTACTO.map((c) => (
            <li key={c.label}>
              <span className="cita-sidebar__label">{c.label}</span>
              <strong>{c.valor}</strong>
              <small>{c.nota}</small>
            </li>
          ))}
        </ul>
      </section>

      <section className="cita-sidebar__urgencia">
        <h4>¿Es una urgencia?</h4>
        <p>No utilices este formulario. Acude al centro de urgencias veterinarias más cercano. No esperes nuestra respuesta.</p>
      </section>
    </aside>
  );
}