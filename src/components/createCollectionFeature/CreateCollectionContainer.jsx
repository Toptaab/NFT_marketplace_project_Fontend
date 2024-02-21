import React, { useRef, useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { ImageUploadIcon } from "../../icons";
import useCollectionContext from "./hook/useCollectionContext";

function CreateCollectionContainer() {
  const {
    traits,
    traitsHandleChange,
    handelModal,
    handleChangeInput,
    image,
    handleUploadImage,
    handleSummit,
  } = useCollectionContext();
  const fileEl = useRef(null);

  console.log(image)

  return (
    <div>
      <div className="bg-gray fixed inset-0 opacity-60"></div>
      <div className="bg-white absolute z-10 top-[10%]  right-[30%] left-[30%] rounded-[1.5rem] ">
        <input
          type="file"
          className="hidden"
          ref={fileEl}
          onChange={handleUploadImage}
        />
        <div className="flex flex-col justify-between items-center p-[2rem] w-full gap-[2rem]">
          <div className="text-[18px] font-semibold flex justify-between w-full">
            <p className="font-semibold">Collection ERC-721</p>
            <div className="font-semibold" role="button" onClick={handelModal}>
              x
            </div>
          </div>
          <div className="flex gap-[2rem] px-[3rem] items-center">
            {image ? (
              <img
                className="w-[10rem] h-[10rem]"
                src={URL.createObjectURL(image)}
                alt=""
              />
            ) : (
              <div onClick={() => fileEl.current.click()} role="button">
                <ImageUploadIcon />
              </div>
            )}
            <div className=" flex flex-col gap-[1rem]">
              <p className="text-center w-full text-gray">
                At least 300x300 pixels, max. size 5MB, GIF, JPEG or PNG
              </p>
              <Button
                name="Choose File"
                onClick={() => fileEl.current.click()}
              ></Button>
            </div>
          </div>
          <div className="w-[90%] flex flex-col gap-[0.5rem]">
            <label className="font-semibold" htmlFor="Collection Name">
              Collection Name
            </label>
            <Input
              onChange={handleChangeInput}
              name="name"
              placeholder="Enter Collection Name"
            ></Input>
          </div>
          <div className="w-[90%] flex flex-col gap-[0.5rem]">
            <label className="font-semibold" htmlFor="Description">
              Description
            </label>
            <Input
              name="description"
              placeholder="Enter Description"
              onChange={handleChangeInput}
            ></Input>
          </div>
          <div className="w-[90%] flex flex-col gap-[0.5rem]">
          <label className="font-semibold" htmlFor="price">
                Category
              </label>
            <select
              className="border-2 border-gray rounded-2xl p-2 w-full flex items-center gap-2"
              name="categoryId"
              defaultValue="defaul"
              onChange={handleChangeInput}
            >
              <option value="defaul" disabled>
                Plases Select Category
              </option>
              <option value="1">Art</option>
              <option value="2">Gaming</option>
              <option value="3">Music</option>
              <option value="4">Membership</option>
              <option value="5">Photography</option>
            </select>
          </div>
          <div className="flex w-[90%] gap-[0.5rem]">
            <div className="flex-1 flex flex-col gap-[0.5rem] ">
              <label className="font-semibold" htmlFor="price">
                Price
              </label>
              <Input
                name="price"
                placeholder="Enter Price"
                onChange={handleChangeInput}
              ></Input>
            </div>
            <div className="max-w-[40%] flex items-end min-w-[4.5rem]">
              <select
                className="border-2 border-gray rounded-2xl p-2 w-full flex items-center"
                name="chainId"
                defaultValue="defaul"
                onChange={handleChangeInput}
              >
                <option value="defaul" disabled>
                  Selection Chain
                </option>
                <option value="1">ETH</option>
                <option value="2">BNB</option>
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
            <Button onClick={handleSummit} name="Create Collection"></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCollectionContainer;
