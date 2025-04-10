import data from "../assets/data.json";
import React from 'react';
import { motion } from "framer-motion";

const options = {
    div: {
        initial: {
            y: "-100%",
            opacity:0
        },
        whileInView: {
            y: 0,
            opacity:1
        }
    }
}

const Timeline = () => {
  return (
      <div id='timeline'>
          <div className="timelineBox">
              {
                  data.projects.map((item, index) => (
                      <TimelineItem
                        heading={item.title}
                        text={item.date}
                          index={index}
                          key={item.title}
                      />
                  ))
              }
          </div>
    </div>
  )
}
const TimelineItem = ({heading,text,index}) => (
    <motion.div {...options.div} className={`timelineItem ${index % 2 === 0 ? "leftTimeline" : "rightTimeline"}` } transition={{delay:index*0.3,duration:0.6,type: "tween"}} >
        <div>
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    </motion.div>
)
export default Timeline