
import './App.css';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';

import Home from './Components/Home/Home';

import Login from './Components/Log/Login';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    
          <Route path="/Home" element={<Home />} />
           <Route path="/" element={<Login />} />

      
   </Routes>

   </BrowserRouter>
  );
}

export default App;
