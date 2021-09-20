import React, { useEffect, useState } from "react";
import "./App.css";
import CallNasa from "./components/CallNasa";
import axios from "./utils/axios";
import { ImageContext } from "./context/ImageContext";

function App() {
  const [imgData, setImgData] = useState([]);
  const [like, setLike] = useState([]);
  const [saveLike, setsaveLike] = useState([]);

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
    if (saveLike.includes(fav.date)) {
      setsaveLike(
        saveLike.filter((item) => {
          return item !== fav.date;
        })
      );
    } else {
      setsaveLike([...saveLike, fav.date]);
    }
  }

  const getLocalSaves = () => {
    if (localStorage.getItem("saved") === null) {
      localStorage.setItem("saved", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("saved"));
      setsaveLike((x) => (x = todoLocal));
    }
  };
  useEffect(() => {
    getLocalSaves();
  }, []);

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(saveLike));
  }, [saveLike]);

  return (
    <div className="App">
      <ImageContext.Provider
        value={{
          imgData,
          like,
          setLike,
          saveLike,
          setsaveLike,
          handleClickLike,
        }}
      >
        <CallNasa />
      </ImageContext.Provider>
    </div>
  );
}

export default App;
