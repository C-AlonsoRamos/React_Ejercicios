import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import BaseLayout from "./layouts/BaseLayout";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BaseLayout>
      <Header />
      <Outlet />
      <Footer />
    </BaseLayout>
  );
};

export default App;
