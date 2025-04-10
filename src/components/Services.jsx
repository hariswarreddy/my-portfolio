import React from "react";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";

const Services = () => {
    const options = {
        div1: {
            initial: {
                x: "-100%",
                opacity:0
            },
            whileInView: {
                x: 0,
                opacity:1
            }
        },
        div2: {
            initial: {
                x: "100%",
                opacity:0
            },
            whileInView: {
                x: 0,
                opacity:1
            }
        }
    }
  return (
    <div id="services">
      <h2>Programming</h2>
      <section >
        <motion.div className="serviceBox1" {...options.div1} >
          <h3>2+</h3>
          <p>Years Experience</p>
        </motion.div>
        <motion.div className="serviceBox2"  {...options.div2} >
          <p>
            I enjoy solving coding problems and have been doing competitive
            programming in C++. I’ve learned and practiced important topics like
            arrays, strings, linked lists, hash tables, recursion, binary
            search, stacks, queues, trees, binary trees, and graphs. Working on
            these topics has helped me understand how to write better and faster
            code. I’ve solved more than 250 problems on LeetCode, which has improved
            my problem-solving and thinking skills.
                  </p>
                  <div>
                  <span>Check it out here:</span>
                  <a href="https://leetcode.com/u/hariswarreddy"><SiLeetcode /> Leetcode</a>
                  </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
