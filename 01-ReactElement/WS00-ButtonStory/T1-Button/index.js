// #1 React : CreateElement
const btn = React.createElement("button", null, "Button");
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(btn);
// #3 ReactDOM : TakeOver for Render Task
