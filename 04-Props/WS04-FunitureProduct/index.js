// #1 Write Your Function Component
const product = [
  {
    name: "Syltherine",
    des: "Stylish cafe chair",
    price: "2,500,000",
    img: "https://i.ibb.co/mDzSswG/syltherine.png",
  },
  {
    name: "Leviosa",
    des: "Stylish cafe chair",
    price: "2,500,000",
    img: "https://i.ibb.co/RgfK37s/leviosa.png",
  },
  {
    name: "Lolito",
    des: "Luxury big sofa",
    price: "7,000,000",
    img: "https://i.ibb.co/8Xvf2Lp/lolito.png",
  },
  {
    name: "Respira",
    des: "Outdoor bar table and stool",
    price: "500,000",
    img: "https://i.ibb.co/xhcKJXh/respira.png",
  },
  {
    name: "Syltherine",
    des: "Stylish cafe chair",
    price: "2,500,000",
    img: "https://i.ibb.co/mDzSswG/syltherine.png",
  },
  {
    name: "Leviosa",
    des: "Stylish cafe chair",
    price: "2,500,000",
    img: "https://i.ibb.co/RgfK37s/leviosa.png",
  },
  {
    name: "Lolito",
    des: "Luxury big sofa",
    price: "7,000,000",
    img: "https://i.ibb.co/8Xvf2Lp/lolito.png",
  },
  {
    name: "Respira",
    des: "Outdoor bar table and stool",
    price: "500,000",
    img: "https://i.ibb.co/xhcKJXh/respira.png",
  },
];

function Card({ name, img, des, price }) {
  return (
    <div className="card">
      <img className="img" src={img} alt={des} />
      <div className="text">
        <h4 className="name">{name}</h4>
        <p className="des">{des}</p>
        <p className="price">RP {price}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="box">
      <div className="container">
        {product.map((obj) => {
          const { name, des, price, img } = obj;
          return <Card name={name} des={des} price={price} img={img} />;
        })}
      </div>
    </div>
  );
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<App />);
