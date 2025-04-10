import React from "react";
import { BiMenu, BiX } from "react-icons/bi";


const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <nav>
        {" "}
        <NavContent setMenuOpen={setMenuOpen} />{" "}
      </nav>
      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen?<BiX size={40} style={{color:"white"}}/>:<BiMenu size={40}/>}
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => {
  return (
    <>
      <h2>Hariswar Reddy</h2>
      <div>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>
          Experience
        </a>
        <a href="#work" onClick={() => setMenuOpen(false)}>
          Work
        </a>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          Programming
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>
      <a href="mailto:hariswarreddy241005@gmail.com">
        <button>Email</button>
      </a>
    </>
  );
};

export default Header;
