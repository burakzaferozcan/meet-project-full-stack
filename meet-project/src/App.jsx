import { useState } from "react";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Index from "./components/Index";
import UserPage from "./components/UserPage";
import CreateRoom from "./components/CreateRoom";
import JoinRoom from "./components/JoinRoom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/joinroom" element={<JoinRoom />}></Route>
          <Route path="/createroom" element={<CreateRoom />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/userpage" element={<UserPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
