import React, { FC, useState, FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import Presenter from "./Presenter";
import { reducerType } from "@store/reducers";
import { actions } from "./reducer";

const Test: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [saving, setSaving] = useState(false);
  const [errorText, setErrorText] = useState("");
  const { list, mode } = useSelector((state: reducerType) => state.testReducer);

  const add = (e: FormEvent) => {
    e.preventDefault();
    if (value?.trim() === "") {
      setErrorText("Пустое поле");
    } else {
      value && dispatch(actions.add(value));
      setValue("");
    }
  };

  const clear = () => {
    dispatch(actions.clear());
  };
  const save = async () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
    }, 1000);
  };
  const valueCange = (e: FormEvent) => {
    setErrorText("");
    const name = (e.target as HTMLInputElement).value;
    setValue(name);
  };

  return (
    <Presenter
      list={list}
      mode={mode}
      add={add}
      clear={clear}
      save={save}
      value={value}
      valueCange={valueCange}
      errorText={errorText}
      saving={saving}
    />
  );
};

export default Test;
