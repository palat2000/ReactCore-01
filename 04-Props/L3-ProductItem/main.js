function ProductItem(props) {
  return (
    <div className="container">
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <p>{props.des}</p>
    </div>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<ProductItem name="food" price="20" des="lorem ipsum" />);
