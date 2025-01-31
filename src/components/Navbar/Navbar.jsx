import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/Logo";
import { FaTimes } from "react-icons/fa";
import { menu } from "../../data";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";

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
        <Logo />
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
          className="btn flex__center overflow-hidden relative pr-[3.3rem] rounded-[0.7rem] shadow-[0_0_1.6rem_-0.6rem_var(--color-ui-2)]"
        >
          Resume
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
