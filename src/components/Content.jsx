import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Lab1 from '../pages/Lab1';
import Lab2 from '../pages/Lab2';
import Lab3 from '../pages/Lab3';

function Content() {
    return (
        <main className="content">
            <Routes>
                <Route path="/lab1" element={<Lab1 />} />
                <Route path="/lab2" element={<Lab2 />} />
                <Route path="/lab3" element={<Lab3 />} />
            </Routes>
        </main>
    );
}

export default Content;