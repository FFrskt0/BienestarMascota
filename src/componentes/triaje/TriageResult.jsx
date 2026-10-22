export const TriageResult = ({ score, onReset, onContinue }) => {
  let result = {
    color: '#28a745', // Verde
    title: 'Nivel verde (orientativo)',
    description: 'La puntuación es baja en este cuestionario. No confirma que la mascota esté sana ni sustituye una valoración profesional.',
    badge: 'Verde'
  };

  if (score >= 7) {
    result = {
      color: '#dc3545', // Rojo
      title: 'Nivel rojo (orientativo)',
      description: 'La puntuación es alta. Contacta o acude a un servicio veterinario de urgencias.',
      badge: 'Rojo'
    };
  } else if (score >= 4) {
    result = {
      color: '#ffc107', // Amarillo
      title: 'Nivel amarillo (orientativo)',
      description: 'La puntuación sugiere pedir orientación veterinaria pronto. El cuestionario no determina un diagnóstico.',
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
      {score < 7 && (
        <button
          onClick={onContinue}
          style={{
            marginLeft: '8px',
            padding: '8px 16px',
            backgroundColor: '#24503f',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Continuar a solicitud de cita
        </button>
      )}
    </div>
  );
};