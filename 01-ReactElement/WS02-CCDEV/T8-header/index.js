// #1 React : CreateElement
const a1 = React.createElement(
  "a",
  { href: "#", className: "nav_menu_link" },
  "account"
);
const list1 = React.createElement("li", { className: "nav_menu_item" }, a1);
const a2 = React.createElement(
  "a",
  { href: "#", className: "nav_menu_link" },
  "About"
);
const list2 = React.createElement("li", { className: "nav_menu_item" }, a2);
const a3 = React.createElement(
  "a",
  { href: "#", className: "nav_menu_link" },
  "Service"
);
const list3 = React.createElement("li", { className: "nav_menu_item" }, a3);
const a4 = React.createElement(
  "a",
  { href: "#", className: "nav_menu_link" },
  "Contact"
);
const list4 = React.createElement("li", { className: "nav_menu_item" }, a4);
const ul = React.createElement(
  "ul",
  { className: "nav_menu_list" },
  list1,
  list2,
  list3,
  list4
);
const divNav = React.createElement(
  "div",
  {
    className: "nav_menu",
    id: "nav_menu",
  },
  ul
);
const h2Dev = React.createElement("h2", null, "Devkit.");
const divLogo = React.createElement("div", { className: "logo" }, h2Dev);
const nav = React.createElement("nav", { className: "nav" }, divLogo, divNav);
const header = React.createElement(
  "header",
  { className: "container header" },
  nav
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(header);
