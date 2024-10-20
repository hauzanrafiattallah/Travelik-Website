import React from "react";
import mainVideo from "../assets/video/main.mp4";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <>
      <div>
        <div className="relative h-[700px]">
          <video
            autoPlay
            muted
            loop
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={mainVideo} type="video/mp4" />
          </video>
          <Hero/>
        </div>
      </div>
    </>
  );
};

export default Home;
