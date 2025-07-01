import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Remove BrowserRouter
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import CoursesPage from './components/CoursesPage';
import ContactPage from './components/ContactPage';
import SignInPage from './components/SignInPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import './gradient.css';

function App() {
  return (
    <div className="gradient-background d-flex flex-column min-vh-100">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;