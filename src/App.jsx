import React, { useEffect, useState } from "react";
import "./App.css";
import CallNasa from "./components/CallNasa";
import axios from "./utils/axios";
import { ImageContext } from "./context/ImageContext";

function App() {
  const [imgData, setImgData] = useState([]);
  const [like, setLike] = useState([]);
  const [testLike, setTestLike] = useState([]);

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
  function handleClickLike(fav) {
    if (like.find(({ date }) => date === fav.date) === undefined) {
      setLike([...like, fav]);
    }
    if (testLike.includes(fav.date)) {
      setTestLike(
        testLike.filter((item) => {
          return item !== fav.date;
        })
      );
    } else {
      setTestLike([...testLike, fav.date]);
    }
  }
  return (
    <div className="App">
      <ImageContext.Provider
        value={{
          imgData,
          like,
          setLike,
          testLike,
          setTestLike,
          handleClickLike,
        }}
      >
        <CallNasa />
      </ImageContext.Provider>
    </div>
  );
}

export default App;
