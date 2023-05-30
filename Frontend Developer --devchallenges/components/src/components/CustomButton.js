import React, { useEffect, useState } from "react";
import click from "../assets/sound/click.wav";

const CustomButton = ({
  marginLeft = true,
  btnHeading,
  btnText = "Default",
  size = "lg",
  color,
  isHover = false,
  disabled = false,
  startIcon = false,
  endIcon = false,
  classNameWithHover,
  classNameWithoutHover,
  iconElement,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [playSound, setPlaySound] = useState(false);

  let background;
  let hoverBackground;
  let textColor;
  if (color === "default") {
    background = "#E0E0E0";
    hoverBackground = "#AEAEAE";
    textColor = "#3F3F3F";
  } else if (color === "primary") {
    background = "#2962FF";
    hoverBackground = "#0039CB";
    textColor = "#FFFFFF";
  } else if (color === "secondary") {
    background = "#455A64";
    hoverBackground = "#1C313A";
    textColor = "#FFFFFF";
  } else if (color === "danger") {
    background = "#D32F2F";
    hoverBackground = "#9A0007";
    textColor = "#FFFFFF";
  }

  useEffect(() => {
    if (playSound) {
      play();
    }
  }, [playSound]);

  const play = () => {
    new Audio(click).play();
    setPlaySound(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div style={{ marginLeft: marginLeft ? "9.7rem" : "0" }}>
      <div className={isHover ? "button-heading-hover" : "button-heading"}>
        {btnHeading}
      </div>
      <button
        disabled={disabled}
        onClick={() => setPlaySound(true)}
        className={
          isHover
            ? `${classNameWithHover} btn-click`
            : `${classNameWithoutHover} btn-click`
        }
        style={{
          cursor: "pointer",
          color: textColor,
          width:
            size === "sm" ? 73 : size === "md" ? 81 : size === "lg" && "8rem",
          height:
            size === "sm" ? 32 : size === "md" ? 36 : size === "lg" && "3rem",
          background: isHover
            ? !isHovering
              ? background
              : hoverBackground
            : background,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {startIcon && iconElement}
        {btnText}
        {endIcon && iconElement}
      </button>
    </div>
  );
};

export default CustomButton;
