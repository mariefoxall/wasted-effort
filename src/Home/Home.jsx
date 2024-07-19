import { useEffect, useRef } from "react";
import "./Home.css";
import { makeTextWavy } from "../animations";

function Home() {
  const animated = useRef(null);

  useEffect(() => {
    if (animated && animated.current) {
      makeTextWavy("entre\ntemps", animated.current);
    }
  }, []);

  return (
    <>
      <div className="home-section">
        <h1 className="home-heading" ref={animated}></h1>
        <p className="studio-gallery">studio / gallery</p>
      </div>
    </>
  );
}

export default Home;
