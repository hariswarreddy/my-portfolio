import React from "react";
import { Carousel } from "react-responsive-carousel";
import data from "../assets/data.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Work = () => {
  return (
    <div id="work">
      <h2>Work</h2>
      <section>
        <article>
          <Carousel
            showArrows={false}
            // showIndicators={false}
            showThumbs={false}
            showStatus={false}
            interval={2000}
            stopOnHover
            infiniteLoop
            autoPlay
          >
            {data.projects.map((i) => (
              <div className="workItem">
                {/* <img src={i.imgSrc} alt={i.title} /> */}
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

export default Work;
