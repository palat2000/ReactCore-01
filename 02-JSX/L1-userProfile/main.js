// #1 React : JSX
const fullName = "pond pond";
const birthYear = 2000;
const CURRENT_YEAR = 2023;
const result = (
  <>
    <h1 className="text-red">Fullname : {fullName}</h1>
    <p className="text-blue">Age : {CURRENT_YEAR - birthYear}</p>
  </>
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(result);
