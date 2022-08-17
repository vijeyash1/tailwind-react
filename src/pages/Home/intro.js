import React from "react";

function Intro() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 md:flex-row md:space-y-0 md:space-x-5 border-5 border-blue-700 p-20 h-screen">
      <div className="flex flex-col space-y-10">
        <h1 className="text-4xl font-extrabold text-lime-500">
          🍁Welcome To My Site🍁
        </h1>
        <p className="text-2xl font-bold text-black">
          This site is created with Tailwind css and React
        </p>
        <button className="bg-lime-500 px-4 py-2 text-black hover:bg-lime-800 hover:text-white">
          Get Started
        </button>
      </div>
      <div className="flex min-w-xs">
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_47dwpmff.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}

export default Intro;
