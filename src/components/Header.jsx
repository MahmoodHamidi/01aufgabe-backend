import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className=" p-4 text-2xl text-center fixed w-full top-0 z-10">
      <nav className=" navbar">
        <NavLink className=" text-white  pl-4 pr-4 link-nav" to="/">
          Home
        </NavLink>
        <NavLink
          className=" text-white border-l-2 pl-4 pr-4 link-nav"
          to="/todo"
        >
          Todo List
        </NavLink>
        <NavLink
          className=" text-white border-l-2 pl-4 pr-4 link-nav"
          to="/keylogger"
        >
          Key Logger
        </NavLink>
        <NavLink
          className=" text-white border-l-2 pl-4 pr-4 link-nav"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className=" text-white border-l-2 pl-4 pr-4 link-nav"
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
