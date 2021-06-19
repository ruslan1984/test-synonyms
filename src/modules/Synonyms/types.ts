export type ItemType = {
  id: number;
  name: string;
}

export type ModeType =  "base" | "edit";

export type SynonymsType = {
  list: ItemType[];
  mode: ModeType;
  saving: boolean;
}