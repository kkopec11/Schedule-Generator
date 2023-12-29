import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import { DataProvider } from "./providers/DataContext";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <DataProvider>
    <App />
  </DataProvider>
);
