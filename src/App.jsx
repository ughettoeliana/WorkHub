import { Route, Routes } from "react-router-dom";

import "./App.css";
import "./assets/css/variables.css";
import "./assets/css/colors.css";
import "./assets/css/general.css";
import "./assets/css/button.css";

import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About";
import UserPublicProfile from "./pages/UserPublicProfile/UserPublicProfile";
import HireUser from "./pages/HireUser";
import SetSchedule from "./pages/SetSchedule";
import PaymentMethod from "./pages/PaymentMethod";
import HireSuccess from "./pages/HireSuccess";
import RateProfile from "./pages/RateProfile";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/user-public-profile/:userId"
          element={<UserPublicProfile />}
        />
        <Route
          path="/user-public-profile/:userId/hireUser"
          element={<HireUser />}
        />
        <Route
          path="/user-public-profile/:userId/hireUser/set-schedule"
          element={<SetSchedule />}
        />
        <Route
          path="/user-public-profile/:userId/hireUser/set-schedule/payment-method"
          element={<PaymentMethod />}
        />
        <Route
          path="/user-public-profile/:userId/hireUser/set-schedule/payment-method/hire-success"
          element={<HireSuccess />}
        />
        <Route path="/profile/rate-profile" element={<RateProfile />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
