import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Back End Developer!",
        1000,
        "Front End Developer!",
        1000,
        "Keen on Full Stack Development!",
        1000,
        "Avid Learner!",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="text-[2rem] md:text-[2rem] text-[#00ffff] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
