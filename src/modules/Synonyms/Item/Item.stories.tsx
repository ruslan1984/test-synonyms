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
        itemMode="base"
        remove={action("remove")}
        editMode={action("editMode")}
        editClick={action("edit")}
        changeValue={action("change")}
        closeClick={action("closeClick")}
      />
      <br />
      <Presenter
        name={"name"}
        itemMode="edit"
        remove={action("remove")}
        editMode={action("editMode")}
        editClick={action("edit")}
        changeValue={action("change")}
        closeClick={action("closeClick")}
      />
    </>
  );
};
