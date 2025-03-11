import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import loginBot from "../assets/loginBot.png";
import chatbotlogo from "../assets/chatbotlogo.png";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/chat");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-backgroundGradientStart to-backgroundGradientEnd text-primaryFont px-5">
      <img
        src={chatbotlogo}
        alt="logo"
        className="absolute top-4 left-4 h-12 w-auto z-10"
      />
      <img src={loginBot} alt="login Bot" className="lg:h-[450px] h-[300px]" />
      <form
        onSubmit={handleLogin}
        className="bg-gradient-to-br from-backgroundGradientEnd to-backgroundGradientStart  p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl text-primaryFont text-center font-bold mb-5">
          Welcome Back!
        </h2>
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
          className="w-full mb-4 p-2 rounded border border-gray-300 text-primaryFont focus:ring-highlight focus:border-highlight rounded-md focus:outline-none focus:ring-2"
          required
        />
        <button
          type="submit"
          className="w-full bg-highlight text-white p-2 rounded hover:bg-accent transition duration-200"
        >
          Login
        </button>
        <p className="text-secondaryFont text-center mt-4">
          Don’t have an account?{" "}
          <a href="/" className="text-highlight hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
