import { ENLACES, CITA } from "../../../data/navegacion";
import "./FooterInterno.css";

const TODOS = [...ENLACES, CITA];
const FILAS = [
  ["servicios", "triaje"],
  ["mascota", "cita"],
];

export default function FooterInterno({ onNavegar }) {
  const ir = (e, id) => {
    e.preventDefault();
    onNavegar(id);
  };
  const enlace = (id) => TODOS.find((e) => e.id === id);

  return (
    <footer className="lz-footer">
      <div className="lz-footer__inner">
        <div className="lz-footer__grid">
          <div>
            <p className="lz-footer__logo">lazo.</p>
            <p className="lz-footer__lema">
              Tu tranquilidad. Nuestro lazo.
              <br />
              Cuidamos de quien más quieres.
            </p>
          </div>

          <div>
            <h4 className="lz-footer__titulo">Cerca de ti</h4>
            {FILAS.map((fila) => (
              <p key={fila.join("-")} className="lz-footer__fila">
                {fila.map((id, i) => (
                  <span key={id}>
                    {i > 0 && " · "}
                    <a href={`#${id}`} onClick={(e) => ir(e, id)}>{enlace(id).label}</a>
                  </span>
                ))}
              </p>
            ))}
          </div>

          <div>
            <h4 className="lz-footer__titulo">Hablemos</h4>
            <p className="lz-footer__fila">+34 910 000 000</p>
            <p className="lz-footer__fila">hola@lazo.example</p>
          </div>

          <div>
            <p className="lz-footer__lema-serif">Hagamos equipo por su salud.</p>
            <a href="#cita" className="lz-footer__boton" onClick={(e) => ir(e, "cita")}>
              Estamos para ayudarte <span>↗</span>
            </a>
          </div>
        </div>

        <div className="lz-footer__pie">
          <span>© Lazo 2026 · Maqueta conceptual. Datos e información de ejemplo.</span>
          <span className="lz-footer__legal">
            <span>Privacidad (ejemplo)</span>
            <span>Cookies (ejemplo)</span>
            <span>Aviso legal (ejemplo)</span>
          </span>
        </div>
      </div>
    </footer>
  );
}