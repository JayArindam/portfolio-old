import React from "react";
import jay from "../../public/jay.png";
import Link from "next/link";

function Logo() {
  return (
    <div>
      <img
        id="logo"
        src={jay.src}
        alt="Jay Logo"
        style={{ width: "100px", height: "100px" }}
      />
    </div>
    
  );
}

export default Logo;
