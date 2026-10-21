import miloFoto from "../assets/milo.jpg";

export const mascota = {
  nombre: "Milo",
  raza: "Golden retriever",
  sexo: "Macho",
  especie: "Perro",
  edad: "4 años",
  peso: "28,4 kg",
  nacimiento: "14 may 2022",
  dueno: "Lucía Martín",
  pesoFecha: "15 sep 2026",
  foto: miloFoto,
};

export const vacunas = [
  { id: 1, nombre: "Polivalente canina", ultima: "15 sep 2026", proxima: "15 sep 2027", estado: "ok" },
  { id: 2, nombre: "Rabia", ultima: "12 nov 2025", proxima: "12 nov 2026", estado: "proxima" },
  { id: 3, nombre: "Tos de las perreras", ultima: "15 sep 2026", proxima: "15 sep 2027", estado: "ok" },
];

export const citas = [
  { id: 1, dia: "27", mes: "OCT 2026", titulo: "Revisión preventiva", doctora: "Dra. Elena Ruiz", duracion: "30 min", hora: "10:30 h", modalidad: "Presencial" },
  { id: 2, dia: "10", mes: "NOV 2026", titulo: "Vacunación · Rabia", doctora: "Dra. Elena Ruiz", duracion: "20 min", hora: "17:00 h", modalidad: "Presencial" },
];

export const ultimaVisita = {
  fecha: "15 sep 2026",
  titulo: "Revisión anual y vacunación",
  detalle: "Peso registrado: 28,4 kg. Se revisaron sus hábitos de alimentación, paseo e higiene dental con la Dra. Elena Ruiz.",
};

export const mascotasUsuario = [{ id: 1, label: "Milo · Perro" }];

export const servicios = [
  { nombre: "Revisión preventiva", descripcion: "Una revisión de su salud y sus hábitos", duracion: "30 min" },
  { nombre: "Vacunación", descripcion: "Mantén su calendario de vacunas al día", duracion: "20 min" },
  { nombre: "Baño y spa", descripcion: "Baño, corte y cuidado de su pelaje", duracion: "60 min" },
  { nombre: "Cuidado dental", descripcion: "Limpieza y revisión de su higiene dental", duracion: "40 min" },
];

export const horarios = ["09:00 h", "10:30 h", "12:00 h", "16:00 h", "17:30 h"];