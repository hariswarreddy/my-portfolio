import React from "react";
import {  motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import logo from "../assets/mee.jpeg";

const Home = () => {
  

  const options = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: "0",
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: "0",
        opacity: 1,
      },
    },
  };
  return (
    <>
    <div id="home">
      <section>
        <div>
          <motion.h1 {...options.h1}>
            Hi I'm <br />
            Hariswar Reddy
          </motion.h1>
            <div className="typewriterpara">
            <Typewriter
              words = {["A Full Stack Developer","A Competitive Programmer","A Frontend Developer", "A Backend Developer", "A Web Designer"]} //Have to change
                cursor
                loop
                typeSpeed={50}
                deleteSpeed={30}
          />
          </div>
          <div className="work">
            <a href="mailto:hariswarreddy241005@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
          
          <aside>
            <article data-special >
              <p>Contact</p>
              <span>hariswarreddy241005@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={logo} alt="Hariswar Reddy" />
      </section>
      <BsChevronDown />
    </div>
      
    </>
    
  );
};

export default Home;
