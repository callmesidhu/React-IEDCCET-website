import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/configs";
import { useNavigate } from "react-router-dom";

const Loginform = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Invalid credentials. Please try again.");
    }
  };

  
  return (
    <div className="bg-[#000414] flex items-center justify-center min-h-screen ">
      <div className="bg-[#000C3B] p-10 border-4 border-[#0732EF] rounded-xl  w-full max-w-md">
        <h2 className="text-4xl font-bold mb-6  text-white text-center">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-white text-lg">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border text-white rounded-xl text-lg focus:outline-none  focus:border-blue-700 "
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-white text-lg">Password</label>
            <input
              type="password"
              className="w-full mb-2 text-white px-4 py-3 border rounded-xl  text-lg focus:outline-none  focus:border-blue-700"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full  text-lg bg-[#0732EF] text-white py-3 font-bold rounded-xl hover:bg-[#001F9A] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginform;
