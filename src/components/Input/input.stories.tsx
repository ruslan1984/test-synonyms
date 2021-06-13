import React from "react";
import Input from "./index";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Components",
  decorators: [withKnobs],
};

export const BaseInput = () => {
  return <Input value={"text"} errorText={text("Label", "Error")} />;
};
