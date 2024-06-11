import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import firebaseApp from "../../firebaseConfig";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const auth = getAuth(firebaseApp);

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Signed up with:", userCredential.user);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign up with:", result.user);
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  const handleFacebookSignUp = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Facebook sign up with:", result.user);
    } catch (error) {
      console.error("Error signing up with Facebook:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="form-group mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 space-y-4">
          <button
            className="w-full py-2 bg-orange-600 text-white rounded-md hover:bg-red-700 flex items-center justify-center"
            onClick={handleGoogleSignUp}
          >
            <FaGoogle className="mr-2" />
            Sign Up with Google
          </button>
          <button
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center"
            onClick={handleFacebookSignUp}
          >
            <FaFacebook className="mr-2" />
            Sign Up with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
