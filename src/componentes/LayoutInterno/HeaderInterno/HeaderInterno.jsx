import { useState } from "react";
import { ENLACES, CITA } from "../../../data/navegacion";
import "./HeaderInterno.css";

export default function HeaderInterno({ activo, onNavegar = () => {} }) {
  const [abierto, setAbierto] = useState(false);

  const ir = (e, id) => {
    e.preventDefault();
    setAbierto(false);
    onNavegar(id);
  };

  return (
    <header className="lz-header">
      <div className="lz-header__inner">
        <a href="#inicio" className="lz-header__logo" onClick={(e) => ir(e, "inicio")}>
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
            <circle cx="9" cy="11" r="2.2" />
            <circle cx="15" cy="7" r="2.2" />
            <circle cx="22" cy="9" r="2.2" />
            <path d="M10 22c0-3 2.5-5.5 6-5.5s6 2.5 6 5.5c0 2-1.5 3-3.5 3-1.2 0-1.8-.6-2.5-.6s-1.3.6-2.5.6C11.5 25 10 24 10 22z" />
          </svg>
          <span className="lz-header__marca">
            <strong>lazo.</strong>
            <small>Clínica veterinaria</small>
          </span>
        </a>

        <button
          className="lz-header__burger"
          aria-label="Abrir menú"
          aria-expanded={abierto}
          onClick={() => setAbierto(!abierto)}
        >
          {abierto ? "✕" : "☰"}
        </button>

        <nav className={`lz-header__nav ${abierto ? "lz-header__nav--abierto" : ""}`}>
          {ENLACES.map((e) => (
            <a
              key={e.id}
              href={`#${e.id}`}
              className={`lz-header__link ${activo === e.id ? "lz-header__link--activo" : ""}`}
              onClick={(ev) => ir(ev, e.id)}
            >
              {e.label}
            </a>
          ))}
          <a href={`#${CITA.id}`} className="lz-header__cta" onClick={(ev) => ir(ev, CITA.id)}>
            {CITA.label} <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}