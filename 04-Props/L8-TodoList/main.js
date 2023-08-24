const todo = [
  { task: "Task1", id: 1 },
  { task: "Task2", id: 2 },
  { task: "Task3", id: 3 },
  { task: "Task4", id: 4 },
  { task: "Task5", id: 5 },
  { task: "Task6", id: 6 },
];

function SearchBar() {
  return (
    <div className="bar">
      <input className="search" type="text" />
      <button className="btn-submit">Add</button>
    </div>
  );
}

function Button(props) {
  return (
    <div className="container-btn">
      <button className="btn" id={props.id}>
        Edit
      </button>
      <button className="btn" id={props.id}>
        Delete
      </button>
      {/* <input type="checkbox" /> */}
    </div>
  );
}

function Task(props) {
  return (
    <div className="task">
      <p className="text">{props.text}</p>
    </div>
  );
}

function ContainerTask(props) {
  return (
    <div className="container-task">
      <Task text={props.text} />
      <Button id={props.id} />
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <div className="container-todo">
        <SearchBar />
        {todo.map((obj) => (
          <ContainerTask text={obj.task} id={obj.id} />
        ))}
      </div>
    </div>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
