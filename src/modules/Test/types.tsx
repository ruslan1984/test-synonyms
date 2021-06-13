export type ItemType = {
  id: number;
  name: string;
}

export type ModeType =  "base" | "edit";

export type TestType = {
  list: ItemType[];
  mode: ModeType;
}