import "./PetProfileCard.css";

export default function PetProfileCard({ mascota, onEditar }) {
  const { nombre, raza, sexo, especie, edad, peso, nacimiento, dueno, pesoFecha, foto } = mascota;
  const datos = [
    ["Especie", especie],
    ["Edad", edad],
    ["Peso", peso],
    ["Nacimiento", nacimiento],
  ];

  return (
    <article className="pet-card">
      <img className="pet-card__foto" src={foto} alt={`Foto de ${nombre}`} />
      <div className="pet-card__body">
        <div className="pet-card__top">
          <div>
            <h2 className="pet-card__nombre">{nombre}</h2>
            <p className="pet-card__raza">{raza} · {sexo}</p>
          </div>
          <span className="pet-card__tag">Perfil de ejemplo</span>
        </div>

        <dl className="pet-card__datos">
          {datos.map(([label, valor]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{valor}</dd>
            </div>
          ))}
        </dl>

        <div className="pet-card__pie">
          <span>Su persona: {dueno} · Peso registrado el {pesoFecha}</span>
          <button className="pet-card__editar" onClick={onEditar}>Editar perfil ↗</button>
        </div>
      </div>
    </article>
  );
}