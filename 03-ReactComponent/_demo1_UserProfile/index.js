const userProfile = (
  <div className="profile_card">
    <h1>FullName : John Doe</h1>
    <h2>Age : 30</h2>
  </div>
);
// const appComponent = (
//   <>
//     <UserProfile />
//     <UserProfile />
//     <UserProfile />
//   </>
// );

//Component
function UserProfile() {
  return (
    <div className="profile_card">
      <h1>FullName : John Doe</h1>
      <h2>Age : 30</h2>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <UserProfile />
      <UserProfile />
      <UserProfile />
    </div>
  );
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<App />);
