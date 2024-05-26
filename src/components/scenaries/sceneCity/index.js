import Paralax from "../../paralax";
import Bridge from "../../../assets/bridge.png";
import ShadowBridge from "../../../assets/shadow.png";
import Ocean from "../../../assets/ocean.jpg";
import Hills from "../../../assets/hills.png";
import City2 from "../../../assets/city2.png";
import City1 from "../../../assets/city1.png";
import Reflex from "../../../assets/reflex.png";

export default function SceneCity({ velocity }) {
  const cityHeight = 280;
  return (
    <div>

      

      <Paralax image={Ocean} position={[velocity, -100]} />
      <Paralax
        image={Hills}
        position={[(velocity + 350) * 0.25, cityHeight + 125]}
        opacity={0.4}
      />
      <Paralax image={Hills} position={[velocity * 0.4, cityHeight + 85]} />
      <Paralax image={City2} position={[velocity * 0.7, cityHeight + 60]} />
      <Paralax image={City1} position={[velocity * 0.8, cityHeight + 55]} />
      <Paralax image={Reflex} position={[velocity * 0.8, cityHeight - 55]} />
      <Paralax image={Bridge} position={[velocity * 1.5, 0]} />
      <Paralax image={ShadowBridge} position={[velocity * 1.5, 0]} />
    </div>
  );
}
