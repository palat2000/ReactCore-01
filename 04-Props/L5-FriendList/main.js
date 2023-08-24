const friend = ["pond", "pond1", "pond2", "pond3", "pond4"];

function List(props) {
  return (
    <div className="container">
      <ul>
        {props.arr.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<List arr={friend} />);
