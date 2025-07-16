import './App.css';
import PromptInput from './components/PromptInput';
import ModelSelector from './components/ModelSelector';
import ResponseViewer from './components/ResponseViewer';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [prompt, setPrompt] = useState('');
  const [selectedModels, setSelectedModels] = useState([
    'openai/gpt-4',
    'anthropic/claude-3',
  ]);
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePromptSubmit = async (userPrompt) => {
    setPrompt(userPrompt);
    setLoading(true);

    try {
      const results = await Promise.all(
        selectedModels.map(async (model) => {
          const res = await axios.post('http://127.0.0.1:8000/chat', {
            model: model,
            messages: [{ role: 'user', content: userPrompt }]
          });

          return res.data?.choices?.[0]?.message?.content || 'No response';
        })
      );

      setResponses(results);
    } catch (err) {
      console.error("Error fetching responses:", err);
      setResponses(["Error from model 1", "Error from model 2"]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>LLM Comparison App</h1>
      <p>Enter a prompt, select two LLM models, and compare their responses.</p>

      <ModelSelector selectedModels={selectedModels} onChange={setSelectedModels} />
      <PromptInput onSubmit={handlePromptSubmit} />

      {loading && <p>Loading responses from LLMs...</p>}

      {responses.length > 0 && !loading && (
        <ResponseViewer
          prompt={prompt}
          models={selectedModels}
          responses={responses}
        />
      )}
    </div>
  );
}

export default App;
