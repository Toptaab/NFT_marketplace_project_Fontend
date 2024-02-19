import React from "react";
import Card from "../Card";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function CreateAssetContainer() {
  return (
    <div className="w-full p-[3rem] flex flex-col justify-start items-center gap-[2rem]">
      <div className="font-bold text-[51px]">Create New NFT</div>
      <div className="flex justify-center gap-[2rem]">
        <div className="w-[30rem] flex flex-col gap-[2rem]">
          <div className="flex flex-col gap-[0.5rem]">
            <label className="font-semibold" htmlFor="">Upload file</label>
            <div className="border-dashed border-[2px] border-gray rounded-[1rem] w-full h-[9rem] flex flex-col justify-center items-center gap-[1rem]">
              <p>PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
              <div className="w-[30%]">
                <Button name="Choose file" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <label className="font-semibold" htmlFor="">Choose Collection</label>
            <div className="flex gap-[0.5rem]">
              <Input />
              <div className="w-[50%]">
                <Button name="Create New" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <label className="font-semibold" htmlFor="">Name</label>
            <Input placeholder="Enter name" />
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <label className="font-semibold" htmlFor="">Traits</label>
            <div className=" flex gap-[1rem]">
              <Input placeholder="Traits" />
              <Input placeholder="Attribute" />
            </div>
          </div>
          <div>
            <Button name="Create" />
          </div>
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <label className="font-semibold" >Preview</label>
          <Card
            creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
            creator="Creator"
          />
        </div>
      </div>
    </div>
  );
}

export default CreateAssetContainer;
