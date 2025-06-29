import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const container = document.getElementById("root");   // must be non-null
const root = createRoot(container);
root.render(<App />);
