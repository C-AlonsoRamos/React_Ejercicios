import { Outlet } from "react-router-dom";
import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer />
    </Layout>
  );
};

export default App;
