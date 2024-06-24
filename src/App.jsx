import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('');
  const [loginEmail, setLoginEmail] = useState('');

  const handleMenuClick = (view) => {
    setCurrentView(view);
  };

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setLoginEmail(email);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('');
  };

  return (
    <Router>
      <Routes>
      <Route path="/" element={isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );

  function AuthenticatedContent() {
    return (
      <div className="app">
        <Sidebar onMenuClick={handleMenuClick} loginEmail={loginEmail} />
        <MainArea currentView={currentView} onLogout={handleLogout} loginEmail={loginEmail} />
      </div>
    );
  }
}

export default App;
