import "./UpcomingAppointments.css";

export default function UpcomingAppointments({ citas, onAgendar }) {
  const citasOrdenadas = [...citas].sort((a, b) => (a.fecha || "").localeCompare(b.fecha || ""));

  return (
    <section className="proximas">
      <h3 className="proximas__titulo">Próximas citas</h3>

      <ul className="proximas__lista">
        {citasOrdenadas.map((c) => (
          <li key={c.id} className="proximas__item">
            <div className="proximas__fecha">
              <strong>{c.dia}</strong>
              <span>{c.mes}</span>
            </div>
            <div>
              <p className="proximas__motivo">{c.titulo}</p>
              <p className="proximas__detalle">{c.doctora} · {c.duracion}</p>
              <p className="proximas__detalle">{c.hora} · {c.modalidad}</p>
            </div>
          </li>
        ))}
      </ul>

      <button className="proximas__boton" onClick={onAgendar}>Agendar otra cita ↗</button>
    </section>
  );
}