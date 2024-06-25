import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderImage from "./SliderImage";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
};

const TTechnologySlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <SliderImage image="/images/github.jpg" name="github" />
      <SliderImage image="/images/docker.jpg" name="docker" />
      <SliderImage image="/images/nodejs3.gif" name="nodejs" />
      <SliderImage image="/images/nestjs3.jpg" name="nestjs" />
      <SliderImage image="/images/js.gif" name="js" />
      <SliderImage image="/images/reactjs2.jpg" name="reactjs" />
      <SliderImage image="/images/mongo.jpg" name="mongo" />
      <SliderImage image="/images/mysql2.jpg" name="mysql" />
      <SliderImage image="/images/prisma.jpg" name="prisma" />
    </Carousel>
  );
};

export default TTechnologySlider;
