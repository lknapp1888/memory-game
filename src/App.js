import "./App.css";
import Cards from "./components/Cards";
import { useState } from "react";
import Generator from "./components/Generator";
import uniqid from "uniqid";

function App() {
  const [words, setWords] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [gameStage, setGameStage] = useState("start");

  const updateWords = function (words) {
    const wordsArr = [];
    for (let i = 0; i < words.length; i++) {
      wordsArr.push({ word: words[i], selected: false, id: uniqid() });
    }
    setWords(wordsArr);
  };

  const userSelection = function (word) {
    const wordsCopy = words;
    for (let i = 0; i < wordsCopy.length; i++) {
      //find the selected word in the words state array
      if (wordsCopy[i].word === word) {
        //check if it has previously been selected
        if (wordsCopy[i].selected === true) {
          setGameActive(false)
          setGameStage('gameover')
          return;
        }
        setScore(score + 1);
        if (score + 1 > bestScore) {
          setBestScore(score + 1);
        }
        if (score + 1 === words.length) {
          setGameActive(false)
          setGameStage('victory')
          return
        }
        wordsCopy[i].selected = true;
        setWords(wordsCopy);
        return;
      }
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Memory Game</h1>
        <Generator
          updateWords={updateWords}
          gameActive={gameActive}
          setGameActive={setGameActive}
          setScore={setScore}
        ></Generator>
        <div className="scoreCont">
          <p>Score: {score}</p>
          <p>Best score: {bestScore}</p>
        </div>
      </header>
      <main>
        <Cards
          words={words}
          userSelection={userSelection}
          gameActive={gameActive}
          gameStage={gameStage}
          setGameStage={setGameStage}
          score={score}
        ></Cards>
      </main>
    </div>
  );
}

export default App;
