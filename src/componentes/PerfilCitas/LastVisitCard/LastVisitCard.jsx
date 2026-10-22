import "./LastVisitCard.css";

export default function LastVisitCard({ visita }) {
  return (
    <section className="ultima-visita">
      <div className="ultima-visita__top">
        <h3>La última vez que nos vimos</h3>
        <span>{visita.fecha}</span>
      </div>
      <p className="ultima-visita__titulo">{visita.titulo}</p>
      <p className="ultima-visita__detalle">{visita.detalle}</p>
      <p className="ultima-visita__link">Resumen ilustrativo · No es un informe clínico real.</p>
    </section>
  );
}