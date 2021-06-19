import React, { FC, FormEvent } from "react";
import { ModeType } from "@modules/Synonyms/types";
import { Button, Input } from "@components/index";
import { BaseBlock, EditBlock, NameText, BtnBlocks } from "./styles";
import { Form, Note } from "@modules/Synonyms/styles";
import { EditBtn, DeleteBtn, CloseBtn } from "@icons/styles";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface IPresenter {
  name: string;
  itemMode?: ModeType;
  remove: () => void;
  editMode: () => void;
  editClick: (e: FormEvent) => void;
  closeClick: () => void;
  changeValue: (e: FormEvent) => void;
}

const Presenter: FC<IPresenter> = ({
  name,
  itemMode,
  remove,
  editMode,
  editClick,
  closeClick,
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
        <Input
          mb={4}
          padding="5px 0 13px"
          defaultValue={name}
          onChange={changeValue}
        />
        <BtnBlocks>
          <Button mr={10} type="submit">
            cохранить
          </Button>
          <CloseBtn onClick={closeClick} />
        </BtnBlocks>
      </Form>
    </EditBlock>
  );

  switch (itemMode) {
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
