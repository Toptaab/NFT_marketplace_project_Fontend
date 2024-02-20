import React from "react";
import HeroCard from "../../ui/Hero/HeroCard";
import HeroLeft from "../../ui/Hero/HeroLeft";

function Hero() {
  return (
    <div className="flex  gap-[2rem] items-start">
      <HeroLeft />
      <HeroCard
        nftName="Space Walker"
        creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
        creator="Creator"
        image="https://image.cdn2.seaart.ai/2023-06-14/34223581769797/aebcd81f8a11378ac6f030a8dd85ffc60f69e71f_high.webp"
      />
    </div>
  );
}

export default Hero;
