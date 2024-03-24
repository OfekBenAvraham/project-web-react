import React from "react";
import { useState } from "react";

const Navbar = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white dark:bg-slate-800 backdrop-blur-lg">
      <nav className="mx-auto flex gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
        <div className="relative flex items-center">
          <a href="./#">
            <img
              src="https://gpariente.github.io/MakerMingle/assets/MakermingleLogo.png"
              alt="Logo"
              loading="lazy"
              width="80"
              height="80"
            />
          </a>
        </div>
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } items-center justify-center gap-6 md:flex flex-col md:flex-row`}
        >
          <li className="pt-1.5 font-dm text-sm font-medium text-slate-700 dark:text-slate-200">
            <a href="./explore.html">Explore</a>
          </li>
          <li className="pt-1.5 font-dm text-sm font-medium text-slate-700 dark:text-slate-200">
            <a href="./about.html">About</a>
          </li>
        </ul>
        <div className="flex-grow"></div>
        <div className="hidden items-center justify-center gap-6 md:flex">
          <a
            href="#"
            className="font-dm text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Login
          </a>
          <a
            href="#"
            className="rounded-md bg-gradient-to-br from-orange-600 to-orange-400 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-[1.03]"
          >
            Sign up
          </a>
        </div>
        <div className="relative flex items-center justify-center md:hidden">
          <button type="button" onClick={toggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-auto text-slate-900 dark:text-slate-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </div>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </nav>
    </header>
  );
};

export default Navbar;
