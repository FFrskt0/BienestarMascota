import "./VaccineTable.css";

const ESTADOS = {
  ok: "Al día",
  proxima: "Próxima dosis",
};

export default function VaccineTable({ vacunas }) {
  return (
    <section className="vacunas">
      <h3 className="vacunas__titulo">Sus vacunas</h3>
      <table className="vacunas__tabla">
        <thead>
          <tr>
            <th>Vacuna</th>
            <th>Última dosis</th>
            <th>Próxima dosis</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {vacunas.map((v) => (
            <tr key={v.id}>
              <td>{v.nombre}</td>
              <td className="vacunas__suave">{v.ultima}</td>
              <td>{v.proxima}</td>
              <td>
                <span className={`vacunas__estado vacunas__estado--${v.estado}`}>{ESTADOS[v.estado]}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="vacunas__nota">
        Calendario ilustrativo. Tu veterinario confirmará las pautas según la salud, el estilo de vida y la normativa local.
      </p>
    </section>
  );
}