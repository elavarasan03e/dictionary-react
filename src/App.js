// import './App.css';
// import { useState } from 'react';

// function App() {
//   const customDictionary = {
//     teh: "the",
//     wrok: "work",
//     fot: "for",
//     exampl: "example",
//   };
//   const [inputText,setInputText]=useState('');
//   const [suggestedText,setSuggestedText]=useState('');

//   const handleInputChange = (e) => {
//     const text = e.target.value;
//     // this.setState({ inputText: text });
//     setInputText(text);

//     // Implement a basic spelling check and correction
//     const words = text.split(" ");
//     const correctedWords = words.map((word) => {
//       const correctedWord = customDictionary[word.toLowerCase()];
//       return correctedWord || word;
//     });

//     const correctedText = correctedWords.join(" ");

//     // Set the suggested text (first corrected word)
//     const firstCorrection = correctedWords.find(
//       (word, index) => word !== words[index]
//     );
//     // this.setState({ suggestedText: firstCorrection || "" });
//     setSuggestedText(firstCorrection || "");
//   };


//   return (
//     <div className="App">
//       <div>
//         <h1>Spell Check and Auto-Correction</h1>
//         <textarea
//           value={inputText}
//           onChange={handleInputChange}
//           placeholder="Enter text..."
//           rows={5}
//           cols={40}
//         />
//         {suggestedText && (
//           <p>
//             Did you mean: <strong>{suggestedText}</strong>?
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

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
    const submitted=(e)=>{
      e.preventDefault();
      const foundWord=dictionary.find(dict=> inputText.toLowerCase()===dict.word.toLowerCase());
      if(foundWord){
        setDefinitionMessage(foundWord.meaning);
      }else{
        setDefinitionMessage('Word not found in the dictionary.')
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
