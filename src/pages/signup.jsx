import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Brand from "../components/Brand/index";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Perform signup logic here (API call, authentication, etc.)
    navigate("/login"); // Redirect to login page after signup
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-400 p-6">
      <div className="mb-5">
        <Brand />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Create Account
        </h2>
        <p>You can create a free account now</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              name="fullname"
              placeholder="Enter Fullname"
              type="text"
              value={formData.fullname}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="email"
              placeholder="Enter Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="password"
              placeholder="Enter Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="confirmPassword"
              placeholder="Re-enter Password"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="referralCode"
              placeholder="Referral Code (Optional)"
              type="text"
              value={formData.referralCode}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white hover:bg-blue-950 px-4 py-2 rounded-md transition-all text-sm mt-4"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
