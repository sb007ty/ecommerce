import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReviewList from "./components/productReview/ReviewList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ReviewList />
    </div>
  );
}

export default App;
