// #1 React : CreateElement
const img = React.createElement("img", {
  src: "https://img.freepik.com/free-vector/business-teambuilding-partnership-teamwork_107791-13968.jpg?w=1480&t=st=1692543899~exp=1692544499~hmac=ee2bae7452373fbb077cc73630614d3a3f77582c93639744ce70c6c94c8c04aa",
  alt: "team-photo",
});
const divImg = React.createElement(
  "div",
  { className: "team_img_wrapper" },
  img
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(divImg);
