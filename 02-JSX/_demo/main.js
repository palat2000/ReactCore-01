const userAge = 32;
const hobby = "movie";
const exp = ["js", "html"];
const expList = exp.map((x) => <li>{x}</li>);

function myLuckyNumber() {
  return 1 + Math.floor(Math.random()) * 10;
}

const pets = {
  dog: "Jum",
  cat: "kilua",
};
const userProfile = (
  <div>
    <h1 className="header">FullName : John Doe</h1>
    <h4>age : {userAge}</h4>
    <h4>Hobby : {hobby}</h4>
    <h4>Experience :</h4>
    <ul>{expList}</ul>
    <h4>Pets : </h4>
    <p>Dog : {pets.dog}</p>
    <p>Cat : {pets.cat}</p>
    <h4>My lucky number : {myLuckyNumber()}</h4>
  </div>
);

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

root.render(userProfile);
