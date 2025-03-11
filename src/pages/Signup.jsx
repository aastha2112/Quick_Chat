import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import loginBot from "../assets/loginBot.png";
import hiBot from "../assets/hiBot.png";

import chatbotlogo from "../assets/chatbotlogo.png";

const Signup = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/chat");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-backgroundGradientStart to-backgroundGradientEnd text-primaryFont px-5">
      {/* logo */}
      <img
        src={chatbotlogo}
        alt="logo"
        className="absolute top-4 left-4 h-12 w-auto z-10"
      />
      {/* welcome image */}
      <h1 className="text-lg font-medium text-primaryFont text-center mb-3 ">
        Hello,
        <br />
        <span className="text-xl font-bold text-blue-400">I'm Bubbles!</span>
      </h1>

      <img src={hiBot} alt="login Bot" className="lg:h-[450px] h-[300px]" />
      {/* form */}
      <form
        onSubmit={handleSignup}
        className="bg-gradient-to-br from-backgroundGradientEnd to-backgroundGradientStart  p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl text-primaryFont text-center font-bold mb-5">
          Sign Up
        </h2>

        {error && <p className="text-red-400 text-sm mb-2">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-4 p-2 rounded border border-gray-300  text-primaryFont focus:ring-highlight focus:border-highlight rounded-md focus:outline-none focus:ring-2"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-4 p-2 rounded border border-gray-300  text-primaryFont focus:ring-highlight focus:border-highlight rounded-md focus:outline-none focus:ring-2"
          required
        />
        <button
          type="submit"
          className="w-full bg-highlight text-white p-2 rounded hover:bg-accent transition duration-200"
        >
          Sign Up
        </button>
        <p className="text-secondaryFont text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-highlight hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
