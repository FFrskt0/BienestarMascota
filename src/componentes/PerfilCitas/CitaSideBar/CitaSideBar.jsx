import foto from "../../../assets/veterinaria.jpg";
import "./CitaSideBar.css";

const CONTACTO = [
  { label: "Teléfono de ejemplo", valor: "+34 910 000 000", nota: "Dato ficticio; no es un contacto operativo." },
  { label: "Correo de ejemplo", valor: "hola@lazo.example", nota: "Dirección reservada para ejemplos; no recibe mensajes." },
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
          <p>Esta maqueta no tiene atención operativa. Usa el formulario solo para probar el recorrido.</p>
        </div>
      </section>

      <section className="cita-sidebar__contacto">
        <h3>Hablemos</h3>
        <p className="cita-sidebar__nota">Datos de contacto ficticios para esta demo.</p>
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