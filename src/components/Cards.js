import { useState } from "react";
import shuffle from "../utility";
import Generator from "./Generator";

const Cards = function (props) {
  const selectWord = function (e) {
    props.userSelection(e.target.id);
  };
  if (props.gameActive) {
  const jumbledWords = shuffle(props.words);
  return jumbledWords.map((e) => {
    return (
      <div className="card" id={e.word} key={e.id} onClick={selectWord}>
        {e.word}
      </div>
    );
  });
}
if (props.gameStage === 'start' && !props.gameActive) {
    return (
        <div className="messageContainer">
          <div>
            <h2>How to play</h2>
            <p>The aim of the game is to select a previously unselected word from the word list on a roundly basis. After each selection, the same words are shuffled and a new round commences. This repeats until you either select a word that was previously selected, or if you are successfully able to select all of the previously unselected words.</p>
            <p>To start, select the number of words in the range and press 'generate words'</p>
            <Generator
            updateWords={props.updateWords}
            gameActive={props.gameActive}
            setGameActive={props.setGameActive}
            setScore={props.setScore}
                    ></Generator>
          </div>
          </div>
    )
}
if (props.gameStage === 'gameover' && !props.gameActive) {
    return (
        <div className="messageContainer">
          <div>
            <h2>Gameover! You scored {props.score} out of {props.words.length}</h2>
            <p>Play again?</p>
            <Generator
            updateWords={props.updateWords}
            gameActive={props.gameActive}
            setGameActive={props.setGameActive}
            setScore={props.setScore}
                    ></Generator>
          </div>
        </div>
    )
}

if (props.gameStage === 'victory' && !props.gameActive) {
    return (
        <div className="messageContainer">
          <div>
            <h2>Success! You selected a maximum of {props.score}/{props.score} words</h2>
            <p>Play again?</p>
            <Generator
            updateWords={props.updateWords}
            gameActive={props.gameActive}
            setGameActive={props.setGameActive}
            setScore={props.setScore}
                    ></Generator>
          </div>
          </div>
    )
}
};

export default Cards;
