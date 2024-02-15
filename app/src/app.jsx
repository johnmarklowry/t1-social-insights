import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Toolbar from './components/toolbar';
import FilterBar from './components/filterbar';
import Home from "./pages/home.jsx";
import './styles/styles.css';

// Application's main layout component
const AppLayout = ({ children }) => (
  <div className="app-layout">
    <Toolbar /> {/* Left sidebar for brand management */}
    <div className="main-content">
      <FilterBar /> {/* Top bar for filtering */}
      {children} {/* Main page content */}
    </div>
  </div>
);

// Main App component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout><Dashboard /></AppLayout>} />
        {/* Future routes can be added here */}
      </Routes>
    </Router>
  );
};

export default App;