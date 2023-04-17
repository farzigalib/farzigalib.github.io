import React from "react";

const CustomButton = ({
  marginLeft = true,
  btnHeading,
  btnText,
  isHover = false,
  classNameWithHover,
  classNameWithoutHover,
}) => {
  return (
    <div style={{ marginLeft: marginLeft ? "9.7rem" : "0" }}>
      <div className={isHover ? "button-heading-hover" : "button-heading"}>
        {btnHeading}
      </div>
      <button
        className={
          isHover
            ? `${classNameWithHover} btn-click`
            : `${classNameWithoutHover} btn-click`
        }
        style={{ cursor: "pointer" }}
      >
        Default
      </button>
    </div>
  );
};

export default CustomButton;
