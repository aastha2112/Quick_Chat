import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig.js";

const ProtectedRoute = ({ children }) => {
  if (!auth.currentUser) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
