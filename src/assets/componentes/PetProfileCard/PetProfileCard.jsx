// src/components/PetProfileCard/PetProfileCard.jsx
import "./PetProfileCard.css";

export default function PetProfileCard({ nombre, especie, edad, peso, onDelete }) {
  const emoji = especie === "Gato" ? "🐱" : especie === "Perro" ? "🐶" : "🐾";

  return (
    <article className="pet-card">
      <div className="pet-card__avatar">{emoji}</div>
      <div className="pet-card__info">
        <h3 className="pet-card__nombre">{nombre}</h3>
        <p className="pet-card__datos">
          {especie} · {edad} {Number(edad) === 1 ? "año" : "años"}
          {peso ? ` · ${peso} kg` : ""}
        </p>
      </div>
      {onDelete && (
        <button className="pet-card__delete" onClick={onDelete} aria-label={`Eliminar a ${nombre}`}>
          ✕
        </button>
      )}
    </article>
  );
}