// App.jsx
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import PythonBasic from './components/PythonBasics/PythonBasics';

function App() {
    return (
        <>
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/python" element={<PythonBasic />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
