import React, { useEffect, useState } from "react";
import searchAPI, { SearchVideos } from "../API/ApiFunction";
import Loader from "./Loader";


function Videos({ newInput, categoryTitle }) {
  console.log(newInput, "from the images");
  let imagesArray = ["Mobiles", "Tablets", "America", "Nature", "Switzerland"];
  const [data, setData] = useState([]);
  console.log(data, "Recevied Image data");
  useEffect(() => {
    const getData = async () => {
      let rn = Math.floor(Math.random() * 5);
      const receivedData = await SearchVideos(newInput || imagesArray[rn]);
      if (receivedData) {
        console.log(receivedData.videos, "These are the videos I'm getting!");

        setTimeout(() => {
                    setData([...receivedData.videos]);

        }, 2500);
      }
    };
    getData();
  }, [newInput]);

  if(data.length===0){
    return <Loader/>
  }
  return (
    <div className="mt-10">
      <h2 className="lg:text-4xl text-3xl font-semibold text-center">{categoryTitle}</h2>

      <div className="images mt-[5em] flex lg:gap-12 gap-5 flex-wrap justify-center">
        {data &&
          data.map((video) => {
            console.log(video,"This is the video");

            return (
              <video
                src={video.video_files[0].link}
                controls
                className="w-[350px] h-[300px] rounded-md"
              poster={video.
video_pictures[0].picture}/>
            );
          })}
      </div>
    </div>
  );
}

export default Videos;
