import './App.css';
import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [definitionMessage, setDefinitionMessage] = useState('');

  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) {
      setDefinitionMessage('Please enter a word to search.');
      return;
    }
    const foundWords = dictionary.filter(dict => inputText.toLowerCase() === dict.word.toLowerCase());
    if (foundWords.length > 0) {
      const definitions = foundWords.map(word => word.meaning).join('\n');
      setDefinitionMessage(definitions);
    } else {
      setDefinitionMessage('Word not found in the dictionary.');
    }
    setInputText('');
  }

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search for a word...' value={inputText} onChange={handleChange} />
        <button type='submit'>Search</button>
      </form>
      <p><b>Definition:</b></p>
      <p>{definitionMessage}</p>
    </div>
  );
}

export default App;
