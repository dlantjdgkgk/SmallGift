import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
