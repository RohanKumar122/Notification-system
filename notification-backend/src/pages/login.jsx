import React, { useEffect, useState } from 'react';
import { useFirebase } from '../context/firebase';
import { useNavigate } from 'react-router-dom';

// const backendapi =process.env.REACT_APP_BACKEND_API
const LoginForm = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 
  const firebase =useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate('/');
    }
  }, [firebase, navigate]);

  const handleLogin = async (e) => {
    try{
      setLoading(true); 

    e.preventDefault();
      console.log('Sigining in...');
      const result = await firebase.loginWithEmailAndPassword(username, password);
      console.log("successful",result);
    }
    catch(error){
      alert('Error connecting to the server.');
    }
    setLoading(false);  

  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
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
        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleLogin}
        disabled={loading} 
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>

      <h1 className='text-center my-4'>OR</h1>
      <div>
        <button onClick={firebase.signinWithGoogle} className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Signin with Google
        </button>
      </div>

    </div>

    
  );
};

export default LoginForm;