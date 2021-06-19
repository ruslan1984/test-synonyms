import React, { FC, FormEvent } from "react";
import { ModeType } from "@modules/Synonyms/types";
import { Button, Input } from "@components/index";
import { BaseBlock, EditBlock, NameText, BtnBlocks } from "./styles";
import { Form, Note } from "@modules/Synonyms/styles";
import { EditBtn, DeleteBtn, CloseBtn } from "@icons/styles";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface IPresenter {
  name: string;
  mode: ModeType;
  remove: () => void;
  editMode: () => void;
  editClick: (e: FormEvent) => void;
  baseMode: () => void;
  changeValue: (e: FormEvent) => void;
}

const Presenter: FC<IPresenter> = ({
  name,
  mode,
  remove,
  editMode,
  editClick,
  baseMode,
  changeValue,
}: IPresenter): ReactJSXElement => {
  const BaseMode = () => (
    <BaseBlock>
      <NameText>{name}</NameText>
      <EditBtn mr={10} onClick={editMode} />
      <DeleteBtn onClick={remove} />
    </BaseBlock>
  );

  const EditMode = () => (
    <EditBlock>
      <Form action="" onSubmit={editClick}>
        <Note mb={2}>редактирование синонима:</Note>
        <Input mb={4} defaultValue={name} onChange={changeValue} />
        <BtnBlocks>
          <Button mr={5} type="submit">
            cохранить
          </Button>
          <CloseBtn onClick={baseMode} />
        </BtnBlocks>
      </Form>
    </EditBlock>
  );

  switch (mode) {
    case "base": {
      return <BaseMode />;
    }
    case "edit": {
      return <EditMode />;
    }
    default:
      return <BaseMode />;
  }
};

export default Presenter;
