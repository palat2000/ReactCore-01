// #1 React : CreateElement
function HeroImg() {
  return (
    <div className="hero-img">
      <img
        src="https://i.ibb.co/9VZRsxF/pexels-cottonbro-studio-3296546-1.png"
        alt="food-pic"
      />
    </div>
  );
}

// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<HeroImg />);
