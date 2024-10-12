import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";

function Blog() {
  useEffect(() => {
    new Swiper(".swiper", {
      speed: 700,
      parallax: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <section className="blog">
      {/* <h3>Activities</h3>
      <div style={{ "--swiper-pagination-color": "#fff" }} className="swiper">
        <div className="parallax-bg" data-swiper-parallax="-23%"></div>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="content">
              <div className="title" data-content="Ghastly Ghost Tours" data-swiper-parallax="-500">
                Ghastly Ghost Tours
              </div>
              <div className="text" data-swiper-parallax="-300" data-swiper-parallax-opacity="0">
                <p>Explore the dark history of Ravenwood Manor with guided tours through its haunted halls.</p>
              </div>
            </div>
            <div className="image" data-swiper-parallax="-200">
              <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/943f5f64-3718-4d72-b4d0-d9f5a2b8af8e" alt="" />
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
      <p>Join us for a scary night of Halloween!</p>
      <button className="btn"><span>buy ticket</span></button> */}
    </section>
  );
}

export default Blog;
