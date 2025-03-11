import { signOut } from "firebase/auth";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import chatbotlogo from "../assets/chatbotlogo.png";
import { motion } from "framer-motion";
import { img } from "framer-motion/client";

const Chat = () => {
  const [input, setInput] = useState("");
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const sendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    dispatch({ type: "ADD_MESSAGE", payload: { sender: "User", text: input } });

    // Add model reply after delay
    setTimeout(() => {
      dispatch({
        type: "ADD_MESSAGE",
        payload: { sender: "Bot", text: "Hello! How can I help you today?" },
      });
    }, 500);

    setInput("");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to login after logout
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-backgroundGradientStart to-backgroundGradientEnd text-white flex flex-col">
      {/* Header */}
      <div className="bg-highlight p-4 flex justify-end items-center">
        <img
          src={chatbotlogo}
          alt="logo"
          className="absolute top-4 left-4 h-12 w-auto z-10"
        />

        <button
          onClick={handleLogout}
          className="text-white hover:text-gray-600 px-4 py-2 rounded  transition"
        >
          Logout
        </button>
      </div>{" "}
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 lg:w-1/2 lg:mx-auto ">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={` mb-4 ${
              msg?.sender === "User" ? "text-right" : "text-left"
            }`}
          >
            {/* {msg?.sender !== "User" && (
              <img src={chatbotlogo} className="h-10" />
            )} */}
            <span
              className={`inline-block text-lg p-2 rounded ${
                msg.sender === "user"
                  ? "bg-highlight text-white"
                  : "bg-backgroundGradientEnd text-primaryFont"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Input */}
      <div className="p-4 flex items-center bg-gray-300 bg-white lg:w-1/2 lg:mx-auto">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight text-primaryFont"
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-highlight text-white px-4 py-2 rounded hover:bg-accent transition duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
