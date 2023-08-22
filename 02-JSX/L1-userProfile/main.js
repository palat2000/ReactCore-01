// #1 React : JSX
const fullName = "pond pond";
const birthYear = 2000;
const result = (
  <>
    <h1>Fullname : {fullName}</h1>
    <p>Age : {2022 - birthYear}</p>
  </>
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(result);
