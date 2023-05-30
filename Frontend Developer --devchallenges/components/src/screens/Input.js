import React from "react";
import CustomInput from "../components/CustomInput";

const Input = () => {
  return (
    <main className="main-content-container">
      <header>Inputs</header>
      <div className="content-section">
        <div className="block">
          <CustomInput marginLeft={false} btnHeading={"<Input />"} />
          <CustomInput isHover={true} btnHeading={"&:hover"} />
          <CustomInput isFocus={true} btnHeading={"&:focus"} />
        </div>
      </div>
    </main>
  );
};

export default Input;
