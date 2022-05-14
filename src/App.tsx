import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SigninSample from "./pages/samples/SigninSample";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*특정 유알엘에 대해서 특정 페이지 로딩 설정*/}
        <Route path="/samples/signin" element={<SigninSample />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
