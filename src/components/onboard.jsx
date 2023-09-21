import React from "react";
import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Onboard = () => {
  const [signUp, setSignUp] = useState(true);
  const [user, setUser] = useState(null);
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
      alert("check your mail");
      // setUser(currentUser);
      // navigate("/");
    } catch (error) {
      console.error(error.message);
      alert(error.message);
      setError(error.message);
    }
  };

  // LOGIN USER
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // setUser(currentUser);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleForm = () => {
    setSignUp(!signUp);
  };
  return (
    <>
      <div className="p-4 sm:p-12 mx-auto">
        <h1 className="text-center font-bold text-[2rem] py-2">
          {signUp ? "Sign up" : "Sign In"}
        </h1>
        <div className="shadow-md max-w-xs sm:max-w-lg mx-auto p-2 sm:p-5 flex flex-col">
          {signUp ? <Signup /> : <SignIn />}
          <button
            className="bg-purple-700 rounded py-2 px-10 w-[60%] text-white my-3 sm:my-4 mx-auto"
            // onClick={signUp ? handleSignUp : handleLogin}
            onClick={handleSignUp}
          >
            {signUp ? "Sign up" : "Sign In"}
          </button>
          <p className="text-center ">
            {signUp ? "Already have an account?" : "Don't have an account?"}

            <a
              className="text-purple-500 font-bold px-1"
              href=""
              onClick={toggleForm}
            >
              {signUp ? "Sign In" : "Sign Up"}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

// export const Signup = ({ email, password, setEmail, setPassword }) => {
//   return (
//     <form className="flex flex-col gap-3 sm:gap-5 p-3 justify-between ">
//       <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
//         <label className="font-bold py-2">Email Address:</label>
//         <input
//           placeholder="Email address"
//           className="border rounded p-2 sm:w-[19rem]"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
//         <label className="font-bold py-2">Password:</label>
//         <input
//           placeholder="Password"
//           className="border rounded p-2 sm:w-[19rem]"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//     </form>
//   );
// };

export const SignIn = ({ email, password }) => {
  return (
    <form className="flex flex-col gap-3 sm:gap-5 p-3 justify-between ">
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
        <label className="font-bold py-2">Email Address:</label>
        <input
          placeholder="Email address"
          className="border rounded p-2 sm:w-[19rem]"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
        <label className="font-bold py-2">Password:</label>
        <input
          placeholder="Password"
          className="border rounded p-2 sm:w-[19rem]"
          type="password"
        />
      </div>
    </form>
  );
};
