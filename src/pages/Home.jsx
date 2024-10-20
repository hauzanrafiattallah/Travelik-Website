import React from "react";


const Home = () => {
  return (
    <>
      <div>
        <div>
          <video
            autoPlay
            muted
            loop
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={MainVideo} />
          </video>
        </div>
      </div>
    </>
  );
};

export default Home;
