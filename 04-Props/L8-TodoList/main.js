const todo = [
  { task: "Task1" },
  { task: "Task2" },
  { task: "Task3" },
  { task: "Task4" },
  { task: "Task5" },
  { task: "Task6" },
];

function SearchBar() {
  return (
    <div className="bar">
      <input className="search" type="text" />
      <button className="btn-submit">Add</button>
    </div>
  );
}

function Button() {
  return (
    <div className="container-btn">
      <button className="btn">Edit</button>
      <button className="btn">Delete</button>
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
      <Button />
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <div className="container-todo">
        <SearchBar />
        {todo.map((obj) => (
          <ContainerTask text={obj.task} />
        ))}
      </div>
    </div>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
