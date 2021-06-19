import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "@modules/Synonyms/reducer";
import Presenter from "./Presenter";
import { ModeType } from "@modules/Synonyms/types";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface ItemInterface {
  id: number;
  name: string;
  itemMode?: ModeType;
}

const Item = ({ id, name, itemMode }: ItemInterface): ReactJSXElement => {
  const dispatch = useDispatch();
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
    dispatch(actions.setItemEditMode(id));
  };

  const closeClick = () => {
    dispatch(actions.setItemBaseMode(id));
  };

  const baseMode = () => {
    dispatch(actions.setMode("base"));
  };

  return (
    <Presenter
      name={name}
      itemMode={itemMode}
      remove={remove}
      editMode={editMode}
      editClick={editClick}
      closeClick={closeClick}
      changeValue={changeValue}
    />
  );
};
export default Item;
