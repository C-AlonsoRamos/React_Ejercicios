import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import HomeDetail from "./pages/HomeDetail/HomeDetail";
import "./index.css";
import { UserContextProvider } from "./context/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Login />} />
            <Route path="/Home-Gallery" element={<Home />} />
            <Route path="/Home-Gallery/:id" element={<HomeDetail />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
