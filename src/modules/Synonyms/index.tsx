import React, { FC, useState, FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import Presenter from "./Presenter";
import { reducerType } from "@store/reducers";
import { actions, saveData, request } from "./reducer";
import { useEffect } from "react";

const Test: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [errorText, setErrorText] = useState("");
  const { list, mode, saving, clearing } = useSelector(
    (state: reducerType) => state.synonymsReducer
  );

  useEffect(() => {
    dispatch(request());
  }, []);

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
    dispatch(saveData());
  };

  const valueChange = (e: FormEvent) => {
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
      valueChange={valueChange}
      errorText={errorText}
      saving={saving}
      clearing={clearing}
    />
  );
};

export default Test;
