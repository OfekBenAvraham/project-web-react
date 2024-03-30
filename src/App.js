import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import Explore from "./Explore";
import About from "./About";
import Forum from "./Forum";
import ShowPost from "./ShowPost";
import CreatePost from "./CreatePost";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userLoginToken");
    setIsAuthenticated(!!token);

    let isNavigatingWithinSite = false;

    // handles logout automatically when user exit.
    const handleBeforeUnload = (event) => {
      if (!isNavigatingWithinSite) {
        // Clear authentication token from localStorage only if not navigating within the site
        localStorage.removeItem("userLoginToken");
      }
    };

    const handleNavigationWithinSite = () => {
      isNavigatingWithinSite = true;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("click", handleNavigationWithinSite);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("click", handleNavigationWithinSite);
    };
  }, []);

  const handleLoginSuccess = () => {
    setIsLoginModalOpen(false);
    setIsAuthenticated(true);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle dark mode class on root element
    document.documentElement.classList.toggle("dark", isDarkMode);
  };

  return (
    <BrowserRouter>
      <div className={`App ${isDarkMode ? "dark" : ""}`}>
        <Navbar
          onLoginClick={() => setIsLoginModalOpen(true)}
          onSignupClick={() => setIsSignupModalOpen(true)}
          isAuthenticated={isAuthenticated}
          onLogoutClick={() => setIsAuthenticated(false)}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
        <SignupModal
          isOpen={isSignupModalOpen}
          onClose={() => setIsSignupModalOpen(false)}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="explore" element={<Explore />} />
          <Route path="/forum/:categoryId" element={<Forum />} />
          <Route path="/showPost/:postId" element={<ShowPost />} />
          <Route path="/CreatePost/:categoryId" element={<CreatePost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
