import React, { useState,useEffect } from 'react';
import {useFirebase} from '../context/firebase';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 
  const firebase =useFirebase();
  console.log(firebase);
  const navigate = useNavigate();

  useEffect(() => {
      if (firebase.isLoggedIn) {
        navigate('/');
      }
    }, [firebase, navigate]);
  

  const handleRegister = async (e) => {
    setLoading(true); 
    try {
      e.preventDefault();
      console.log('Sigining up...');
      const result = await firebase.signupUserWithEmailAndPassword(username, password);
      console.log("successful",result);
 
    } catch (error) {
      alert('Error connecting to the server.');
    }
    setLoading(false); 
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">register</h2>
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={handleRegister}
        disabled={loading} 
      >
        {loading ? 'Registering...' : 'Create Account'}
      </button>
    </div>
  );
};

export default RegisterForm;