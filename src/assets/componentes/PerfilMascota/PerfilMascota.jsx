// src/components/PerfilMascota/PerfilMascota.jsx
import { useState } from "react";
import PetForm from "../PetForm/PetForm";
import PetProfileCard from "../PetProfileCard/PetProfileCard";
import "./PerfilMascota.css";

export default function PerfilMascota() {
  const [pets, setPets] = useState([]);

  const addPet = (pet) => setPets([...pets, pet]);
  const deletePet = (id) => setPets(pets.filter((p) => p.id !== id));

  return (
    <section className="perfil-mascota">
      <h2 className="perfil-mascota__title">Perfil de mi mascota</h2>
      <p className="perfil-mascota__subtitle">
        Registra a tu compañero y mantén sus datos siempre a la mano.
      </p>

      <div className="perfil-mascota__layout">
        <PetForm onAddPet={addPet} />

        <div className="perfil-mascota__list">
          {pets.length === 0 ? (
            <p className="perfil-mascota__empty">Aún no registraste ninguna mascota 🐾</p>
          ) : (
            pets.map((p) => (
              <PetProfileCard key={p.id} {...p} onDelete={() => deletePet(p.id)} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}