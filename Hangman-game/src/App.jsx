import { useState } from "react";
import Lives from "./components/Lives";

const App = () => {
  const [lives, setLives] = useState(0);
  setLives(10);
  
  return (
    <div>
      <Lives lives={lives} />
    </div>
  );
};

export default App;
