import React, {useState} from 'react'
import FlashcardList from './components/FlashcardList';
import './App.css';
import Vocabulary from './components/Data.js'

function App() {
  const [cards, setCards] = useState(Vocabulary)
  return (
   <FlashcardList flashcards={cards} />
  );
}


export default App;
