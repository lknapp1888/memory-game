import { useState } from "react";

const Generator = function (props) {
  const [wordNum, setWordNum] = useState(10);

  const generateWords = async function () {
    props.setGameActive(true);
    const word = await fetch(
      `https://random-word-api.vercel.app/api?words=${wordNum}`,
      {
        mode: "cors",
      }
    );
    word.json().then((e) => props.updateWords(e));
    props.setScore(0)
  };

  const playAgain = function () {
    props.setGameActive(false);
    setWordNum(0);
  };

  if (!props.gameActive) {
    return (
      <div>
        <input
          type="number"
          min={1}
          max={50}
          onClick={(e) => setWordNum(e.target.value)}
          onChange={(e) => setWordNum(e.target.value)}
          defaultValue={wordNum}
        ></input>
        <button onClick={generateWords}>Generate words</button>
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
