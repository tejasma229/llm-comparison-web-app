import React from 'react';

const ModelSelector = ({ selectedModels, onChange }) => {
  const availableModels = [
  "openai/gpt-4-turbo",
  "openai/gpt-3.5-turbo",
  "anthropic/claude-3-sonnet",
  "meta/llama3-70b-instruct",
  "google/gemini-pro",
  "mistralai/mixtral-8x7b-instruct"
];


  const handleModelChange = (index, value) => {
    const updated = [...selectedModels];
    updated[index] = value;
    onChange(updated);
  };

  return (
    <div style={{ marginTop: '1.5rem' }}>
      <label style={{ fontWeight: 'bold' }}>Select two models to compare:</label>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
        <select
          value={selectedModels[0]}
          onChange={(e) => handleModelChange(0, e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
        >
          {availableModels.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>

        <select
          value={selectedModels[1]}
          onChange={(e) => handleModelChange(1, e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
        >
          {availableModels.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ModelSelector;
