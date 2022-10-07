import { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={"rendering"}>
      <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("main")
);
