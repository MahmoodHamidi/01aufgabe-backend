import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-10">
      <div className="flex items-center justify-between p-2">
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Nav Links */}
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col items-center gap-3 pb-4 md:flex md:flex-row md:justify-center md:items-center md:gap-6`}
      >
        <NavLink
          className="text-white px-4 link-nav"
          to="/"
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          className="text-white px-4 md:border-l-2 link-nav"
          to="/todo"
          onClick={closeMenu}
        >
          Todo List
        </NavLink>
        <NavLink
          className="text-white px-4 md:border-l-2 link-nav"
          to="/keylogger"
          onClick={closeMenu}
        >
          Key Logger
        </NavLink>
        <NavLink
          className="text-white px-4 md:border-l-2 link-nav"
          to="/about"
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink
          className="text-white px-4 md:border-l-2 link-nav"
          to="/contact"
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
