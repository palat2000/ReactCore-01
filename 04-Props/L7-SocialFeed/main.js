function Heading(props) {
  return <h2>{props.text}</h2>;
}

function PText(props) {
  return (
    <div className="box">
      <p>{`Author : ${props.author}`}</p>
      <p>{props.date}</p>
    </div>
  );
}

function Container(props) {
  return (
    <div className="container__container">
      <Heading text={props.info.text} />
      <PText author={props.info.author} date={props.info.date} />
    </div>
  );
}

function App(props) {
  return (
    <div className="container">
      {props.data.map((obj) => {
        return <Container info={obj} />;
      })}
    </div>
  );
}

const arr = [
  { text: "Happy new year", author: "John", date: "1/1/2021 00:01AM" },
  { text: "Programming is fun", author: "Jack", date: "30/6/2021 10:23AM" },
  { text: "Oh Amazing !!!", author: "Sarah", date: "23/7/2021 08:17AM" },
];

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<App data={arr} />);
