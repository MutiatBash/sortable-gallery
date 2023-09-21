import { useState, useContext } from "react";
import { Search } from "./search";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

export const Navbar = ({ onSearch }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // SIGNUP USER
  const handleSignOut = () => {
    // setLoading(true);
    signOut(auth)
      .then(() => {
        setTimeout(() => {
          setLoading(true);
          navigate("/signin");
        }, 2000);
        alert("you are being logged out");
      })
      .catch((error) => {
        console.error(error.message);
        alert(error.message);
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-between items-center p-3 sm:py-4 sm:px-12 bg-white fixed top-0 w-full z-10">
      {loading ? <p> Logging out....</p> : ""}
      <div className="rounded-full px-2 py-1 sm:px-4 sm:py-[0.8rem] bg-[#fdf8f4] font-bold">
        <p className="text-[0.8rem] sm:text-base">M</p>
      </div>
      <Search onSearch={onSearch} />
      <p>
        <Link
          to="/signin"
          className="cursor-pointer font-bold hover:text-purple-800 text-[0.8rem] sm:text-base"
          onClick={handleSignOut}
        >
          Sign out
        </Link>
      </p>
    </div>
  );
};
