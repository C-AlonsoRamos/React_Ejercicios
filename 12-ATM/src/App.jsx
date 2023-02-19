import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import Layout from './Layouts/Layout';
import Club from './pages/Club/Club';
import DetailEquipo from './pages/DetailEquipo/DetailEquipo';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PrimerEquipo from './pages/PrimerEquipo/PrimerEquipo';
import Tienda from './pages/Tienda/Tienda';

const App = () => {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/primer-equipo"
          element={
            <ProtectedRoutes>
              <PrimerEquipo />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/primer-equipo/:id"
          element={
            <ProtectedRoutes>
              <DetailEquipo />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/tienda"
          element={
            <ProtectedRoutes>
              <Tienda />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/club"
          element={
            <ProtectedRoutes>
              <Club />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
