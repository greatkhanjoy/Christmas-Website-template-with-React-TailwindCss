import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsMoon, BsFillMoonFill, BsGrid } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import { logo, logoWhite } from "../assets/img/index.js";
const Header = ({ mode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    mode();
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-darkBg">
      <div className="container">
        <div className="flex justify-between h-[72px] items-center">
          <div className="logo">
            <Link to="/">
              {" "}
              <img
                src={darkMode ? logoWhite : logo}
                alt="Logo"
                className="object-contain"
              />
            </Link>
          </div>
          <nav className="flex gap-11">
            <ul className="hidden md:flex items-center gap-11 text-lg font-medium dark:text-white">
              <li className="transition-color duration-200 hover:text-red">
                <Link to="/">Home</Link>
              </li>
              <li className="transition-color duration-200 hover:text-red">
                <Link to="/about">Celebrate</Link>
              </li>
              <li className="transition-color duration-200 hover:text-red">
                <Link to="/gifts">Gifts</Link>
              </li>
              <li className="transition-color duration-200 hover:text-red">
                <Link to="/new">New</Link>
              </li>
            </ul>
            <div className="flex text-lg gap-4 dark:text-white">
              <button onClick={toggleDarkMode}>
                {darkMode ? <BsMoon /> : <BsFillMoonFill />}
              </button>
              <button onClick={toggleMenu} className="text-lg md:hidden">
                <BsGrid />
              </button>
            </div>
          </nav>
          {/* Mobile menu  */}
          <div
            className={`w-full fixed top-0 left-0 bg-white min-h-screen p-6 dark:bg-darkBg ${
              showMenu ? "slide-in" : "slide-out"
            }`}
          >
            <ul className="text-lg flex flex-col gap-4 items-center dark:text-white">
              <li className="transition-color duration-200 hover:text-red">
                <Link to="/" className="hover:text-red">
                  Home
                </Link>
              </li>
              <li className="transition-color duration-200 hover:text-red">
                <Link to="/about" className="hover:text-red">
                  Celebrate
                </Link>
              </li>
              <li className="transition-color duration-200 hover:text-red">
                <Link to="/gifts" className="hover:text-red">
                  Gifts
                </Link>
              </li>
              <li className="transition-color duration-200 hover:text-red">
                <Link to="/new" className="hover:text-red">
                  New
                </Link>
              </li>
            </ul>
            <button
              onClick={toggleMenu}
              className="text-lg absolute top-6 right-6 dark:text-white"
            >
              <AiOutlineClose />
            </button>
          </div>
          {/* End Mobile Menu  */}
        </div>
      </div>
    </header>
  );
};

export default Header;
