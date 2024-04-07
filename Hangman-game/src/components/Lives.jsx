const Lives = ({ guesses, maxGuesses }) => {
  const renderLives = () => {
    const livesIcons = [];
    for (let i = 0; i < maxGuesses - guesses; i++) {
      livesIcons.push(<span key={i}>🔋</span>);
    }
    return livesIcons;
  };

  return <div>{renderLives()}</div>;
};

export default Lives;
