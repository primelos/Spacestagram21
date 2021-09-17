import React, { useEffect, useState, useContext } from "react";
import axios from "../utils/axios";
import NasaImage from "./NasaImage";
import styled from "styled-components";

const CallNasa = () => {
  return (
    <CallContainer>
      <NasaImage />
    </CallContainer>
  );
};

export default CallNasa;

const CallContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
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
