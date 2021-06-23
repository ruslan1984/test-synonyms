export type ModeType =  "base" | "edit";

export type ItemType = {
  id: number;
  name: string;
  itemMode?: ModeType;
}


export type SynonymsType = {
  list: ItemType[];
  mode: ModeType;
  saving: boolean;
  clearing: boolean;
}