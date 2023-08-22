// #1 React : CreateElement
const span1 = React.createElement("span", null);
const span2 = React.createElement("span", null);
const span3 = React.createElement("span", null);
const span4 = React.createElement("span", null);
const spanText = React.createElement("span", null, "Button");
const btn = React.createElement(
  "button",
  null,
  span1,
  span2,
  span3,
  span4,
  spanText
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(btn);
