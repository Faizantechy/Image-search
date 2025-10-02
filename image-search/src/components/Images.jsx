import React, { useEffect, useState } from "react";
import searchAPI from "../API/ApiFunction";

function Images({ newInput, categoryTitle }) {
  console.log(newInput, "from the images");
  let imagesArray = ["Mobiles", "Tablets", "America", "Nature", "Switzerland"];
  const [data, setData] = useState([]);
  console.log(data, "Recevied Image data");
  useEffect(() => {
    const getData = async () => {
      let rn = Math.floor(Math.random() * 5);
      const receivedData = await searchAPI(newInput || imagesArray[rn]);
      if (receivedData) {
        setData([...receivedData.photos]);
      }
    };
    getData();
  }, [newInput]);
  return (
    <div className="mt-10">
      <h2 className="text-4xl font-semibold text-center">{categoryTitle}</h2>

      <div className="images mt-[5em] flex gap-12 flex-wrap justify-center">
        {data &&
          data.map((image) => {
            console.log(image.url);

            return (
              <img
                src={image.src.medium}
                alt=""
                className="w-[350px] h-[300px] rounded-md"
              />
            );
          })}
      </div>
    </div>
  );
}

export default Images;
