import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SuperAdmin from "./components/SuperAdmin";
import SignUpPage from "./components/CreateAdmin";
import AdminData from "./components/AdminData";
import Successfull from "./components/Successfull";
import Utility from "./components/Utility";
import Wallet from "./components/Wallet";
import GameHistory from "./components/GameHistory";
import Algorithm from "./components/Algorithm";
import Ntp from "./components/Ntp";

const AppLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

const App = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  React.useEffect(() => {
    if (isLoggedIn) {
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="hideenscrollmain overflow- h-[100vh]">
      <Routes>
        <Route path="/" element={<SuperAdmin />} />
        <Route
          path="*"
          element={
            <AppLayout>
              <Routes>
                <Route path="/create" element={<SignUpPage />} />
                <Route path="/admindata" element={<AdminData />} />
                <Route path="/success" element={<Successfull />} />
                <Route path="/utility" element={<Utility />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/gamehistory" element={<GameHistory />} />
                <Route path="/algorithm" element={<Algorithm />} />
                <Route path="/ntp" element={<Ntp />} />
              </Routes>
            </AppLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
