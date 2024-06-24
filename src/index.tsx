import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ReactDOM from "react-dom/client";
import App from "./ui/templates";
import ErrorPage from "./ui/molecules/ErrorPage";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ErrorBoundary
    FallbackComponent={ErrorPage}
    onReset={() => console.log("Error boundary reset")}
  >
    <App />
  </ErrorBoundary>
);
