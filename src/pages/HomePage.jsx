import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function HomePage() {
  return (
    <div className="w-dvh">
      <Navbar />

    <div className="flex flex-col h-auto w-full p-[3rem]">
      <Hero />

    </div>

    </div>
  );
}

export default HomePage;
