import gsap from "gsap";
import React, { useEffect } from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import "./Cursor.css";

function App() {
  useEffect(() => {
    const bigBall = document.querySelector(".cursor__big-ball");
    const smallBall = document.querySelector(".cursor__small-ball");
    const hoverables = document.querySelectorAll(".hoverable");
    if (!bigBall || !smallBall || !hoverables) return;
    // create an array of colors
    const colors = ["#ff0000", "#00ff00", "#0000ff"];

    // set an interval to change the border color after every 3 seconds
    setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      gsap.set(smallBall, { borderColor: randomColor });
    }, 3000);
    // Listeners
    document.body.addEventListener("mousemove", onMouseMove);
    for (let i = 0; i < hoverables.length; i++) {
      hoverables[i].addEventListener("mouseenter", onMouseHover);
      hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
    }

    // Move the cursor
    function onMouseMove(e) {
      gsap.to(bigBall, {
        duration: 0.4,
        x: e.clientX - bigBall.clientWidth / 2,
        y: e.clientY - bigBall.clientHeight / 2,
      });

      gsap.to(smallBall, {
        duration: 0.1,
        x: e.clientX - smallBall.clientWidth / 2,
        y: e.clientY - smallBall.clientHeight / 2,
      });
    }

    // Hover an element
    function onMouseHover() {
      gsap.to(bigBall, {
        duration: 0.3,
        scale: 4,
      });
    }

    function onMouseHoverOut() {
      gsap.to(bigBall, {
        duration: 0.3,
        scale: 1,
      });
    }
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <div className="app">
      <div className="cursor">
        <div className="cursor__ball cursor__big-ball">
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
          </svg>
        </div>

        <div className="cursor__ball cursor__small-ball">
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
          </svg>
        </div>
      </div>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
