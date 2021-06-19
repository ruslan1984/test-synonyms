import React from "react";
import Presenter from "./Presenter";
import { action } from "@storybook/addon-actions";

export default {
  title: "TestModule",
};

export const Test = () => {
  return (
    <>
      <Presenter
        name={"name"}
        mode="base"
        remove={action("remove")}
        editMode={action("editMode")}
        edit={action("edit")}
        baseMode={action("baseMode")}
      />
      <br />
      <Presenter
        name={"name"}
        mode="edit"
        remove={action("remove")}
        editMode={action("editMode")}
        editClick={action("edit")}
        baseMode={action("baseMode")}
      />
    </>
  );
};
