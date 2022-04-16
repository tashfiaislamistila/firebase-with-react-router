
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<p>home</p>}>
          <Route path="home" element={<p></p>}>
            <Route path="users" element={<p>Users</p>} />
            <Route path="login" element={<p>Login</p>} />
          </Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
