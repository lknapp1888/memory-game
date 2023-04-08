const Cards = function (props) {


  return props.words.map((e) => {
    return <div className="card">{e.word}</div>;
  });
};

export default Cards;
