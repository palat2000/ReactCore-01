// #1 Write Your Function Component
function ContactUs() {
  return (
    <div className="contact-us">
      <form action="">
        <input type="email" placeHolder="e-mail" />
        <input type="submit" />
      </form>
    </div>
  );
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<ContactUs />);
