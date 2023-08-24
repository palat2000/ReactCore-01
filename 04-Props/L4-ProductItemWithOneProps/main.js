function ProductItem(props) {
  return (
    <div className="container">
      <h1>{props.product.name}</h1>
      <h2>{props.product.price}</h2>
      <p>{props.product.des}</p>
    </div>
  );
}

const product = {
  name: "food",
  price: "20",
  des: "The Food",
};

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(<ProductItem product={product} />);
