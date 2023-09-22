import React from "react";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

export const SignIn = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // SIGNUP USER
  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("All fields are required");
    } else {
      setError("");
    }

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      console.log(response);
      alert("You are being logged in");
      setLoading(true);
      // setUser(currentUser);
      navigate("/home");
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      //   alert(error.message);
      setError(error.message);
    }
  };

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <div className="p-2 sm:px-8 mx-auto flex flex-col justify-center my-auto min-w-[93%] md:min-w-[60%] sm:min-w-[80%]">
      <h1 className="text-center font-bold text-[1.5rem] sm:text-[2rem] text-purple-900">Welcome Back</h1>
      <p className="text-center pb-3 text-sm sm:text-base">Sign in to your account</p>
      <form className="flex bg-white flex-col gap-3 sm:gap-6 p-3 rounded sm:p-8 sm:py-10 justify-between shadow sm:shadow-md w-[100%]">
        {error ? (<span className="text-red-600 text-xs">{error}</span>) : ""}
        <div className="flex flex-col justify-between">
          <label className="font-[500] py-1">Email Address</label>
          <input
            placeholder="Email address"
            className="border rounded p-2 w-full"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-between">
          <label className="font-[500] py-1">Password</label>
          <input
            placeholder="Password"
            className="border rounded p-2 w-full"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center gap-2 py-2">
          <button
            className="bg-purple-800 font-[500] hover:bg-purple-900 rounded-md py-2 px-10 w-full sm:w-[60%] text-white mt-2 mx-auto"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          <p className="text-center">
            Don't have an account?
            <Link
              className="text-purple-700 hover:text-purple-800 font-[600] hover:font-bold px-1"
              to="/"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
