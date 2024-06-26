import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/home/Home';
import FamilyLawyerComponent from './components/FamilyLawyer/FamilyLawyerComponent';
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/advogadodefamilia" element={<FamilyLawyerComponent />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

