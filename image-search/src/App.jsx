import React, { useEffect, useState } from "react";
import searchAPI, { SearchVideos } from "./API/ApiFunction";
import Gallery from "./components/Gallery";


function App() {
  // const [data, setData] = useState([]);
  // console.log(data, "This is the data being received!");

  // useEffect(() => {
  //   const getData = async () => {
  //     const receivedData = await SearchVideos("Nature");
  //     if (receivedData) {
  //       console.log(receivedData.videos,"These ar ethe videos that I got!")
  //     }
  //   };
  //   getData();
  // }, []);

  return <div><Gallery/></div>;
}

export default App;
