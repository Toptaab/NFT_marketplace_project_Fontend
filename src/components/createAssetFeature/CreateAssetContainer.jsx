import React, { useRef } from "react";
import Card from "../Card";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import useCreateCollectionContext from "../createCollectionFeature/hook/useCreateCollectionContext";
import CreateCollectionModal from "../createCollectionFeature/CreateCollectionModal";
import useAssetCreateContext from "./hook/useCreateAssetContext";
import Spinner from "../../ui/Spinner";

function CreateAssetContainer() {
  const { openModal, handelModal } = useCreateCollectionContext();
  const {
    handleUploadImage,
    loading,
    existCollection,
    handleSummit,
    handleChangeInput,
    input,
    handleTraitChange,
    image,
  } = useAssetCreateContext();
  let collectionIndex;
  const fileInputEl = useRef(null)


  if (loading) {
    return <Spinner />;
  }

  if (input.collectionId) {
    collectionIndex = existCollection.findIndex(
      (i) => i.id === +input.collectionId
    );
  }

  return (
    <div className="w-full p-[3rem] flex flex-col justify-start items-center gap-[2rem]">
      {openModal ? <CreateCollectionModal /> : null}
      <input type="file"  className="hidden" ref={fileInputEl} onChange={handleUploadImage}/>
      <div className="font-bold text-[51px]">Create New NFT</div>
      <div className="flex justify-center gap-[2rem]">
        <div className="w-[30rem] flex flex-col gap-[2rem]">
          <div className="flex flex-col gap-[0.5rem]">
            <label className="font-semibold" htmlFor="">
              Upload file
            </label>
            <div className="border-dashed border-[2px] border-gray rounded-[1rem] w-full h-[9rem] flex flex-col justify-center items-center gap-[1rem]">
              <p>PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
              <div className="w-[30%]">
                <Button name="Choose file" onClick={()=> fileInputEl.current.click()} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <label className="font-semibold" htmlFor="">
              Choose Collection
            </label>
            <div className="flex gap-[0.5rem]">
              <select
                onChange={handleChangeInput}
                name="collectionId"
                className="border-2 border-gray rounded-2xl p-2 w-full flex items-center gap-2"
                defaultValue="default"
              >
                <option value="default" disabled>
                  Select Collection
                </option>
                {existCollection.map((value) => (
                  <option key={value.id} value={value.id}>
                    {value.name}
                  </option>
                ))}
              </select>

              <div className="w-[50%]">
                <Button name="Create New" onClick={handelModal} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <label className="font-semibold" htmlFor="">
              Name
            </label>
            <Input
              placeholder="Enter name"
              name="name"
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <label className="font-semibold" htmlFor="">
              Traits
            </label>

            {input.collectionId ? (
              existCollection[collectionIndex].Traits.map((value, index) => (
                <div className=" flex gap-[1rem]" key={value.id}>
                  <div className="border-2 border-gray rounded-2xl p-2 w-full flex items-center gap-2 ">
                    {value.name}
                  </div>
                  <Input
                    placeholder="Attribute"
                    name="TraitAttributes"
                    onChange={(e) => handleTraitChange(e, index, value.id)}
                  />
                </div>
              ))
            ) : (
              <div className=" flex gap-[1rem]">
                <div className="border-2 border-gray rounded-2xl p-2 w-full flex items-center gap-2 text-gray">
                  Traits
                </div>
                <Input placeholder="Attribute" />
              </div>
            )}
          </div>
          <div>
            <Button name="Create" onClick={handleSummit} />
          </div>
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <label className="font-semibold">Preview</label>
          <Card
          nftImage={image? URL.createObjectURL(image) : null}
            onClick={()=> {}}
            collectionImage={existCollection[collectionIndex]?.image}
            CollectionName={existCollection[collectionIndex]?.name}
            nftName={input?.name || "My NFT"}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateAssetContainer;
