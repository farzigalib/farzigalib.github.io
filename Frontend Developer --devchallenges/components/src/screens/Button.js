import React from "react";
import CustomButton from "../components/CustomButton";
import { MdLocalGroceryStore } from "react-icons/md";

const Button = () => {
  return (
    <main className="main-content-container">
      <header>Buttons</header>
      <div className="content-section">
        <div className="block">
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
        <div className="block">
          <CustomButton
            marginLeft={false}
            btnHeading={"<Button variant=”outline” />"}
            classNameWithoutHover={"outline"}
          />
          <CustomButton
            isHover={true}
            btnHeading={"&:hover, &:focus"}
            classNameWithHover={"outline outline-hover"}
          />
        </div>
        <div className="block">
          <CustomButton
            marginLeft={false}
            btnHeading={"<Button variant=”text” />"}
            classNameWithoutHover={"text"}
          />
          <CustomButton
            isHover={true}
            btnHeading={"&:hover, &:focus"}
            classNameWithHover={"text text-hover"}
          />
        </div>
        <div className="block">
          <CustomButton
            marginLeft={false}
            btnHeading={"<Button disableShadow />"}
            classNameWithoutHover={"disable-shadow"}
          />
        </div>
        <div className="block">
          <CustomButton
            marginLeft={false}
            disabled={true}
            btnHeading={"<Button disabled />"}
            classNameWithoutHover={"disable"}
          />
          <CustomButton
            isHover={true}
            disabled={true}
            btnHeading={"<Button variant=”text” disabled />"}
            classNameWithHover={"disable-text"}
          />
        </div>
        <div className="block">
          <CustomButton
            marginLeft={false}
            startIcon={true}
            iconElement={
              <MdLocalGroceryStore style={{ marginRight: 11 }} fontSize={15} />
            }
            btnHeading={"<Button startIcon=”local_grocery_store” />"}
            classNameWithoutHover={"default"}
            color={"primary"}
          />
          <CustomButton
            endIcon={true}
            iconElement={
              <MdLocalGroceryStore style={{ marginLeft: 11 }} fontSize={15} />
            }
            btnHeading={"<Button endIcon=”local_grocery_store” />"}
            classNameWithoutHover={"default"}
            color={"primary"}
          />
        </div>
        <div className="block">
          <CustomButton
            marginLeft={false}
            btnHeading={"<Button size=”sm” />"}
            classNameWithoutHover={"default"}
            size="sm"
            color={"primary"}
          />
          <CustomButton
            btnHeading={"<Button size=”md” />"}
            classNameWithoutHover={"default"}
            size="md"
            color={"primary"}
          />
          <CustomButton
            btnHeading={"<Button size=”lg” />"}
            classNameWithoutHover={"default"}
            size="lg"
            color={"primary"}
          />
        </div>
        <div className="block">
          <CustomButton
            marginLeft={false}
            btnHeading={"<Button color=”default” />"}
            classNameWithoutHover={"default"}
            color={"default"}
          />
          <CustomButton
            btnHeading={"<Button color=”primary” />"}
            classNameWithoutHover={"default"}
            color={"primary"}
          />
          <CustomButton
            btnHeading={"<Button color=”secondary” />"}
            classNameWithoutHover={"default"}
            color={"secondary"}
          />
          <CustomButton
            btnHeading={"<Button color=”danger” />"}
            classNameWithoutHover={"default"}
            color={"danger"}
          />
        </div>
        <div className="block">
          <CustomButton
            marginLeft={false}
            isHover={true}
            btnHeading={"&:hover, &:focus"}
            classNameWithHover={"default"}
            color={"default"}
          />
          <CustomButton
            isHover={true}
            btnHeading={"&:hover, &:focus"}
            classNameWithHover={"default"}
            color={"primary"}
          />
          <CustomButton
            isHover={true}
            btnHeading={"&:hover, &:focus"}
            classNameWithHover={"default"}
            color={"secondary"}
          />
          <CustomButton
            isHover={true}
            btnHeading={"&:hover, &:focus"}
            classNameWithHover={"default"}
            color={"danger"}
          />
        </div>
      </div>
    </main>
  );
};

export default Button;
