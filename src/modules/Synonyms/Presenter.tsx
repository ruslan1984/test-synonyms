import React, { FC, FormEvent } from "react";
import { ItemType } from "./types";
import Item from "./Item";
import { Input, Button } from "@components/index";
import {
  BtnBlock,
  Modal,
  Page,
  Title,
  Title1,
  List,
  Hr,
  Note,
  Form,
  Header,
  Footer,
  Body,
} from "./styles";
import { ModeType } from "@modules/Synonyms/types";
import { CloseBtn, NoticeIcon } from "@icons/styles";

interface PresenterInterface {
  value: string;
  errorText: string;
  list: ItemType[];
  mode: ModeType;
  saving: boolean;
  add: (e: FormEvent) => void;
  valueChange: (e: FormEvent) => void;
  clear: () => void;
  save: () => void;
}

const Presenter: FC<PresenterInterface> = ({
  list,
  value,
  errorText,
  mode,
  saving,
  add,
  clear,
  save,
  valueChange,
}: PresenterInterface) => (
  <Page>
    <Modal>
      <Header>
        <Title>Редактирование группы синонимов поисковых фраз</Title>
        <CloseBtn position="absolute" r={19} t={19} />
        <Hr mb={15} />
      </Header>
      <Body>
        <Title1>
          <span>Синонимы</span> <NoticeIcon />
        </Title1>
        {mode == "base" && (
          <>
            <Note mb={0}>добавление синонима:</Note>
            <Form action="" onSubmit={add} mb={4}>
              <Input
                value={value}
                placeholder="Введите название"
                onChange={valueChange}
                errorText={errorText}
                mb={5}
              />
              <Button type="submit">добавить</Button>
            </Form>
          </>
        )}
        <List mode={mode}>
          {list &&
            list.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                itemMode={item.itemMode}
              />
            ))}
        </List>
      </Body>
      <Footer>
        <Hr mb={17} />
        <BtnBlock>
          <Button loading={saving ? 1 : 0} mr={18} save onClick={save}>
            сохранить изменения
          </Button>
          <Button clear onClick={clear}>
            очистить синонимы
          </Button>
        </BtnBlock>
      </Footer>
    </Modal>
  </Page>
);

export default Presenter;
