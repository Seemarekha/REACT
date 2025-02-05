import { createRoot } from "react-dom/client";
// import React from "react";
import App from "./App";

// const reactElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   "click me to visit google"
// );

// createRoot(document.getElementById("root")).render(reactElement);

createRoot(document.getElementById("root")).render(<App />);
