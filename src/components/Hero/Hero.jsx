import React from "react";

const Hero = () => {
  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          {/* text content section */}
          <div className="text-white">
            <p>Our package</p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Search Your Destination
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
