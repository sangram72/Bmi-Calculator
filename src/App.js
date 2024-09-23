import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Log/Login';
import { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken); // Store the token in state
    console.log(storedToken);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={token === "true" ? <Navigate to="/Home" replace /> : <Login />}
        />
        <Route
          path="/Home"
          element={token === "true" ? <Home /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
