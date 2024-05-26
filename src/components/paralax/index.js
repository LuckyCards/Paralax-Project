import { useEffect, useState } from "react";

export default function Paralax({ image, position, anchor = "bottom", opacity = 1}) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const imageComponent = new Image();
    imageComponent.src = image;
    imageComponent.onload = () => {
      setHeight(imageComponent.height);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        bottom: anchor == "bottom" && `${position[1]}px`,
        top: anchor == "top" && `${position[1]}px`,
        width: "100%",
        height: `${height}px`,
        opacity: opacity,
        backgroundPosition: `${position[0]}px 0px`,
        objectFit: "contain",
        backgroundImage: `url(${image})`,
      }}></div>
  );
}
