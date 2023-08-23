// #1 React : JSX
let height = 1.75;
let weight = 75;
const calcBMI = (height, weight) => (weight / height ** 2).toFixed(2);
const render = <h3>BMI : {calcBMI(height, weight)}</h3>;
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(render);
