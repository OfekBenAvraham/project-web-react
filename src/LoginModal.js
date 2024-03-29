import React, { useState } from 'react';

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
  
    fetch("https://project-web-psi.vercel.app/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem('userLoginToken', data.access_token);
          onLoginSuccess(); // Call the callback function
          onClose(); // Close the modal
        } else {
          alert('Incorrect email or password.');
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while logging in.");
      });
  };
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-160 min-h-[32rem] flex flex-col items-center justify-start relative">
        <span className="absolute top-4 right-8 cursor-pointer text-2xl text-gray-500" onClick={onClose}>&times;</span>
        <img src="https://gpariente.github.io/MakerMingle/assets/MakermingleLogo.png" loading="lazy" style={{ color: 'transparent' }} width="140" height="140" />
        <h2 className="text-2xl font-semibold mb-4">Welcome back to Maker Mingle!</h2>
        <form className="flex flex-col items-center justify-between w-3/4" onSubmit={handleLogin}>
          <div className="w-full">
            <label htmlFor="email" className="block text-left text-gray-600 mb-2">Email:</label>
            <input type="text" id="email" name="email" required className="w-full border border-gray-300 p-2 rounded mb-4" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password" className="block text-left text-gray-600 mb-2">Password:</label>
            <input type="password" id="password" name="password" required className="w-full border border-gray-300 p-2 rounded mb-4" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <input type="submit" value="Login" className="bg-gradient-to-br from-orange-600 to-orange-400 text-white px-4 py-2 rounded-full cursor-pointer transition-transform duration-200 ease-in-out hover:scale-[1.03]" />
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
