import { Route, Routes } from "react-router";

import SignUp from "pages/SignUp";
import LogIn from "../pages/LogIn";
import Find from "../pages/Find";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} exact />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/find" element={<Find />} />
    </Routes>
  );
};

export default Routers;
