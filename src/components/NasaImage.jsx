import React, { useContext } from "react";
import Slider from "react-slick";
import { ImageContext } from "../context/ImageContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Wrap from "./Wrap.jsx";

const NasaImage = () => {
  const { imgData, testLike, handleClickLike } = useContext(ImageContext);

  const settings = {
    dots: true,
    inifinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <NasaContainer>
      <Carousel {...settings}>
        {imgData.map((img) => (
          <Wrap
            key={img.date}
            nasaData={img}
            handleClickLike={handleClickLike}
            testLike={testLike}
          />
        ))}
      </Carousel>
    </NasaContainer>
  );
};

export default NasaImage;

const NasaContainer = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100%;
`;

const Carousel = styled(Slider)`
  width: 100%;
  margin-top: 20px;

  & > button {
    height: 100%;
    width: 5vw;
    z-index: 1;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
  @media screen and (max-width: 481px) {
    .slick-prev {
      left: 0px;
    }
    .slick-next {
      right: 0px;
    }
  }
`;
