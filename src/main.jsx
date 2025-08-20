import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ApiProvider } from "./api/ApiProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiProvider>
      <App />
    </ApiProvider>
  </StrictMode>
);
