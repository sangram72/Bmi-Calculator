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
    console.log(isAuthenticated)
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/Home" replace /> : <Login />}
        />
        <Route
          path="/Home"
          element={isAuthenticated ? <Home /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
