const UsedLetters = ({ guessedLetters }) => {
  return (
    <div className="text-green-500">
      <p>Invalid attempts:</p>
      <p>{guessedLetters}</p>
    </div>
  );
};

export default UsedLetters;
