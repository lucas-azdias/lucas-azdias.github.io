import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/app";

// Development tools
if (import.meta.env.DEV) {
    // Enable React Scan
    void import("react-scan").then((reactScan) => {
        reactScan.scan({
            enabled: true,
        });
    });
}

// Get the element with id "app" from the template
const appElement = document.getElementById("app");

if (appElement) {
    // Create root on the "app" element
    const root = createRoot(appElement);

    // Render the web application
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );

    // Final message
    console.log("Successfully loaded.");
}
else {
    console.log("Element with id \"app\" not found.");
}
