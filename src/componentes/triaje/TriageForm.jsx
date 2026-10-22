import React, { useState } from 'react';
import { TriageQuestion } from './TriageQuestion';
import { TriageResult } from './TriageResult';

const QUESTIONS = [
  {
    id: 1,
    text: '1. ¿Presenta dificultad respiratoria o jadeo excesivo?',
    options: [
      { label: 'No, respira normalmente', value: 0 },
      { label: 'Leve dificultad / Dificultad moderada', value: 2 },
      { label: 'Grave dificultad o asfixia', value: 4 }
    ]
  },
  {
    id: 2,
    text: '2. ¿Cuál es el nivel de actividad / respuesta?',
    options: [
      { label: 'Normal / Activo', value: 0 },
      { label: 'Decaído / Apatía leve', value: 1 },
      { label: 'Inconsciente o sin respuesta', value: 4 }
    ]
  },
  {
    id: 3,
    text: '3. ¿Ha tenido sangrado sangrado visible o traumatismo reciente?',
    options: [
      { label: 'Ninguno', value: 0 },
      { label: 'Leve / Herida superficial', value: 1 },
      { label: 'Sangrado abundante / Traumatismo severo', value: 3 }
    ]
  }
];

export const TriageForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (questionId, value) => {
    const nextScore = totalScore + value;
    setTotalScore(nextScore);

    if (currentStep + 1 < QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setTotalScore(0);
    setIsFinished(false);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Triaje Preventivo Mascotas</h1>
      <hr style={{ marginBottom: '20px' }} />

      {!isFinished ? (
        <>
          <p>Paso {currentStep + 1} de {QUESTIONS.length}</p>
          <TriageQuestion
            question={QUESTIONS[currentStep]}
            options={QUESTIONS[currentStep].options}
            onAnswer={handleAnswer}
          />
        </>
      ) : (
        <TriageResult score={totalScore} onReset={handleReset} />
      )}
    </div>
  );
};