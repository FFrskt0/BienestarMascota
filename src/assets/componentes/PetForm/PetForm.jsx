// src/components/PetForm/PetForm.jsx
import { useState } from "react";
import "./PetForm.css";

const INITIAL_STATE = { nombre: "", especie: "Perro", edad: "", peso: "" };

export default function PetForm({ onAddPet }) {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre.trim() || formData.edad === "") {
      setError("Completa al menos el nombre y la edad de tu mascota.");
      return;
    }

    onAddPet({ ...formData, nombre: formData.nombre.trim(), id: Date.now() });
    setFormData(INITIAL_STATE);
    setError("");
  };

  return (
    <form className="pet-form" onSubmit={handleSubmit}>
      <h3 className="pet-form__title">Registrar mascota</h3>

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

      <button type="submit" className="pet-form__button">Guardar mascota</button>
    </form>
  );
}