import { createRoot } from "react-dom/client";
import { StateContext } from "./context/StateContext";
import { BrowserRouter } from "react-router-dom";

import { App } from "./app";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <StateContext>
      <App />
    </StateContext>
  </BrowserRouter>
);
