const post = [
  { id: 1, message: "Hello word", date: "24-08-2023", name: "pond" },
  { id: 2, message: "Hello 1", date: "24-08-2023", name: "pond1" },
  { id: 3, message: "Hello 2", date: "24-08-2023", name: "pond2" },
  { id: 4, message: "Hello 3", date: "24-08-2023", name: "pond3" },
  { id: 5, message: "Hello 4", date: "24-08-2023", name: "pond4" },
  { id: 6, message: "Hello 5", date: "24-08-2023", name: "pond5" },
  { id: 7, message: "Hello 6", date: "24-08-2023", name: "pond6" },
];

function ArrayPost(props) {
  return (
    <div className="container">
      <ul>
        {props.arr.map((x) => {
          return (
            <>
              <li>{x.name}</li>
              <li>{x.message}</li>
              <li>{x.date}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<ArrayPost arr={post} />);
