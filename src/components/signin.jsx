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
      alert("you are being logged in");
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
    <div className="p-4 sm:p-12 mx-auto flex flex-col items-center justify-center gap-y-5 my-auto">
      <h1 className="text-center font-bold text-[2rem] py-2">Sign In</h1>
      <form className="flex bg-white flex-col gap-3 sm:gap-5 p-3 sm:p-5 justify-between shadow-md max-w-xs sm:max-w-lg mx-auto">
        <span className="text-red-600">{error}</span>
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
          <label className="font-bold py-2">Email Address:</label>
          <input
            placeholder="Email address"
            className="border rounded p-2 sm:w-[19rem]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
          <label className="font-bold py-2">Password:</label>
          <input
            placeholder="Password"
            className="border rounded p-2 sm:w-[19rem]"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-purple-700 rounded py-2 px-10 w-[60%] text-white my-3 sm:my-4 mx-auto"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <p className="text-center ">
          Don't have an account?
          <Link className="text-purple-500 font-bold px-1" to="/">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};
