import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({
  onLoginClick,
  onSignupClick,
  isAuthenticated,
  onLogoutClick,
  onToggleDarkMode,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const toggleDarkMode = () => {
    console.log("dark mode toggle");
    onToggleDarkMode();
    // document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white backdrop-blur-lg dark:bg-slate-800 ">
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
          } items-center justify-end gap-6 md:flex flex-col md:flex-row`}
        >
          <li className="pt-1.5 font-dm text-sm font-medium text-slate-700  dark:text-slate-200">
            <Link to={`/`}>
              Home
            </Link>
          </li>
          <li className="pt-1.5 font-dm text-sm font-medium text-slate-700  dark:text-slate-200">
            <Link to={`/explore`}>
              Explore
            </Link>
          </li>
          <li className="pt-1.5 font-dm text-sm font-medium text-slate-700  dark:text-slate-200">
            <Link to={`/about`}>
              About
            </Link>
          </li>
          {!isAuthenticated && (
            <>
              <li className="pt-1.5 font-dm text-sm font-medium text-slate-700 md:hidden  dark:text-slate-200">
                <a href="#" onClick={onLoginClick}>
                  Login
                </a>
              </li>
              <li className="pt-1.5 font-dm text-sm font-medium text-slate-700 md:hidden">
                <a
                  href="#"
                  onClick={onSignupClick}
                  className="rounded-md bg-gradient-to-br from-orange-600 to-orange-400 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-[1.03]  dark:text-slate-200"
                >
                  Sign up
                </a>
              </li>
            </>
          )}
          {isAuthenticated && (
            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700 md:hidden">
              <a
                href="#"
                onClick={onLogoutClick}
                className="rounded-md bg-gradient-to-br from-orange-600 to-orange-400 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-[1.03]  dark:text-slate-200"
              >
                Logout
              </a>
            </li>
          )}
          <li className="pt-1.5 font-dm text-sm font-medium text-slate-700 dark:text-slate-200 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="bg-transparent border-none cursor-pointer"
            >
              {/* Dark mode toggle icons for mobile view */}
              <svg
                className="dark:hidden"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-slate-300"
                  d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                />
                <path
                  className="fill-slate-400"
                  d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
                />
              </svg>
              <svg
                className="hidden dark:block"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-slate-400"
                  d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
                />
                <path
                  className="fill-slate-500"
                  d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25 .625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25 .625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                />
              </svg>
            </button>
          </li>
        </ul>
        <div className="flex-grow"></div>
        <div className="hidden items-center justify-center gap-6 md:flex">
          {!isAuthenticated && (
            <>
              <a
                href="#"
                onClick={onLoginClick}
                className="font-dm text-sm font-medium text-slate-700  dark:text-slate-200"
              >
                Login
              </a>
              <a
                href="#"
                onClick={onSignupClick}
                className="rounded-md bg-gradient-to-br from-orange-600 to-orange-400 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-[1.03]  dark:text-slate-200"
              >
                Sign up
              </a>
            </>
          )}
          {isAuthenticated && (
            <a
              href="#"
              onClick={onLogoutClick}
              className="rounded-md bg-gradient-to-br from-orange-600 to-orange-400 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-[1.03]  dark:text-slate-200"
            >
              Logout
            </a>
          )}
        </div>
        <div className="relative flex items-center justify-center md:hidden">
          <button type="button" onClick={toggleNav}>
            {/* Burger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-auto text-slate-900  dark:text-slate-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </div>
        <button onClick={onToggleDarkMode} className="hidden md:block">
          {/* Dark mode toggle icons for desktop view */}
          <svg
            className="dark:hidden"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-slate-300"
              d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
            />
            <path
              className="fill-slate-400"
              d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
            />
          </svg>
          <svg
            className="hidden dark:block"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-slate-400"
              d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
            />
            <path
              className="fill-slate-500"
              d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25 .625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25 .625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
