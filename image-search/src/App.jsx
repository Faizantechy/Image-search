import React, { useEffect, useState } from "react";
import searchAPI from "./API/ApiFunction";
import Gallery from "./components/Gallery";

function App() {
  const [data, setData] = useState([]);
  console.log(data, "This is the data being received!");

  useEffect(() => {
    const getData = async () => {
      const receivedData = await searchAPI("Nature");
      if (receivedData) {
        setData([...receivedData.photos]);
      }
    };
    getData();
  }, []);

  return <div><Gallery/></div>;
}

export default App;
