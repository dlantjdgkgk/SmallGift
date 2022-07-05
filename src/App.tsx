import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninSample from "./pages/samples/SigninSample";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/samples/signin" element={<SigninSample />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
