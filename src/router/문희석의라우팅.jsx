import Home from "../pages/Main";
import LogIn from "../pages//LogIn";
import SignUp from "../pages/SignUp";
import FindID from "../pages/FindID";
import FindPassword from "../pages/FindPassword";
import FindPasswordAfter from "../pages/FindPasswordAfter";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import ChangePwd from "../pages/ChangePwd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute element={<LogIn />} />} />
        <Route path="/signup" element={<PublicRoute element={<SignUp />} />} />
        <Route path="/find/id" element={<PublicRoute element={<FindID />} />} />
        <Route path="/find/password" element={<PublicRoute element={<FindPassword />} />} />
        <Route path="/find/password/after" element={<PublicRoute element={<FindPasswordAfter />} />} />

        <Route path="change/password" element={<PrivateRoute element={<ChangePwd />} />} />

        <Route path="/" element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
