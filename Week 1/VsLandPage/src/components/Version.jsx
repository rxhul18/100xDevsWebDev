import { useState } from "react";
import "./Version.scss";

const Version = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      style={{
        color: "white",
        display: isVisible ? "flex" : "hidden",
        justifyContent: "center",
      }}
    >
      <div className="container version">
        <div className="verpara">
          <p>
            <span>Version 1.92</span> is now available! Read about the new
            features and fixes from July.
          </p>
          <div className="cancel">
            <a onClick={() => setIsVisible(false)}></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Version;
