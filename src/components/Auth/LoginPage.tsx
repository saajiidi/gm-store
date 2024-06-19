// src/components/Auth/LoginPage.tsx

import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebaseConfig"; // Make sure to import auth from your firebaseConfig file
import { FaGoogle, FaFacebook } from "react-icons/fa";

const isErrorWithMessage = (error: unknown): error is Error => {
  return (error as Error).message !== undefined;
};

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Logged in user:", userCredential.user);
    } catch (error) {
      if (isErrorWithMessage(error)) {
        setError("Error logging in: " + error.message);
      } else {
        setError("Error logging in.");
      }
      console.error("Error logging in:", error);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    setError("");
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign in with:", result.user);
    } catch (error) {
      if (isErrorWithMessage(error)) {
        setError("Error logging in with Google: " + error.message);
      } else {
        setError("Error logging in with Google.");
      }
      console.error("Error logging in with Google:", error);
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    setError("");
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Facebook sign in with:", result.user);
    } catch (error) {
      if (isErrorWithMessage(error)) {
        setError("Error logging in with Facebook: " + error.message);
      } else {
        setError("Error logging in with Facebook.");
      }
      console.error("Error logging in with Facebook:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <div className="mt-6 space-y-4">
          <button
            className="w-full py-2 flex items-center justify-center bg-orange-500 text-white rounded-full hover:bg-orange-600"
            onClick={handleGoogleLogin}
          >
            <FaGoogle className="mr-2" /> Sign in with Google
          </button>
          <button
            className="w-full py-2 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700"
            onClick={handleFacebookLogin}
          >
            <FaFacebook className="mr-2" /> Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
