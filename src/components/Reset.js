import { useState } from "react";

const Reset = function (props) {
    const [wordNum, setWordNum] = useState(10);
  
    const playAgain = function () {
      props.setGameActive(false);
      props.setGameStage('start')
      setWordNum(0);
    };
  

      return (
        <div className="resetBtnCont">
          <button onClick={playAgain}>Start new game</button>
        </div>
      );
}

export default Reset