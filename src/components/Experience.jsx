import React from "react";
import { Carousel } from "react-responsive-carousel";
import data from "../assets/data.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Experience = () => {
  return (
    <div id="experience">
      <h2>Experience</h2>
      <section>
        <article>
                  <Carousel
                  showArrows={false}
                  showIndicators={false}
                      showThumbs={false}
                      showStatus={false}
                      interval={1000}
                      infiniteLoop
                      autoPlay
                  >
            
              {data.experience.map((i) => (
                <div className="experienceItem">
                  <aside>
                    <h3>{i.title}</h3>
                    <p>{i.description}</p>
                    <a target="blank" href={i.url}>
                      View Demo
                    </a>
                  </aside>
                </div>
              ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Experience;
