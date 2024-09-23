import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Log/Login';
import { useEffect, useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState("false");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
   
    setIsAuthenticated(storedToken !== null); 
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home/> : <Login />}
        />
        <Route
          path="/Home"
          element={isAuthenticated ? <Home /> : <Login/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
