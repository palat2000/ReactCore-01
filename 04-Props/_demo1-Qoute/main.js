const quotes = [
  {
    quote: "The only sin is ignorance",
    source: "Christopher Marlowe",
  },
  {
    quote:
      "A man is his own easiest dupe, for what he wishes to be true he generally believes to be true",
    source: "Demosthenes",
  },
  {
    quote:
      "A lie can travel halfway around the world while the truth is putting on its shoes",
    source: "Mark Twain",
  },
  {
    quote:
      "Great minds discuss ideas; average minds discuss events; small minds discuss people",
    source: "Eleanor Roosevelt",
  },
  {
    quote: "If you have a garden and a library, you have everything you need",
    source: "Marcus Tullius Cicero",
  },
  {
    quote: "Truth comes out in wine",
    source: "Pliny the Elder",
  },
  {
    quote: "Everything in the universe is within you. Ask all from yourself",
    source: "Rumi",
  },
  {
    quote:
      "When I get a little money I buy books; and if any is left I buy food and clothes",
    source: "Desiderius Erasmus",
  },
];

// function MyComponent(props) {
//   return <h4 className={props.className}>Hello {props.text}!</h4>;
// }

// function Button(props) {
//   return <button className={`btn ${props.className}`}>{props.text}</button>;
// }

// function App() {
//   return (
//     <div>
//       <h1 className="red">Header</h1>
//       <MyComponent text="HI" className="red" />
//       <Button text="Submit" className="red" />
//     </div>
//   );
// }

function Card(props) {
  return (
    <div className="card">
      <h2>Quote : {props.quote}</h2>
      <p>Author : {props.source}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Card />
    </div>
  );
}

// Render
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
