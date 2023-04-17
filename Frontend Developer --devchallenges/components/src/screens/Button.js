import React from "react";
import CustomButton from "../components/CustomButton";

const Button = () => {
  return (
    <main className="main-content-container">
      <header>Buttons</header>
      <div className="content-section">
        <div className="block block-1">
          <CustomButton
            marginLeft={false}
            btnHeading={"<Button />"}
            classNameWithoutHover={"default"}
          />
          <CustomButton
            isHover={true}
            btnHeading={"&:hover, &:focus"}
            classNameWithHover={"default default-hover"}
          />
        </div>
      </div>
    </main>
  );
};

export default Button;
