import React from 'react';

export const TriageResult = ({ score, onReset }) => {
  // Lógica de semáforo según el puntaje obtenido
  let result = {
    color: '#28a745', // Verde
    title: 'Nivel Verde (Bajo Riesgo)',
    description: 'La mascota/paciente se encuentra estable. Se recomienda seguimiento sintomático rutinario y cita general.',
    badge: 'Verde'
  };

  if (score >= 7) {
    result = {
      color: '#dc3545', // Rojo
      title: 'Nivel Rojo (Atención Inmediata)',
      description: 'Estado crítico. Requiere atención de urgencia médica/veterinaria inmediata.',
      badge: 'Rojo'
    };
  } else if (score >= 4) {
    result = {
      color: '#ffc107', // Amarillo
      title: 'Nivel Amarillo (Prioridad Media)',
      description: 'Presenta síntomas de cuidado. Se recomienda una consulta en las próximas horas.',
      badge: 'Amarillo'
    };
  }

  return (
    <div style={{
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#f8f9fa',
      borderLeft: `8px solid ${result.color}`,
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      marginTop: '20px'
    }}>
      <span style={{
        backgroundColor: result.color,
        color: result.badge === 'Amarillo' ? '#000' : '#fff',
        padding: '4px 12px',
        borderRadius: '12px',
        fontWeight: 'bold',
        fontSize: '0.85rem'
      }}>
        Estado: {result.badge}
      </span>
      <h2 style={{ color: result.color, marginTop: '10px' }}>{result.title}</h2>
      <p style={{ margin: '15px 0' }}>{result.description}</p>
      
      <button 
        onClick={onReset}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Realizar otro triaje
      </button>
    </div>
  );
};