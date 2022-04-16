
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Users from './Components/Users/Users';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="users" element={<Users></Users>} />
        <Route path="login" element={<Login></Login>} />
      </Routes>
    </div >
  );
}

export default App;
