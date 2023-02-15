import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import BaseLayout from "./layouts/BaseLayout";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BaseLayout>
      <Header />
      <Outlet />
      <Footer />
    </BaseLayout>
  );
}

export default App;
