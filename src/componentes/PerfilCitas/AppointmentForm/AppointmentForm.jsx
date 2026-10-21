import { useState } from "react";
import { mascotasUsuario, servicios, horarios } from "../../../data/mascotaData";
import "./AppointmentForm.css";

const INITIAL_STATE = {
  dueno: "",
  telefono: "",
  correo: "",
  mascota: mascotasUsuario[0].label,
  servicio: servicios[0].nombre,
  fecha: "",
  hora: "",
  notas: "",
  privacidad: false,
};

export default function AppointmentForm() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [enviado, setEnviado] = useState(false);

  const hoy = new Date().toISOString().split("T")[0];
  const servicioActual = servicios.find((s) => s.nombre === form.servicio);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const validar = () => {
    const err = {};
    if (!form.dueno.trim()) err.dueno = "Ingresa tu nombre y apellidos.";
    if (!/^[+\d\s]{9,16}$/.test(form.telefono.trim())) err.telefono = "Ingresa un teléfono válido.";
    if (!/^\S+@\S+\.\S+$/.test(form.correo)) err.correo = "Ingresa un correo válido.";
    if (!form.fecha) err.fecha = "Elige una fecha.";
    if (!form.hora) err.hora = "Elige un horario.";
    if (!form.privacidad) err.privacidad = "Debes aceptar la política de privacidad.";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validar();
    setErrors(err);
    if (Object.keys(err).length === 0) setEnviado(true);
  };

  if (enviado) {
    return (
      <section className="cita-form cita-form--ok">
        <h2 className="cita-form__titulo">¡Solicitud enviada!</h2>
        <p>
          Recibimos tu solicitud de <strong>{form.servicio}</strong> para <strong>{form.mascota}</strong> el {form.fecha} a las {form.hora}.
        </p>
        <p className="cita-form__aviso">Tu cita aún no está confirmada. Te contactaremos al {form.telefono}.</p>
        <button
          className="cita-form__boton"
          onClick={() => {
            setForm(INITIAL_STATE);
            setEnviado(false);
          }}
        >
          Solicitar otra cita ↗
        </button>
      </section>
    );
  }

  return (
    <form className="cita-form" onSubmit={handleSubmit} noValidate>
      <div className="cita-form__cabecera">
        <h2 className="cita-form__titulo">Solicita tu cita</h2>
        <span className="cita-form__oblig">* Campos obligatorios</span>
      </div>

      {/* Paso 1 */}
      <fieldset className="cita-form__paso">
        <legend><span className="cita-form__num">01</span> Primero, hablemos de ti</legend>
        <p className="cita-form__ayuda">Usaremos estos datos para confirmar tu cita.</p>

        <label className="cita-form__campo">
          Nombre y apellidos del dueño *
          <input name="dueno" value={form.dueno} onChange={handleChange} />
          {errors.dueno && <span className="cita-form__error">{errors.dueno}</span>}
        </label>

        <div className="cita-form__fila">
          <label className="cita-form__campo">
            Teléfono *
            <input name="telefono" value={form.telefono} onChange={handleChange} />
            {errors.telefono && <span className="cita-form__error">{errors.telefono}</span>}
          </label>
          <label className="cita-form__campo">
            Correo electrónico *
            <input name="correo" type="email" value={form.correo} onChange={handleChange} />
            {errors.correo && <span className="cita-form__error">{errors.correo}</span>}
          </label>
        </div>
      </fieldset>

      {/* Paso 2 */}
      <fieldset className="cita-form__paso">
        <legend><span className="cita-form__num">02</span> ¿A quién vamos a cuidar?</legend>
        <p className="cita-form__ayuda">Selecciona tu mascota y el motivo de la visita.</p>

        <div className="cita-form__fila">
          <label className="cita-form__campo">
            Mascota *
            <select name="mascota" value={form.mascota} onChange={handleChange}>
              {mascotasUsuario.map((m) => (
                <option key={m.id}>{m.label}</option>
              ))}
            </select>
          </label>
          <label className="cita-form__campo">
            Servicio *
            <select name="servicio" value={form.servicio} onChange={handleChange}>
              {servicios.map((s) => (
                <option key={s.nombre}>{s.nombre}</option>
              ))}
            </select>
          </label>
        </div>

        <p className="cita-form__info">
          {servicioActual.descripcion} · Duración estimada: {servicioActual.duracion}
        </p>
      </fieldset>

      {/* Paso 3 */}
      <fieldset className="cita-form__paso">
        <legend><span className="cita-form__num">03</span> Busquemos vuestro momento</legend>
        <p className="cita-form__ayuda">La fecha y la hora están sujetas a confirmación del equipo.</p>

        <label className="cita-form__campo">
          Fecha preferida *
          <input name="fecha" type="date" min={hoy} value={form.fecha} onChange={handleChange} />
          {errors.fecha && <span className="cita-form__error">{errors.fecha}</span>}
        </label>

        <div className="cita-form__campo">
          Horario preferido *
          <div className="cita-form__horas">
            {horarios.map((h) => (
              <button
                key={h}
                type="button"
                aria-pressed={form.hora === h}
                className={`cita-form__hora ${form.hora === h ? "cita-form__hora--activa" : ""}`}
                onClick={() => setForm({ ...form, hora: h })}
              >
                {h}
              </button>
            ))}
          </div>
          {errors.hora && <span className="cita-form__error">{errors.hora}</span>}
        </div>

        <label className="cita-form__campo">
          ¿Hay algo que debamos saber?
          <textarea name="notas" rows="3" value={form.notas} onChange={handleChange} />
        </label>
      </fieldset>

      <label className="cita-form__check">
        <input name="privacidad" type="checkbox" checked={form.privacidad} onChange={handleChange} />
        He leído la política de privacidad y consiento el uso de mis datos para gestionar esta solicitud de cita. *
      </label>
      {errors.privacidad && <span className="cita-form__error">{errors.privacidad}</span>}

      <div className="cita-form__pie">
        <div>
          <strong>Tu cita aún no está confirmada.</strong>
          <p>Te contactaremos para confirmar la disponibilidad.</p>
        </div>
        <button type="submit" className="cita-form__boton">Solicitar cita ↗</button>
      </div>
    </form>
  );
}