import { useState } from "react";
import "./PetForm.css";

const INITIAL_STATE = { nombre: "", especie: "Perro", edad: "", peso: "" };

export default function PetForm({ mascota, onSave, onCancel }) {
  const [formData, setFormData] = useState(() => mascota
    ? {
        nombre: mascota.nombre,
        especie: mascota.especie,
        edad: Number.parseInt(mascota.edad, 10) || "",
        peso: Number.parseFloat(String(mascota.peso).replace(",", ".")) || "",
      }
    : INITIAL_STATE);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre.trim() || formData.edad === "" || Number(formData.edad) < 0 || (formData.peso !== "" && Number(formData.peso) < 0)) {
      setError("Completa al menos el nombre y la edad de tu mascota.");
      return;
    }

    onSave({ ...formData, nombre: formData.nombre.trim() });
    setError("");
  };

  return (
    <form className="pet-form" onSubmit={handleSubmit}>
      <h3 className="pet-form__title">{mascota ? "Editar perfil de mascota" : "Registrar mascota"}</h3>

      <label className="pet-form__field">
        Nombre
        <input name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ej. Max" />
      </label>

      <label className="pet-form__field">
        Especie
        <select name="especie" value={formData.especie} onChange={handleChange}>
          <option>Perro</option>
          <option>Gato</option>
          <option>Otro</option>
        </select>
      </label>

      <div className="pet-form__row">
        <label className="pet-form__field">
          Edad (años)
          <input name="edad" type="number" min="0" value={formData.edad} onChange={handleChange} />
        </label>
        <label className="pet-form__field">
          Peso (kg)
          <input name="peso" type="number" min="0" step="0.1" value={formData.peso} onChange={handleChange} />
        </label>
      </div>

      {error && <p className="pet-form__error">{error}</p>}

      <div className="pet-form__actions">
        <button type="submit" className="pet-form__button">{mascota ? "Guardar cambios" : "Guardar mascota"}</button>
        <button type="button" className="pet-form__cancel" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
}