// #1 React : CreateElement
function Header() {
  return (
    <header>
      <h1>Discover authentic Japanese cuisine in LA. Opening Soon!</h1>
    </header>
  );
}

function InfoText() {
  return (
    <div className="info-text">
      <p>
        Welcome to Hensui, the newest addition to the vibrant Los Angeles dining
        scene! Our restaurant is dedicated to bringing you the most authentic
        and delicious Japanese cuisine.
      </p>
      <p>
        Stay tuned for our grand opening date, sign up with your e-mail address
        to get notified.
      </p>
    </div>
  );
}

function ContactUs() {
  return (
    <div className="contact-us">
      <form action="">
        <input type="email" placeholder="e-mail" />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

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

function Logo() {
  return (
    <div className="logo">
      <a href="#">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a href="#">
        <i class="fa-brands fa-twitter"></i>
      </a>
    </div>
  );
}

function Left() {
  return (
    <div className="left">
      <HeroImg />
    </div>
  );
}

function Right() {
  return (
    <div className="right">
      <Logo />
      <div className="container">
        <Header />
        <InfoText />
        <ContactUs />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container-root">
      <Left />
      <Right />
    </div>
  );
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<App />);
