import './App.css';
import {Routes, Route} from 'react-router-dom';
import RegisterForm from './pages/Register';
import LoginForm from './pages/login';
import ItemListing from './pages/ItemListing';
import Home from './pages/Home';


function App() {
  return (
    
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/listBooks" element={<ItemListing />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
