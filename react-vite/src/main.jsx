import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <div className="flex justify-center">
            <App />
        </div>
    </StrictMode>
);
