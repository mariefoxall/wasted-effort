import "./Home.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const handleMouseEnter = () => {
    gsap.timeline().to("#circles__text--1", {
      duration: 10,
      scale: 1,
      delay: 0,
      ease: "power2.inOut",
      rotate: "+=360",
      transformOrigin: "50% 50%",
    });
    gsap.timeline().to("#circles__text--2", {
      duration: 8,
      scale: 1,
      delay: 0.5,
      ease: "power2.inOut",
      rotate: "+=360",
      transformOrigin: "50% 50%",
    });
    gsap.timeline().to("#circles__text--3", {
      duration: 6,
      scale: 1,
      delay: 1,
      ease: "power2.inOut",
      rotate: "+=360",
      transformOrigin: "50% 50%",
    });
    gsap.timeline().to("#circles__text--4", {
      duration: 4,
      scale: 1,
      delay: 1.5,
      ease: "power2.inOut",
      rotate: "+=360",
      transformOrigin: "50% 50%",
    });
  };

  useEffect(() => {
    handleMouseEnter();
  }, []);

  return (
    <>
      <div className="home-section">
        <svg
          className="circles"
          width="100%"
          height="100%"
          viewBox="0 0 1400 1400"
        >
          <def>
            <path
              id="circle-1"
              d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5"
            />
            <path
              id="circle-2"
              d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5"
            />
            <path
              id="circle-3"
              d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5"
            />

            <path
              id="circle-4"
              d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5"
            />
          </def>
          <text
            id="circles__text--1"
            className="circles__text circles__text--1"
          >
            <textPath
              className="circles__text-path"
              xlinkHref="#circle-1"
              aria-label=""
              textLength="2830"
            >
              thank you for being on this journey&nbsp;
            </textPath>
          </text>
          <text
            id="circles__text--2"
            className="circles__text circles__text--2"
          >
            <textPath
              className="circles__text-path"
              xlinkHref="#circle-2"
              aria-label=""
              textLength="2001"
            >
              it seems very nice here&nbsp;
            </textPath>
          </text>
          <text
            id="circles__text--3"
            className="circles__text circles__text--3"
          >
            <textPath
              className="circles__text-path"
              xlinkHref="#circle-3"
              aria-label=""
              textLength="1341"
            >
              this is a soft place to land&nbsp;
            </textPath>
          </text>
          <text
            id="circles__text--4"
            className="circles__text circles__text--4"
          >
            <textPath
              className="circles__text-path"
              xlinkHref="#circle-4"
              aria-label=""
              textLength="836"
            >
              wasted effort&nbsp;
            </textPath>
          </text>
        </svg>

        <button className="enter" onMouseEnter={handleMouseEnter}>
          <Link to="/portfolio">
            <div className="enter__bg"></div>
            <span className="enter__text">Enter</span>
          </Link>
        </button>
      </div>
    </>
  );
}

export default Home;
