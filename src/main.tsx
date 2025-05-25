
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App.tsx";
import "./index.css";

// Get the Clerk publishable key from environment variables
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// If no key is provided, render a message asking for it
if (!PUBLISHABLE_KEY) {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Clerk Setup Required</h1>
          <p className="text-gray-600 mb-4">
            To use authentication features, you need to set up Clerk:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 mb-4">
            <li>Go to <a href="https://go.clerk.com/lovable" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://go.clerk.com/lovable</a></li>
            <li>Create a free Clerk account</li>
            <li>Create a new application</li>
            <li>Copy your publishable key</li>
            <li>Add it to your project's environment variables as <code className="bg-gray-100 px-1 rounded">VITE_CLERK_PUBLISHABLE_KEY</code></li>
          </ol>
          <p className="text-xs text-gray-500">
            Note: In Lovable, you can add environment variables through the project settings.
          </p>
        </div>
      </div>
    </StrictMode>
  );
} else {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    </StrictMode>
  );
}
