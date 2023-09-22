import React from "react";
import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

export const SignUp = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // SIGNUP USER
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("All fields are required");
    } else {
      setError("");
    }

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // const currentUser = auth.currentUser;
      console.log(response);
      alert("account created");
      navigate("/signin");
    } catch (error) {
      console.error(error.message);
      //   alert(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="p-2 sm:px-8 mx-auto flex flex-col justify-center my-8 min-w-[93%] md:min-w-[50%] sm:min-w-[80%]">
      <h1 className="text-center font-bold text-[1.5rem] sm:text-[2rem] text-purple-900">
        Welcome
      </h1>
      <p className="text-center pb-3">Sign up to create your account</p>
      <form className="flex bg-white flex-col gap-3 sm:gap-6 p-3 rounded sm:p-8 sm:py-10 justify-between shadow sm:shadow-md w-[100%]">
        {error ? <span className="text-red-600 text-xs">{error}</span> : ""}
        <div className="flex flex-col justify-between">
          <label className="font-[500] py-1">Email Address</label>
          <input
            placeholder="Email address"
            className="border rounded p-2 w-full focus:outline-none focus:border-gray-400"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-between">
          <label className="font-[500] py-1">Password</label>
          <input
            placeholder="Password"
            className="border rounded p-2 w-full focus:outline-none focus:border-gray-400"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center gap-2 py-2">
          <button
            className="bg-purple-800 font-[500] hover:bg-purple-900 rounded-md py-3 px-10 w-full sm:w-[60%] text-white mt-2 mx-auto"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <p className="text-center ">
            Already have an account?
            <Link
              className="text-purple-700 hover:text-purple-800 font-[600] hover:font-bold px-1"
              to="/signin"
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
