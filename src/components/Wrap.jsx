import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Wrap = ({ nasaData, handleClickLike, saveLike }) => {
  return (
    <WrapContainer key={nasaData.date}>
      <h3>{nasaData.title}</h3>
      <ImageContainer>
        {nasaData.media_type === "image" ? (
          <img src={nasaData.hdurl} alt="" />
        ) : (
          <iframe
            width="853"
            height="480"
            src={nasaData.url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        )}
      </ImageContainer>
      <CreditContainer>
        <a href="https://api.nasa.gov/#apod">
          Brought to you by Nasa (APOD) API
        </a>
        <p>{nasaData.date}</p>
      </CreditContainer>
      <Description>
        <p>{nasaData.explanation}</p>
        {!saveLike.includes(nasaData.date) ? (
          <OpenHeart onClick={(e) => handleClickLike(nasaData)} />
        ) : (
          <ClosdHeart onClick={(e) => handleClickLike(nasaData)} />
        )}
      </Description>
    </WrapContainer>
  );
};

export default Wrap;

const WrapContainer = styled.div`
  width: 75% !important;
  margin: auto;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  flex-direction: column !important;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  height: 480px;
  overflow: hidden;
  border-radius: 4px;

  img {
    flex: 1;
    object-fit: cover;
    width: 100%;
  }
  @media screen and (max-width: 481px) {
    height: 100%;
    max-height: 100%;
  }
`;
const CreditContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Description = styled.div`
  flex: 1;
  width: 95%;
  min-height: 560px;
  p {
    /* padding-bottom: 100%;
    margin-bottom: -100%; */
    /* height: 478px; */
  }
`;

const ClosdHeart = styled(FavoriteIcon)`
  color: red;
  cursor: pointer;
  font-size: 2rem !important;
`;

const OpenHeart = styled(FavoriteBorderIcon)`
  cursor: pointer;
  color: #ff00004c;
  font-size: 2rem !important;
`;
