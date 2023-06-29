import { useState } from "react";
import MyComponent from "./MyComponent";

function App() {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Show Component</button>
      {showComponent && <MyComponent />}
    </div>
  );
}
