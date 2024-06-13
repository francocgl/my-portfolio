import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./ui/templates/Portfolio";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Portfolio />);
