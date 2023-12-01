import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import CartProvider from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <CartProvider>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </CartProvider>
  </AuthContextProvider>
);
