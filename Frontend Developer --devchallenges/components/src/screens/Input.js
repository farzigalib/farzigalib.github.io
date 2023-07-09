import React from "react";
import CustomInput from "../components/CustomInput";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";

const Input = () => {
  return (
    <main className="main-content-container">
      <header>Inputs</header>
      <div className="content-section">
        <div className="block">
          <CustomInput
            marginLeft={false}
            btnHeading={"<Input />"}
            placeholder="Placeholder"
          />
          <CustomInput
            isHover={true}
            btnHeading={"&:hover"}
            placeholder="Placeholder"
          />
          <CustomInput
            isFocus={true}
            btnHeading={"&:focus"}
            placeholder="Placeholder"
          />
        </div>
        <div className="block">
          <CustomInput
            marginLeft={false}
            btnHeading={"<Input error />"}
            placeholder="Placeholder"
            error={true}
          />
          <CustomInput
            isHover={true}
            btnHeading={"&:hover"}
            placeholder="Placeholder"
          />
          <CustomInput
            isFocus={true}
            btnHeading={"&:focus"}
            placeholder="Placeholder"
            error={true}
          />
        </div>
        <div className="block">
          <CustomInput
            marginLeft={false}
            btnHeading={"<Input disabled />"}
            placeholder="Placeholder"
            disabled={true}
          />
        </div>
        <div className="block">
          <CustomInput
            marginLeft={false}
            btnHeading={"<Input helperText=”Some interesting text” />"}
            placeholder="Placeholder"
            isHelperText={true}
            helperText="Some interesting text"
          />
          <CustomInput
            btnHeading={"<Input helperText=”Some interesting text” error />"}
            placeholder="Placeholder"
            error={true}
            isHelperText={true}
            helperText="Some interesting text"
          />
        </div>
        <div className="block">
          <CustomInput
            marginLeft={false}
            btnHeading={"<Input startIcon />"}
            placeholder="Placeholder"
            startIcon={true}
            iconElement={
              <BsFillTelephoneFill
                style={{
                  position: "absolute",
                  top: "40%",
                  left: 12,
                }}
                fontSize={18}
                color="#828282"
              />
            }
          />
          <CustomInput
            btnHeading={"<Input endIcon />"}
            placeholder="Placeholder"
            endIcon={true}
            iconElement={
              <FaLock
                style={{
                  position: "absolute",
                  top: "40%",
                  right: 12,
                }}
                fontSize={18}
                color="#828282"
              />
            }
          />
        </div>
        <div className="block">
          <CustomInput
            marginLeft={false}
            btnHeading={"<Input value=”Text” />"}
            placeholder="Placeholder"
            value="Text"
          />
        </div>
        <div className="block">
          <CustomInput
            marginLeft={false}
            btnHeading={"<Input size=”sm” />"}
            placeholder="Placeholder"
            size="sm"
          />
          <CustomInput
            btnHeading={"<Input size=”lg” />"}
            placeholder="Placeholder"
            size="lg"
          />
        </div>
        <div className="block">
          <CustomInput
            marginLeft={false}
            btnHeading={"<Input fullWidth />"}
            placeholder="Placeholder"
            fullWidth={true}
            value="Text"
          />
        </div>
        <div className="block">
          <CustomInput
            marginLeft={false}
            btnHeading={"<Input multiline row=”4” />"}
            placeholder="Placeholder"
            rows={6}
            cols={60}
            multiline={true}
          />
        </div>
      </div>
    </main>
  );
};

export default Input;
