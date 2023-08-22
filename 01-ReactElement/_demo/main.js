//create element
// const btn = document.createElement("button");
// btn.innerText = "cart";
// btn.classList = "red";
// console.dir(btn);

//render
// const root = document.getElementById("root");
// root.appendChild(btn);

// ### react
// console.log(React);

//create element w/ react
const reactElement = React.createElement(
  "button",
  { className: "blue" },
  "cart"
);
// console.dir(reactElement);

//ReactDOM :render to browser
// console.log(ReactDOM);
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(reactElement);
