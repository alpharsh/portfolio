import React, { useState } from "react";
import "./navbar.css";
import { FaTimes } from "react-icons/fa";
import { menu } from "../../data";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBarsStaggered } from "react-icons/fa6";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="card flex__center navbar">
      {showSidebar && (
        <div
          className="fixed top-0 left-0 h-full min-h-screen w-full bg-black/50 bg-opacity-50 z-[201] select-none cursor-pointer"
          onClick={() => setShowSidebar(!showSidebar)}
        ></div>
      )}
      <div
        className="flex__center logo cursor-pointer"
        onClick={() => scroll.scrollToTop()}
      >
        <img src="logo.png" className="w-9 md:w-11 h-9 md:h-11" alt="logo" />
      </div>
      <aside className={`flex__center sidebar ${showSidebar && "visible"}`}>
        <div className="flex sidebar__top">
          <span
            className="icon__container close__btn"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <FaTimes />
          </span>
        </div>
        <div className="flex sidebar__middle">
          {menu.map((list, index) => (
            <Link
              to={list.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={index}
              className="tab"
              activeClass="btn__shine"
            >
              {list.name}
            </Link>
          ))}
        </div>
      </aside>
      <div className="flex__center gap-[20px]">
        <Link
          to="contact"
          className="group btn flex__center overflow-hidden hover:!text-blue-100 relative pr-[3.3rem] rounded-[0.7rem] "
        >
          Resume
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px"></span>
          <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[4px] blur-sm "></span>
        </Link>

        <FaBarsStaggered
          className="menu"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
