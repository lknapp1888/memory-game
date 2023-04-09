import { useState } from "react";
import shuffle from "../utility";

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
        <div>placeholder info</div>
    )
}
if (props.gameStage === 'gameover' && !props.gameActive) {
    return (
        <div>placeholder gameover - You got {props.score}</div>
    )
}

if (props.gameStage === 'victory' && !props.gameActive) {
    return (
        <div>placeholder VICTORY You got {props.score}</div>
    )
}
};

export default Cards;
