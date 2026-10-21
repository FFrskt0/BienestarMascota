import { useState } from "react";
import { mascota, vacunas, citas, ultimaVisita } from "../../../data/mascotaData";
import PetProfileCard from "../PetProfileCard/PetProfileCard";
import VaccineTable from "../VaccineTable/VaccineTable";
import UpcomingAppointments from "../UpcomingAppointments/UpcomingAppointments";
import LastVisitCard from "../LastVisitCard/LastVisitCard";
import "./PerfilMascota.css";

const TABS = ["Resumen de salud", "Historial clínico", "Documentos"];

export default function PerfilMascota({ onAgendarCita, onIrTriaje }) {
  const [tab, setTab] = useState(TABS[0]);

  return (
    <main className="perfil-mascota">
      <nav className="perfil-mascota__migas" aria-label="Migas de pan">
        Inicio <span>/</span> <strong>Mi mascota</strong>
      </nav>

      <header className="perfil-mascota__header">
        <div>
          <h1 className="perfil-mascota__titulo">Su historia, siempre contigo.</h1>
          <p className="perfil-mascota__subtitulo">
            Toda la información de {mascota.nombre} en un mismo lugar. Porque conocerle mejor es el primer paso para cuidarle mejor.
          </p>
        </div>
        <span className="perfil-mascota__chip">Área de familias</span>
      </header>

      <PetProfileCard mascota={mascota} />

      <div className="perfil-mascota__tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            className={`perfil-mascota__tab ${tab === t ? "perfil-mascota__tab--activa" : ""}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === TABS[0] ? (
        <div className="perfil-mascota__grid">
          <div className="perfil-mascota__col">
            <VaccineTable vacunas={vacunas} />
            <LastVisitCard visita={ultimaVisita} />
          </div>
          <aside className="perfil-mascota__col">
            <UpcomingAppointments citas={citas} onAgendar={onAgendarCita} />
            <section className="perfil-mascota__triaje">
              <h3>Los pequeños cambios importan.</h3>
              <p>¿Le notas diferente? Nuestro triaje te ayuda a observar su bienestar antes de la consulta.</p>
              <button onClick={onIrTriaje}>Ir al triaje preventivo ↗</button>
            </section>
          </aside>
        </div>
      ) : (
        <p className="perfil-mascota__vacio">La sección «{tab}» estará disponible próximamente.</p>
      )}

      <p className="perfil-mascota__nota">
        Perfil conceptual: {mascota.nombre}, su familia, los registros clínicos y las citas son ficticios. No es una historia clínica real.
      </p>
    </main>
  );
}