import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled as styles, Box } from "@mui/system";
import ModalUnstyled from "@mui/core/ModalUnstyled";

const StyledModal = styles(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styles("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  width:70%
  background-color: lightcoral;
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: "51%",
  bgcolor: "whitesmoke",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};

const Wrap = ({ nasaData, handleClickLike, saveLike }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <WrapContainer key={nasaData.date}>
      <h3>{nasaData.title}</h3>
      <ImageContainer>
        {nasaData.media_type === "image" ? (
          <img src={nasaData.url} alt={nasaData.title} onClick={handleOpen} />
        ) : (
          <VideoFrame
            width="853"
            height="480"
            src={nasaData.url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        )}
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          onClose={handleClose}
          BackdropComponent={Backdrop}
        >
          <BoxContainer sx={style}>
            <ModalImg src={nasaData.url} alt={nasaData.title} />
          </BoxContainer>
        </StyledModal>
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
    cursor: pointer;
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

const ModalImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BoxContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 51%;
  background-color: whitesmoke;
  border: 2px solid #000;
  padding-top: 12px !important;
  padding-left: 12px !important;
  padding-right: 12px !important;
  border-radius: 4px;
  padding-bottom: 12px !important;
  outline: none;
`;

const VideoFrame = styled.iframe`
  width: 853px;
  @media screen and (max-width: 481px) {
    width: auto !important;
  }
`;
