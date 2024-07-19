import { useEffect, useRef } from "react";
import "./Home.css";

function mouseMove() {
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", handleWindowResize);

  const spansSlow = document.querySelectorAll(".spanSlow");
  const spansFast = document.querySelectorAll(".spanFast");

  let width = window.innerWidth;

  function handleMouseMove(e) {
    console.warn("mousemove");
    let normalizedPosition = e.pageX / (width / 2) - 1;
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;
    spansSlow.forEach((span) => {
      span.style.transform = `translate(${speedSlow}px)`;
    });
    spansFast.forEach((span) => {
      span.style.transform = `translate(${speedFast}px)`;
    });
  }
  //we need to recalculate width when the window is resized
  function handleWindowResize() {
    width = window.innerWidth;
  }
}

function canvasStuff(canvas) {
  // const context = canvas.getContext("2d");
  // context.fillText("entre\ntemps", 0, 0);

  // resize the canvas to fill browser window dynamically
  window.addEventListener("resize", resizeCanvas, false);

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    /**
     * Your drawings need to be inside this function otherwise they will be reset when
     * you resize the browser window and the canvas goes will be cleared.
     */
    drawStuff();
  }
  resizeCanvas();

  function drawStuff() {
    // do your drawing stuff here
  }
}

function Home() {
  mouseMove();
  const canvas = useRef(null);

  useEffect(() => {
    if (canvas && canvas.current) {
      console.log(canvas.current);
      canvasStuff(canvas.current);
    }
  }, []);

  return (
    <>
      {/* <h1>entretemps</h1>
      <p className="studio-gallery">studio / gallery</p> */}
      {/* <canvas ref={canvas} id="home-canvas"> */}
      <div className="wrap">
        <div>
          <div className="line">
            <div className="left">
              <div className="content">
                <span className="spanSlow">entre</span>
              </div>
            </div>
            <div className="right">
              <div className="content">
                <span className="spanSlow">entre</span>
              </div>
            </div>
          </div>
          <div className="line">
            <div className="left">
              <div className="content">
                <span className="spanSlow">temps</span>
              </div>
            </div>
            <div className="right">
              <div className="content">
                <span className="spanSlow">temps</span>
              </div>
            </div>
          </div>{" "}
        </div>
        <p className="studio-gallery">studio / gallery</p>
      </div>
      {/* </canvas>{" "} */}
    </>
  );
}

export default Home;
