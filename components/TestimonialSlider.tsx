import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TestimonialSlider = () => {
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
      {/* Client Review */}
      <ClientReview
        image="/images/cp4d2.jpg"
        name="CP4D"
        role="Web Developer"
      />
      <ClientReview
        image="/images/adanionepranaam2.jpg"
        name="AdaniOne"
        role="Web Developer"
      />

      <ClientReview image="/images/hmis.jpg" name="HMIS" role="Web Developer" />
      <ClientReview image="/images/developer.jpg" name="HMIS" role="Web Developer" />
      <ClientReview image="/images/sadkid.jpg" name="HMIS" role="Web Developer" />
    </Carousel>
  );
};

export default TestimonialSlider;
