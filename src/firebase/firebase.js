import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhJ5LZU8_6WAWq52n59nBQ4TicF58MnaQ",
  authDomain: "fir-react-ex3.firebaseapp.com",
  projectId: "fir-react-ex3",
  storageBucket: "fir-react-ex3.appspot.com",
  messagingSenderId: "758569326731",
  appId: "1:758569326731:web:4e650930b899bc413e5c8e",
  measurementId: "G-YVC5L6PYXF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };