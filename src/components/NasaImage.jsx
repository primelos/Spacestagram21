import React, { useContext, useState } from "react";
import Slider from "react-slick";
import { ImageContext } from "../context/ImageContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const NasaImage = () => {
  const [like, setLike] = useState([]);
  const [testLike, setTestLike] = useState([]);
  console.log("like", like);

  function handleClickLike(fav) {
    console.log("fav", fav);

    if (like.find(({ date }) => date === fav.date) === undefined) {
      setLike([...like, fav]);
    }
    if (testLike.includes(fav.date)) {
      setTestLike(
        testLike.filter((item) => {
          console.log("hit", typeof item);
          return item !== fav.date;
        })
      );
    } else {
      console.log("end");
      setTestLike([...testLike, fav.date]);
    }
  }
  console.log("testLike", testLike);
  // let testLike = function() {
  //   setlike
  // }
  const settings = {
    dots: true,
    inifinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
  };
  const data = useContext(ImageContext);
  console.log(testLike.includes(data.date));

  console.log("POUNDS", data);
  return (
    <NasaContainer>
      <Carousel {...settings}>
        {data.map((img) => (
          <Wrap key={img.date}>
            <h3>{img.title}</h3>
            <ImageContainer>
              {img.media_type === "image" ? (
                <img src={img.hdurl} alt="" />
              ) : (
                <iframe
                  width="853"
                  height="480"
                  src={img.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              )}
            </ImageContainer>
            <Description>
              <p>{img.explanation}</p>
            </Description>
            <Like>
              {!testLike.includes(img.date) ? (
                <FavoriteBorderIcon onClick={(e) => handleClickLike(img)} />
              ) : (
                <FavoriteIcon onClick={(e) => handleClickLike(img)} />
              )}
            </Like>
          </Wrap>
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
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
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
`;

const Wrap = styled.div`
  width: 88% !important;
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
  height: 400px;
  overflow: hidden;
  border-radius: 4px;
  img {
    flex: 1;
    object-fit: cover;
    width: 100%;
  }
`;

const Description = styled.div`
  height: 320px;
  width: 95%;
`;

const Like = styled.div`
  width: 95%;
`;
