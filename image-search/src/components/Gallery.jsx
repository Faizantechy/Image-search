import React, { useState } from "react";
import Images from "./Images";
import Videos from "./Videos";

function Gallery() {
  const [searchInput, setsearchInput] = useState("");
  const [newInput, setNewInput] = useState("");
  const [categoryTitle, setcategoryTitle] = useState("");
  const [toggle, settoggle] = useState(true);
  console.log(newInput, "This is the New input being received!");

  console.log(searchInput);
  return (
    <div className="w-full  space-y-5 h-full px-4 py-10 flex flex-col  gap-10 justify-center items-center">
      <h1 className="lg:text-5xl text-4xl font-bold mt-10">
        {toggle ? "PickyShots" : "VideShots"}
      </h1>

      <div className="toggle">
        <button
          className={`font-bold cursor-pointer ${
            toggle
              ? "bg-black border-2 text-white"
              : "bg-white border-2 text-black"
          } lg:px-4 lg:py-4 px-2 py-2 rounded-lg`}
          onClick={() => {
            settoggle((prev) => !prev);
          }}
        >
          Images
        </button>

        <button
          className={`font-bold cursor-pointer ${
            !toggle
              ? "bg-black border-2 text-white"
              : "bg-white border-2 text-black"
          } lg:px-4 lg:py-4 px-2 py-2 rounded-lg`}
          onClick={() => {
            settoggle((prev) => !prev);
          }}
        >
          Videos
        </button>
      </div>
      <div className="input-box mt-10 flex overflow-hidden">
        <input
          type="text"
          className="lg:w-[480px] px-3 py-2 lg:px-5  lg:text-lg lg:py-4 rounded-md text-black bg-gray-200"
          placeholder={`${toggle ? "Search images" : "Search videos"}`}
          value={searchInput}
          onChange={(e) => {
            setsearchInput(e.target.value);
          }}
        />

        <button
          className="px-5  py-4 bg-black  active:scale-90 cursor-pointer text-white"
          onClick={() => {
            setNewInput(searchInput);
          }}
        >
          <i className="ri-search-line text-xl"></i>
        </button>
      </div>

      <div className="categories flex gap-8 flex-wrap lg:justify-end justify-center">
        <button
          className=" bg-black text-white cursor-pointer active:scale-90 rounded-md text-lg px-5 py-1"
          onClick={() => {
            setNewInput("Mountain");
            setcategoryTitle(
              `${toggle ? "Mountain images" : "Mountain Videos"}`
            );
          }}
        >
          Mountain
        </button>
        <button
          className=" bg-black text-white cursor-pointer active:scale-90 rounded-md text-lg px-5 py-1"
          onClick={() => {
            setNewInput("Beaches");
            setcategoryTitle(`${toggle ? "Beaches images" : "Beaches Videos"}`);
          }}
        >
          Beaches
        </button>
        <button
          className=" bg-black text-white cursor-pointer active:scale-90 rounded-md text-lg px-5 py-1"
          onClick={() => {
            setNewInput("Birds");
            setcategoryTitle(`${toggle ? "Birds images" : "Birds Videos"}`);
          }}
        >
          Birds
        </button>
        <button
          className=" bg-black text-white cursor-pointer active:scale-90 rounded-md text-lg px-5 py-1"
          onClick={() => {
            setNewInput("Flowers");
            setcategoryTitle(`${toggle ? "Flowers images" : "Flowers Videos"}`);
          }}
        >
          Flowers
        </button>
      </div>

      {toggle ? (
        <Images newInput={newInput} categoryTitle={categoryTitle} />
      ) : (
        <Videos newInput={newInput} categoryTitle={categoryTitle} />
      )}
    </div>
  );
}

export default Gallery;
