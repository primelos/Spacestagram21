import React from "react";
import NasaImage from "./NasaImage";
import styled from "styled-components";
import ImageSearch from "./ImageSearch";

const CallNasa = () => {
  return (
    <CallContainer>
      <TitleContainer>
        <h1>Welcome to Spacetagram</h1>
        <h3>enjoy images and videos...</h3>
      </TitleContainer>
      <NasaImage />
      <ImageSearch />
    </CallContainer>
  );
};

export default CallNasa;

const CallContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  /* overflow-x: hidden; */
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    /* background: url("/images/home-background.png") center center / cover
      no-repeat fixed; */
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

const TitleContainer = styled.div`
  font-family: "Play", sans-serif;
  text-align: center;
  font-size: 1.9rem;
`;
