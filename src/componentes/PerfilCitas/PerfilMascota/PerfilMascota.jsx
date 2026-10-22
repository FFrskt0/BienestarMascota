import { useState } from "react";
import { vacunas, ultimaVisita } from "../../../data/mascotaData";
import PetProfileCard from "../PetProfileCard/PetProfileCard";
import VaccineTable from "../VaccineTable/VaccineTable";
import UpcomingAppointments from "../UpcomingAppointments/UpcomingAppointments";
import LastVisitCard from "../LastVisitCard/LastVisitCard";
import PetForm from "../PetForm/PetForm";
import "./PerfilMascota.css";

const TABS = ["Resumen de salud", "Historial clínico", "Documentos"];

export default function PerfilMascota({
  mascota,
  esMascotaInicial,
  mascotas,
  citas,
  formMascota,
  onSeleccionarMascota,
  onAgendarCita,
  onIrTriaje,
  onEditar,
  onRegistrar,
  onGuardarMascota,
  onCancelarEdicion,
}) {
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

      {mascotas.length > 1 && (
        <label className="perfil-mascota__selector">
          Mascota seleccionada
          <select value={mascota.id} onChange={(event) => onSeleccionarMascota(Number(event.target.value))}>
            {mascotas.map((item) => <option key={item.id} value={item.id}>{item.nombre} · {item.especie}</option>)}
          </select>
        </label>
      )}

      <PetProfileCard mascota={mascota} onEditar={onEditar} />
      <div className="perfil-mascota__acciones-mascota">
        <button type="button" onClick={onRegistrar}>Registrar otra mascota</button>
      </div>
      {formMascota && (
        <PetForm
          mascota={formMascota === "editar" ? mascota : null}
          onSave={onGuardarMascota}
          onCancel={onCancelarEdicion}
        />
      )}

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
            {esMascotaInicial ? (
              <>
                <VaccineTable vacunas={vacunas} />
                <LastVisitCard visita={ultimaVisita} />
              </>
            ) : (
              <section className="perfil-mascota__vacio">
                <h2>Sin registros clínicos</h2>
                <p>Aún no hay vacunas ni visitas registradas para {mascota.nombre} en esta demo.</p>
                <button type="button" onClick={onAgendarCita}>Solicitar una cita ↗</button>
              </section>
            )}
          </div>
          <aside className="perfil-mascota__col">
            <UpcomingAppointments citas={citas.filter((cita) => !cita.mascota || cita.mascota === `${mascota.nombre} · ${mascota.especie}`)} onAgendar={onAgendarCita} />
            <section className="perfil-mascota__triaje">
              <h3>Los pequeños cambios importan.</h3>
              <p>¿Le notas diferente? Nuestro triaje te ayuda a observar su bienestar antes de la consulta.</p>
              <button onClick={onIrTriaje}>Ir al triaje preventivo ↗</button>
            </section>
          </aside>
        </div>
      ) : tab === "Historial clínico" ? (
        esMascotaInicial ? (
          <div className="perfil-mascota__grid">
            <LastVisitCard visita={ultimaVisita} />
            <VaccineTable vacunas={vacunas} />
          </div>
        ) : (
          <p className="perfil-mascota__vacio">Todavía no hay visitas clínicas registradas para {mascota.nombre}.</p>
        )
      ) : (
        <section className="perfil-mascota__vacio">
          <h2>Documentos</h2>
          <p>No hay archivos adjuntos en esta demo. Puedes solicitar una cita y compartir información con el equipo.</p>
          <button type="button" onClick={onAgendarCita}>Solicitar una cita ↗</button>
        </section>
      )}

      <p className="perfil-mascota__nota">
        Demo de prueba: los cambios se guardan solo en este navegador. Los registros iniciales son ficticios y no constituyen una historia clínica real.
      </p>
    </main>
  );
}