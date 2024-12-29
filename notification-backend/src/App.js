import './App.css';
import {Routes, Route} from 'react-router-dom';
import RegisterForm from './pages/Register';
import LoginForm from './pages/login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
