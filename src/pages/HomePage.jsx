import React from "react";
import Hero from "../components/Hero";
import CardList from "../components/CardList";

function HomePage() {
  return (
    <div className="w-dvw">
      <div className="flex flex-col h-auto w-full p-[3rem] gap-[3rem]">
        <Hero />
        <CardList />
      </div>
    </div>
  );
}

export default HomePage;
