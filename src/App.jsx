import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import CallNasa from "./components/CallNasa";
import axios from "./utils/axios";
import { ImageContext } from "./context/ImageContext";

function App() {
  // const ImageContext = createContext();

  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    async function nasaApiCall() {
      const request = await axios.get();
      setImgData(request.data);
    }

    nasaApiCall();
    // return () => {
    //   cleanup;
    // };
  }, []);

  return (
    <div className="App">
      <ImageContext.Provider value={imgData}>
        <CallNasa />
      </ImageContext.Provider>
      APP
    </div>
  );
}

export default App;
