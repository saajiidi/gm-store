import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import firebaseApp from "../../firebaseConfig";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const auth = getAuth(firebaseApp);

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Logged in user:", userCredential.user);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign in with:", result.user);
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Facebook sign in with:", result.user);
    } catch (error) {
      console.error("Error logging in with Facebook:", error);
    }
  };

  return (
    <div className="container mt-3 p-5 rounded-lg shadow-lg">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <button className="btn btn-secondary mt-3" onClick={handleGoogleLogin}>
        <FaGoogle className="mr-2" />
        Login with Google
      </button>
      <button className="btn btn-secondary mt-3" onClick={handleFacebookLogin}>
        <FaFacebook className="mr-2" />
        Login with Facebook
      </button>
    </div>
  );
};

export default LoginPage;
