import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      // Sign in with Google popup
      const result = await signInWithPopup(auth, provider);

      // Make a POST request to the backend API with user details
      const response = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      // Ensure response is properly awaited
      const data = await response.json();
      navigate("/");
      // Dispatch the success action with the received data
      dispatch(signInSuccess(data));
    } catch (error) {
      // Detailed error logging
      console.error("Could not sign in with Google:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 text-center cursor-pointer"
    >
      Continue with Google
    </button>
  );
};

export default OAuth;
