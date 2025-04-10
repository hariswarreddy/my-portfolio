import React from "react";
import { BsArrowUpCircle, BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <h2>Hariswar Reddy</h2>
      </div>
      <div className="mid">
        <a href="https://github.com/hariswarreddy">
          <BsGithub size={25} /> <p> Github</p>
        </a>
        <a href="https://linkedin.com/hari2410">
          <LiaLinkedin size={30} />
          <p>Linkedin</p>
        </a>
        <a href="https://leetcode.com/u/hariswarreddy">
          <SiLeetcode size={25} />
          <p>Leetcode</p>
        </a>
      </div>
      <div className="right">
        <a href="#home"><BsArrowUpCircle size={30} /></a>
        <div>
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#services">Programming</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
