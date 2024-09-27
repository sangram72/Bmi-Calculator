import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Components/Home/Home';
import Login from './Components/Log/Login';

function App() {
  const [token, setToken] = useState(null);


  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/" element={token ? <Navigate to="/home" /> : <Login />} />


        <Route path="/home" element={token ? <Home /> : <Navigate to="/" />} />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
