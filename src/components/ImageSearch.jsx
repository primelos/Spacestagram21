import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { endDate } from "../utils/axios";
import DatePicker from "@mui/lab/DatePicker";
import Axios from "axios";
import Wrap from "./Wrap";
import { ImageContext } from "../context/ImageContext";

const ImageSearch = () => {
  const [nasaDay, setNasaDay] = useState(endDate);
  const { saveLike, handleClickLike } = useContext(ImageContext);

  function getNewDate(moment) {
    if (moment !== null) {
      let year = moment.year();
      let month = moment.month() + 1;
      if (String(month).length === 1) {
        month = ("0" + String(month)).slice(-2);
      }
      let day = moment.date();
      if (String(day).length === 1) {
        day = ("0" + String(day)).slice(-2);
      }

      if (
        String(year).length === 4 &&
        String(month).length === 2 &&
        String(day).length === 2
      ) {
        return setNasaDay(`${year}-${month}-${day}`);
      }
    }
    return setNasaDay(nasaDay);
  }

  useEffect(() => {
    let callAxios = async () => {
      let res = await Axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&date=${nasaDay}`
      );
      setNasaDay(res.data);
    };
    callAxios();
  }, [nasaDay]);

  return (
    <ImageSearchContainer>
      <TitleContainer>
        <h2>Search by date</h2>
      </TitleContainer>
      <DateContainer dateAdapter={DateAdapter}>
        <DatePicker
          label="Select Star Date"
          value={nasaDay}
          onChange={getNewDate}
          renderInput={(params) => <TextField {...params} />}
        />
      </DateContainer>
      <WrapContainer>
        <Wrap
          nasaData={nasaDay}
          handleClickLike={handleClickLike}
          saveLike={saveLike}
        />
      </WrapContainer>
    </ImageSearchContainer>
  );
};

export default ImageSearch;

const ImageSearchContainer = styled.div`
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  margin: auto !important;
  padding-top: 50px !important;
  padding-bottom: 100px !important;
  width: 60% !important;
  @media screen and (max-width: 481px) {
    width: 100% !important;
  }
`;

const TitleContainer = styled.div`
  padding-bottom: 50px;
  text-align: center;
  h2 {
    font-size: 2.3rem;
  }
`;

const DateContainer = styled(LocalizationProvider)`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center !important;
  padding-bottom: 50px;
`;

const WrapContainer = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
  -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    1px 42px 20px 5px rgba(0, 0, 0, 0);
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    1px 42px 20px 5px rgba(0, 0, 0, 0);
`;
