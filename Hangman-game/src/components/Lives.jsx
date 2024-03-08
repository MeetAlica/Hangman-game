import Hearth from "../assets/hearth.png";

const Lives = (lives) => {
  const hearts = Array.from({ length: lives }, (_, index) => (
    <img key={index} src={Hearth} alt="Hearth" />
  ));

  return { hearts };
};

export default Lives;
