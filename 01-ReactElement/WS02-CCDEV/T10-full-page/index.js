// #1 React : CreateElement
function createNavItem(child) {
  const li = React.createElement(
    "a",
    { href: "#", className: "nav_menu_link" },
    child
  );
  return React.createElement("li", { className: "nav_menu_item" }, li);
}

const btn1 = React.createElement(
  "button",
  { className: "btn view_more_btn" },
  "view all pages"
);
const btn2 = React.createElement(
  "button",
  { className: "btn documentation_btn" },
  "documentation"
);
const divBtn = React.createElement(
  "div",
  { className: "btn_wrapper" },
  btn1,
  btn2
);

const info = React.createElement(
  "p",
  { className: "info-text" },
  " Build a beautiful, modern website with flexible components built from scratch."
);

const navItem1 = createNavItem("account");
const navItem2 = createNavItem("About");
const navItem3 = createNavItem("Service");
const navItem4 = createNavItem("Contact");
const ul = React.createElement(
  "ul",
  { className: "nav_menu_list" },
  navItem1,
  navItem2,
  navItem3,
  navItem4
);

const img = React.createElement("img", {
  src: "https://i.ibb.co/mhcL2P6/image.png",
  alt: "team-photo",
});
const divImg = React.createElement(
  "div",
  { className: "team_img_wrapper" },
  img
);

const divNav = React.createElement(
  "div",
  {
    className: "nav_menu",
    id: "nav_menu",
  },
  ul
);

const span = React.createElement("span", null, "codecamp.");
const br = React.createElement("br", null);
const h1 = React.createElement(
  "h1",
  { className: "main-heading" },
  "Welcome to ",
  span,
  br,
  "Develop anythings."
);

const h2Dev = React.createElement("h2", null, "Codecamp");
const divLogo = React.createElement("div", { className: "logo" }, h2Dev);

const nav = React.createElement("nav", { className: "nav" }, divLogo, divNav);

const header = React.createElement(
  "header",
  { className: "container header" },
  nav
);
const divItem1 = React.createElement(
  "div",
  { className: "grid-item-1" },
  h1,
  info,
  divBtn
);
const divItem2 = React.createElement(
  "div",
  { className: "grid-item-2" },
  divImg
);
const divCols = React.createElement(
  "div",
  { className: "grid-cols-2" },
  divItem1,
  divItem2
);
const container = React.createElement(
  "div",
  { className: "container" },
  divCols
);
const section = React.createElement(
  "section",
  { className: "wrapper" },
  container
);

const app = React.createElement(React.Fragment, null, header, section);

// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
// root.render(header);
root.render(app);
