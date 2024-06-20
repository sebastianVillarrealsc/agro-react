import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<h1>Bienvenido a AgroReact</h1>} />
          <Route path="/register" element={<h2>Página de Registro</h2>} />
          <Route path="/login" element={<h2>Página de Login</h2>} />
          <Route path="/services" element={<h2>Página de Servicios</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
