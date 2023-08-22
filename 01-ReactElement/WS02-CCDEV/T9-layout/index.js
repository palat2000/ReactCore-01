// #1 React : CreateElement
const divItem2 = React.createElement("div", { className: "grid-item-2" });
const divItem1 = React.createElement("div", { className: "grid-item-1" });
const divCols = React.createElement(
  "div",
  { className: "grid-cols-2" },
  divItem1,
  divItem2
);
const container = React.createElement(
  "div",
  { className: "container" },
  divCols
);
const section = React.createElement(
  "section",
  { className: "wrapper" },
  container
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(section);
