import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "@modules/Synonyms/reducer";
import Presenter from "./Presenter";
import { ModeType } from "@modules/Synonyms/types";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface ItemInterface {
  id: number;
  name: string;
}

const Item = ({ id, name }: ItemInterface): ReactJSXElement => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState<ModeType>("base");
  let currentValue = name;
  const remove = () => {
    dispatch(actions.remove(id));
  };
  const editClick = (e: FormEvent) => {
    e.preventDefault();
    dispatch(actions.edit({ id, name: currentValue }));
    baseMode();
  };
  const changeValue = (e: FormEvent) => {
    const value: string = (e.currentTarget as HTMLInputElement).value;
    currentValue = value;
  };
  const editMode = () => {
    setMode("edit");
    dispatch(actions.setMode("edit"));
  };

  const baseMode = () => {
    setMode("base");
    dispatch(actions.setMode("base"));
  };

  return (
    <Presenter
      name={name}
      mode={mode}
      remove={remove}
      editMode={editMode}
      editClick={editClick}
      baseMode={baseMode}
      changeValue={changeValue}
    />
  );
};
export default Item;
