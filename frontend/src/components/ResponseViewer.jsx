import React from 'react';

const ResponseViewer = ({ prompt, models, responses }) => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Prompt: <em>{prompt}</em></h3>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        {models.map((model, index) => (
          <div
            key={model}
            style={{
              flex: 1,
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              background: '#f9f9f9'
            }}
          >
            <h4>{model}</h4>
            <p>{responses[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponseViewer;
