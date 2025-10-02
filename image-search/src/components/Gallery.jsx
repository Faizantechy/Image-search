import React, { useState } from "react";
import Images from "./Images";

function Gallery() {
  const [searchInput, setsearchInput] = useState("");
  const [newInput, setNewInput] = useState("");
  const [categoryTitle, setcategoryTitle] = useState("");
  const [toggle, settoggle] = useState(true);
  console.log(newInput, "This is the New input being received!");

  console.log(searchInput);
  return (
    <div className="w-full h-full px-4 py-10 flex flex-col  gap-10 justify-center items-center">
      <h1 className="text-5xl font-bold mt-10">PickyShots</h1>

      <div
        className="toggle"
        onClick={(e) => {
          if (e.target.value === "Images") {
            e.target.style.backgroundColor = "black";
            e.target.style.color = "white";
          } else {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "black";
          }
        }}
      >
        <button
          className={
            " font-bold cursor-pointer bg-black border-2 border-black text-white px-4 py-4 rounded-lg"
          }
        >
          Images
        </button>
        <button className=" font-bold px-4 py-4 rounded-lg border-2 cursor-pointer border-black">
          Videos
        </button>
      </div>
      <div className="input-box mt-10 flex overflow-hidden">
        <input
          type="text"
          className="w-[480px] px-5  text-lg py-4 rounded-md text-black bg-gray-200"
          placeholder="Search"
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

      <div className="categories flex gap-8">
        <button
          className=" bg-black text-white cursor-pointer active:scale-90 rounded-md text-lg px-5 py-1"
          onClick={() => {
            setNewInput("Mountain");
            setcategoryTitle("Mountain Images");
          }}
        >
          Mountain
        </button>
        <button
          className=" bg-black text-white cursor-pointer active:scale-90 rounded-md text-lg px-5 py-1"
          onClick={() => {
            setNewInput("Beaches");
            setcategoryTitle("Beaches Images");
          }}
        >
          Beaches
        </button>
        <button
          className=" bg-black text-white cursor-pointer active:scale-90 rounded-md text-lg px-5 py-1"
          onClick={() => {
            setNewInput("Birds");
            setcategoryTitle("Birds Images");
          }}
        >
          Birds
        </button>
        <button
          className=" bg-black text-white cursor-pointer active:scale-90 rounded-md text-lg px-5 py-1"
          onClick={() => {
            setNewInput("Flowers");
            setcategoryTitle("Flowers Images");
          }}
        >
          Flowers
        </button>
      </div>

      <Images newInput={newInput} categoryTitle={categoryTitle} />
    </div>
  );
}

export default Gallery;
