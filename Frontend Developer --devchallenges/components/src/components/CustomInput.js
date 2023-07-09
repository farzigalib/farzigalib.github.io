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
  error = false,
  disabled = false,
  isHelperText = false,
  helperText,
  value,
  startIcon = false,
  endIcon = false,
  iconElement,
  multiline = false,
  rows = 4,
  cols = 40,
  require,
}) => {
  const [isFocusing, setIsFocusing] = useState(false);

  const handleFocus = () => {
    setIsFocusing(true);
  };

  const handleBlur = () => {
    setIsFocusing(false);
  };

  return (
    <div
      style={{
        marginLeft: marginLeft ? "9.7rem" : "0",
        width: fullWidth && "100%",
      }}
    >
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
          className="input-label"
          style={{
            color: error
              ? "#D32F2F"
              : isHover
              ? "#333333"
              : isFocus
              ? "#2962FF"
              : isFocusing
              ? "#2962FF"
              : "#333333",
          }}
        >
          {label}
        </label>
        <br />
        {!multiline ? (
          <div style={{ position: "relative" }}>
            {(startIcon || endIcon) && iconElement}
            <input
              onFocus={handleFocus}
              onBlur={handleBlur}
              type={type}
              id={type}
              placeholder={placeholder}
              defaultValue={value}
              required={require}
              onChange={(e) => console.log(e.target.value)}
              className={
                error
                  ? "input-with-error"
                  : isHover
                  ? "input-field-hover"
                  : isFocus
                  ? "input-field-focused"
                  : `input-field`
              }
              style={{
                borderRadius: 8,
                width: fullWidth ? "100%" : 200,
                height: size === "sm" ? 40 : size === "lg" && 56,
                marginTop: 4,
                fontSize: size === "sm" ? "0.8rem" : size === "lg" && "1rem",
                fontWeight: "500",
                paddingLeft: startIcon && 45,
                paddingRight: endIcon && 45,
              }}
              disabled={disabled}
            />
          </div>
        ) : (
          <div style={{ position: "relative" }}>
            {(startIcon || endIcon) && iconElement}
            <textarea
              onFocus={handleFocus}
              onBlur={handleBlur}
              type={type}
              id={type}
              placeholder={placeholder}
              defaultValue={value}
              required={require}
              onChange={(e) => console.log(e.target.value)}
              className={
                error
                  ? "input-with-error"
                  : isHover
                  ? "input-field-hover"
                  : isFocus
                  ? "input-field-focused"
                  : `input-field`
              }
              style={{
                borderRadius: 8,
                width: fullWidth && "100%",
                marginTop: 4,
                fontSize: size === "sm" ? "0.8rem" : size === "lg" && "1rem",
                fontWeight: "500",
                paddingLeft: startIcon && 45,
                paddingRight: endIcon && 45,
                paddingTop: 18,
                paddingBottom: 18,
              }}
              disabled={disabled}
              rows={rows}
              cols={cols}
            />
          </div>
        )}
        {isHelperText && (
          <div
            className="hepler-text"
            style={{ color: error ? "#D32F2F" : "#828282" }}
          >
            {helperText}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
