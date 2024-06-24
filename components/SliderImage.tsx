import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  name: string;
}

const SliderImage = ({ image, name }: Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
      <Image
        src={image}
        alt={name}
        width={100}
        height={150}
        objectFit="contain"
        className="mx-auto mb-[2rem] rounded-full"
      />
    </div>
  );
};

export default SliderImage;
