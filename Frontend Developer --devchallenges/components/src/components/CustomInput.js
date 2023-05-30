import React, { useState } from "react";

const CustomInput = ({
  marginLeft = true,
  isHover = false,
  btnHeading,
  isFocus = false,
  type = "text",
  label = "Label",
  placeholder,
  size = "lg",
  fullWidth = false,
  require,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isFocusing, setIsFocusing] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleFocus = () => {
    setIsFocusing(true);
  };

  return (
    <div style={{ marginLeft: marginLeft ? "9.7rem" : "0" }}>
      <div
        className={
          isHover || isFocus ? "button-heading-hover" : "button-heading"
        }
      >
        {btnHeading}
      </div>
      <div>
        <label
          id={`${type}-label`}
          style={{
            color: isHovering ? "#333333" : isFocusing ? "#2962FF" : "#333333",
          }}
        >
          {label}
        </label>
        <br />
        <input
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onInput={handleFocus}
          type={type}
          id={type}
          placeholder={placeholder}
          required={require}
          onChange={(e) => console.log(e.target.value)}
          style={{
            borderRadius: 8,
            border: "1px solid #000",
            width: fullWidth ? "100%" : 200,
            height: size === "sm" ? 40 : size === "lg" && 56,
            marginTop: 4,
            borderColor: isHovering
              ? "#333333"
              : isFocusing
              ? "#2962FF"
              : "#828282",
            borderWidth: 2,
            borderStyle: "solid",
          }}
        />
      </div>
    </div>
  );
};

export default CustomInput;
