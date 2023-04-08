import './App.css';
import Cards from './components/Cards';
import { useState } from 'react';
import Generator from './components/Generator';

function App() {
  const [words, setWords] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const updateWords = function(words) {
    const wordsArr = [];
    for (let i = 0; i < words.length; i++) {
      wordsArr.push({word: words[i], selected: false})
    }
    setWords(wordsArr)
  }

  return (
    <div className="App">
      <header>
        <h1>Memory Game</h1>
        <Generator updateWords={updateWords}></Generator>
        <div className='scoreCont'>
          <p>Score: {score}</p>
          <p>Best score: {bestScore}</p>
        </div>
      </header>
      <main>
      <Cards words={words}></Cards>
      </main>
    </div>
  );
}

export default App;
