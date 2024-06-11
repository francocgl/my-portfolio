import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ReactDOM from "react-dom/client";
import Portfolio from "./ui/templates/Portfolio";
import { ErrorPage } from "./ui/molecules";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ErrorBoundary
    FallbackComponent={ErrorPage}
    onReset={() => console.log("Error boundary reset")}
  >
    <Portfolio />
  </ErrorBoundary>
);
