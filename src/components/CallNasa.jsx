import React, { useState, useContext } from "react";
import NasaImage from "./NasaImage";
import styled from "styled-components";
import ImageSearch from "./ImageSearch";
import { ImageContext } from "../context/ImageContext";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";

const CallNasa = () => {
  let [color, setColor] = useState("#ee0e0e");
  const { loading } = useContext(ImageContext);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <CallContainer>
      <TitleContainer>
        <h1>Welcome to Spacetagram</h1>
        <h3>enjoy images and videos...</h3>
      </TitleContainer>

      {loading ? (
        <RingLoader color={color} loading={loading} css={override} size={100} />
      ) : (
        <NasaImage />
      )}

      <ImageSearch />
    </CallContainer>
  );
};

export default CallNasa;

const CallContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
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
