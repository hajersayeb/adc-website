import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Navbar from"./components/Navbar";
import Footer from"./components/Footer";
import Home from"./pages/Home";
import Register from"./pages/Register";
import RegisterEmp from"./pages/RegisterEmp";
import Login from"./pages/Login";
import SignUp from"./pages/SignUp";
import Dashboard from"./pages/Dashboard";
import ForgotPassword from"./pages/ForgetPassword";
export default function App(){
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="registerEmp" element={<RegisterEmp />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
