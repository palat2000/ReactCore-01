// #1 React : CreateElement
const h2Code = React.createElement("h2", null, "CodeCamp");
const divLogo = React.createElement("div", { className: "logo" }, h2Code);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(divLogo);
