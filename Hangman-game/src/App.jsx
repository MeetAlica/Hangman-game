import { useState } from "react";
import Lives from "./components/Lives";
import Title from "./components/Title";

const App = () => {
  const [lives, setLives] = useState(0);
  setLives(10);

  return (
    <div>
      <Lives lives={lives} />
      <Title />
    </div>
  );
};

export default App;
