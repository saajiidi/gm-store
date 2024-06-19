// src/firebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAZgx1dHAENQi_e9T955uQsheH4T7ngYAU",
  authDomain: "gm-store-1d1af.firebaseapp.com",
  projectId: "gm-store-1d1af",
  storageBucket: "gm-store-1d1af.appspot.com",
  messagingSenderId: "918363764349",
  appId: "1:918363764349:web:87b36eec676dd078fee314",
  measurementId: "G-T6DV1W4JPX",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

// Initialize Firebase Analytics
const analytics = getAnalytics(firebaseApp);

export { auth, firebaseApp };
