import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Content from './components/Content';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import Lab3 from './pages/Lab3';
import './index.css';

function App() {
    const navigate = useNavigate();

    return (
        <div className="app">
            <Header />
            <div className="main-container">
                <Menu />
                {/* Отображаться только при выборе лабораторной работы */}
                <Routes>
                    <Route path="/" element={null} />
                    <Route path="/lab1" element={<Lab1 />} />
                    <Route path="/lab2" element={<Lab2 />} />
                    <Route path="/lab3" element={<Lab3 />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;