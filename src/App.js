import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import Explore from "./Explore";
import About from "./About";
import Forum from "./Forum";
import ShowPost from "./ShowPost";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar
        onLoginClick={() => setIsLoginModalOpen(true)}
        onSignupClick={() => setIsSignupModalOpen(true)}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />} />
        <Route path="explore" element={<Explore />}></Route>
        <Route path="/forum/:categoryName" element={<Forum />} />
        <Route path="/showPost/:postId" element={<ShowPost />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
