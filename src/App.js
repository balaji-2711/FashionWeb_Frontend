import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CustomerLogin from "./components/CustomerLogin";
import CustomerSignUp from "./components/CustomerSignUp";
import Navigation from "./components/Navigation";
import Monday from "./components/Weekdays/Monday";
import Tuesday from "./components/Weekdays/Tuesday";
import Wednesday from "./components/Weekdays/Wednesday";
import Thurday from "./components/Weekdays/Thursday";
import Friday from "./components/Weekdays/Friday";
import Saturday from "./components/Weekdays/Saturday";
import Sunday from "./components/Weekdays/Sunday";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";

//backend url
export const url = "https://fashionweb-backend.onrender.com";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/customer-login" element={<CustomerLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customer-sign-up" element={<CustomerSignUp />} />
          <Route path="/navbar" element={<Navigation />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/product" element={<Products />} />
          <Route path="/monday" element={<Monday />} />
          <Route path="/tuesday" element={<Tuesday />} />
          <Route path="/wednesday" element={<Wednesday />} />
          <Route path="/thursday" element={<Thurday />} />
          <Route path="/friday" element={<Friday />} />
          <Route path="/saturday" element={<Saturday />} />
          <Route path="/sunday" element={<Sunday />} />
          s
          <Route />
          <Route path="*" element={<Navigate to="/Dashboard" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
