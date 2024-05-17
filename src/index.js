import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom'; 
import './index.css';
import Home from './components/home/Home';
import FamilyLawyerComponent from './components/FamilyLawyer/FamilyLawyerComponent';

const App = () => {
  return (
    <HashRouter basename="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advogadodefamilia" element={<FamilyLawyerComponent />} />
      </Routes>
    </HashRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
