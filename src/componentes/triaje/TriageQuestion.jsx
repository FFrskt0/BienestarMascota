import React from 'react';

export const TriageQuestion = ({ question, options, onAnswer }) => {
  return (
    <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3 style={{ marginBottom: '10px' }}>{question.text}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(question.id, option.value)}
            style={{
              padding: '10px',
              cursor: 'pointer',
              borderRadius: '5px',
              border: '1px solid #ccc',
              backgroundColor: '#f9f9f9',
              textAlign: 'left'
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};