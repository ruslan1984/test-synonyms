import React from "react";
import Button from "./index";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components",
};

export const BaseButton = () => {
  return (
    <>
      <Button onClick={action("click")}>основная кнопка</Button>
      <br />
      <Button disabled onClick={action("click")}>
        основная кнопка
      </Button>
      <br />
      <Button loading onClick={action("click")}>
        основная кнопка
      </Button>
      <br />
      <Button save onClick={action("click")}>
        основная кнопка
      </Button>
      <br />
      <Button clear onClick={action("click")}>
        основная кнопка
      </Button>
      <br />
    </>
  );
};
