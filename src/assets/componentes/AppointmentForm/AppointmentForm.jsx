// src/components/AppointmentForm/AppointmentForm.jsx
import { useState } from "react";
import "./AppointmentForm.css";

const SERVICIOS = [
  "Consulta general",
  "Vacunación",
  "Baño y corte (spa)",
  "Desparasitación",
  "Chequeo preventivo",
];

const INITIAL_STATE = {
  dueno: "",
  telefono: "",
  mascota: "",
  servicio: SERVICIOS[0],
  fecha: "",
  hora: "",
};

export default function AppointmentForm() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(null);

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.dueno.trim()) newErrors.dueno = "Ingresa tu nombre.";
    if (!/^\d{9}$/.test(form.telefono)) newErrors.telefono = "Ingresa un celular de 9 dígitos.";
    if (!form.mascota.trim()) newErrors.mascota = "Ingresa el nombre de tu mascota.";
    if (!form.fecha) newErrors.fecha = "Elige una fecha.";
    if (!form.hora) newErrors.hora = "Elige una hora.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setConfirmed(form);
      setForm(INITIAL_STATE);
    }
  };

  if (confirmed) {
    return (
      <section className="cita-form cita-form--ok">
        <h2>¡Cita agendada! ✅</h2>
        <p>
          <strong>{confirmed.mascota}</strong> tiene cita de <strong>{confirmed.servicio}</strong> el{" "}
          {confirmed.fecha} a las {confirmed.hora}.
        </p>
        <p>Te contactaremos al {confirmed.telefono} para confirmar.</p>
        <button className="cita-form__button" onClick={() => setConfirmed(null)}>
          Agendar otra cita
        </button>
      </section>
    );
  }

  return (
    <form className="cita-form" onSubmit={handleSubmit} noValidate>
      <h2 className="cita-form__title">Agendar cita</h2>

      <label className="cita-form__field">
        Tu nombre
        <input name="dueno" value={form.dueno} onChange={handleChange} />
        {errors.dueno && <span className="cita-form__error">{errors.dueno}</span>}
      </label>

      <label className="cita-form__field">
        Celular
        <input name="telefono" value={form.telefono} onChange={handleChange} maxLength={9} />
        {errors.telefono && <span className="cita-form__error">{errors.telefono}</span>}
      </label>

      <label className="cita-form__field">
        Nombre de tu mascota
        <input name="mascota" value={form.mascota} onChange={handleChange} />
        {errors.mascota && <span className="cita-form__error">{errors.mascota}</span>}
      </label>

      <label className="cita-form__field">
        Servicio
        <select name="servicio" value={form.servicio} onChange={handleChange}>
          {SERVICIOS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>

      <div className="cita-form__row">
        <label className="cita-form__field">
          Fecha
          <input name="fecha" type="date" min={today} value={form.fecha} onChange={handleChange} />
          {errors.fecha && <span className="cita-form__error">{errors.fecha}</span>}
        </label>
        <label className="cita-form__field">
          Hora
          <input name="hora" type="time" value={form.hora} onChange={handleChange} />
          {errors.hora && <span className="cita-form__error">{errors.hora}</span>}
        </label>
      </div>

      <button type="submit" className="cita-form__button">Confirmar cita</button>
    </form>
  );
}