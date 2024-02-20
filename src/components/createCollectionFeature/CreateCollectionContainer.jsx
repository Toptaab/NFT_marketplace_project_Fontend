import React, { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { ImageUploadIcon } from "../../icons";
import useCollectionContext from "./hook/useCollectionContext";

function CreateCollectionContainer() {
  const [traits, settraits] = useState([{}]);

  const {handelModal} = useCollectionContext()

  const traitsHandleChange = (index, value) => {
    console.log(traits);
    const newTraitsArray = [...traits];
    newTraitsArray[index].name = value;
    settraits(newTraitsArray);

    if (index === traits.length - 1 && value.trim() !== "") {
      settraits([...newTraitsArray, {}]);
    }
  };

  return (
    <div>
      <div className="bg-gray fixed inset-0 opacity-60"></div>
      <div className="bg-white absolute z-10 top-[10%]  right-[30%] left-[30%] rounded-[1.5rem] ">
        <div className="flex flex-col justify-between items-center p-[2rem] w-full gap-[2rem]">
          <div className="text-[18px] font-semibold flex justify-between w-full">
            <p className="font-semibold">Collection ERC-721</p>
            <div className="font-semibold" role="button" onClick={handelModal}>x</div>
          </div>
          <div className="flex gap-[2rem] px-[3rem] items-center">
            <div>
              <ImageUploadIcon />
            </div>
            <div className=" flex flex-col gap-[1rem]">
              <p className="text-center w-full text-gray">
                At least 300x300 pixels, max. size 5MB, GIF, JPEG or PNG
              </p>
              <Button name="Choose File"></Button>
            </div>
          </div>
          <div className="w-[90%] flex flex-col gap-[0.5rem]">
            <label className="font-semibold" htmlFor="Collection Name">Collection Name</label>
            <Input
              name="Collection Name"
              placeholder="Enter Collection Name"
            ></Input>
          </div>
          <div className="w-[90%] flex flex-col gap-[0.5rem]">
            <label className="font-semibold" htmlFor="Description">Description</label>
            <Input name="Description" placeholder="Description"></Input>
          </div>
          <div className="flex w-[90%] gap-[0.5rem]">
            <div className="flex-1 flex flex-col gap-[0.5rem] ">
              <label className="font-semibold" htmlFor="price">Price</label>
              <Input name="price" placeholder="Enter Price"></Input>
            </div>
            <div className="w-[20%] flex items-end">
              <select
                className="border-2 border-gray rounded-2xl p-2 w-full flex items-center"
                name=""
                id=""
              >
                <option value="ETH">ETH</option>
                <option value="BNB">BNB</option>
              </select>
            </div>
          </div>
          <div className="w-[90%] flex flex-col gap-[0.5rem]">
            <h5 className="font-semibold">Traits Option</h5>
            <div className="flex flex-col gap-[0.5rem]">
              {traits.map((input, index) => (
                <input
                  key={index}
                  name="traits"
                  className="border-2 border-gray rounded-2xl p-2 w-full flex items-center gap-2"
                  type="text"
                  placeholder="Trait"
                  value={input.traits}
                  onChange={(e) => traitsHandleChange(index, e.target.value)}
                />
              ))}
            </div>
          </div>
          <div className="w-[90%] pt-[1rem]">
            <Button name="Create Collection"></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCollectionContainer;
