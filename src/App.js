import './App.css';
import { useState,useEffect} from 'react';

function App() {
  const [inputText,setInputText]=useState('');
  const [definitionMessage,setDefinitionMessage]=useState('');
  const [dictionary,setDictionary]=useState([]);

  useEffect(()=>{
      setDictionary([
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
      { word: "Component", meaning: "A reusable building block in React." },
      { word: "State", meaning: "An object that stores data for a component." }]);
    },[]);
  

    const handleChange=(e)=>{
      setInputText(e.target.value);
    }
    const submitted = (e) => {
      e.preventDefault();
      if (!inputText.trim()) {
        setDefinitionMessage(''); 
        return; 
      }
      const foundWord = dictionary.find(dict => inputText.toLowerCase() === dict.word.toLowerCase());
      if (foundWord) {
        setDefinitionMessage(foundWord.meaning);
      } else {
        setDefinitionMessage('Word not found in the dictionary.');
      }
    }
    
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      
        <input type='text' placeholder='Search for a word...' value={inputText} onChange={handleChange} />
        <button type='submit' onClick={submitted}>Search</button>
      
      <p><b>Definition:</b></p>
      <p>{definitionMessage}</p>
    </div>
  );
}

export default App;
