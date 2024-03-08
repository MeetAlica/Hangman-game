const Lives = (lives) => {
  const hearts = Array.from({ length: lives }, (_, index) => (
    <img key={index} src="../assets/hearth.png" alt="Hearth" />
  ));

  return { hearts };
};

export default Lives;
