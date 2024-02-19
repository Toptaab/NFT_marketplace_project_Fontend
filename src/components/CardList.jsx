import React from "react";
import Card from "./Card";
import BtnTypeSelection from "../ui/Hero/BtnTypeSelection";

function CardList() {
  return (
    <div className="w-full flex flex-col gap-[2rem]">
      <div className="flex justify-between">
        <div className="font-semibold text-[18px]">trending NFTs</div>
        <div className="gap-2 flex">
          <BtnTypeSelection name="NFT" isPrimary={true} />
          <BtnTypeSelection name="Collection" isPrimary={false} />
        </div>
      </div>
      <div className="flex flex-wrap align-top justify-center gap-[4rem] h-[50rem] overflow-auto">
        <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />
                <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />
        <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />
        <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />
        <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />
        <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />
        <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />
        <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />
                <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />
        <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />
        <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />
        <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />
        <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />
        <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />
        <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />
        <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />
        <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />
        <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />
        <Card
          creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
          creator="Creator"
        />

      </div>
    </div>
  );
}

export default CardList;
