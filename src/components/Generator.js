import { useState } from "react";

const Generator = function (props) {
  const [wordNum, setWordNum] = useState(0);
  const [gameActive, setGameActive] = useState(false);

  const generateWords = async function () {
    setGameActive(true);
    const word = await fetch(
      `https://random-word-api.vercel.app/api?words=${wordNum}`,
      {
        mode: "cors",
      }
    );
    word.json().then((e) => props.updateWords(e));
  };

  const playAgain = function () {
    setGameActive(false);
    setWordNum(0);
  };

  if (!gameActive) {
    return (
      <div>
        <input
          type="number"
          min={1}
          max={50}
          onClick={(e) => setWordNum(e.target.value)}
          onChange={(e) => setWordNum(e.target.value)}
        ></input>
        <button onClick={generateWords}>Generate</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={playAgain}>Play again</button>
      </div>
    );
  }
};

export default Generator;
