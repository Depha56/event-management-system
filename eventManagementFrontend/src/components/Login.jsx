import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
 const [formData, setFormData] = useState({
    email: '',
    password: '',
 });
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState('');

 const navigate = useNavigate();

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Bypass login process for demonstration purposes
    // In a real application, you should validate user input

    try {
        // Simulate a successful login response
        const data = { message: 'Login successful' };
        console.log('Login successful:', data);
        
        navigate('/Home'); // Navigate to the "Home" page of the dashboard
    } catch (error) {
        console.error('Error during login:', error);
        setError('Error during login. Please try again.');
    } finally {
        setLoading(false);
    }
 };

 return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-indigo-500">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className={`w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Login'}
            </button>
          </div>
          <div className="text-center mt-4">
            <a href="forgot-password" className="text-cyan-600 hover:text-cyan-800">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
 );
};

export default Login;
