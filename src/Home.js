import { useEffect, useState } from "react";
import SceneCity from "./components/scenaries/sceneCity";

export default function Home() {
  const [moveLeft, setMoveLeft] = useState(400);
  const velocity = -2.2;

  useEffect(() => {
    const interval = setInterval(() => {
      setMoveLeft((e) => e + velocity);
    }, 10);

    return () => clearInterval(interval);
  }, [moveLeft]);

  return (
    <div style={{
      position: "relative",
      height:"100vh",
      background: "linear-gradient(to bottom, #330066, #cc99ff)"
    }}>
      <SceneCity velocity={moveLeft}/>
    </div>
  );
}
