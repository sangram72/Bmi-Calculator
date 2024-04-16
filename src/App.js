import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';

import Signup from './Components/Signup/Signup';
import Login from './Components/Log/Login';

function App() {
  return (
   <BrowserRouter>
   <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Signup />} /> */}
      
   </Routes>

   </BrowserRouter>
  );
}

export default App;
