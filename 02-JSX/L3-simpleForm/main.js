// #1 React : JSX
const form = (
  <div className="container">
    <form action="#">
      <label htmlFor="username">Username</label>
      <input className="username" id="username" name="username" />
    </form>
  </div>
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(form);
