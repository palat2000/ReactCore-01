// #1 React : CreateElement
const btn = React.createElement(
  "button",
  {
    className: "btn",
    role: "button",
    type: "submit",
    onClick: function () {
      alert("Successfully Register");
    },
  },
  "Register"
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(btn);
