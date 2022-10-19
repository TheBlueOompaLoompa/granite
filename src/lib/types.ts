export enum TabType {
  Browser = 0,
  Editor = 1,
  Graph = 2,
}

export enum TabLocation {
  Default = -1,
  Left = 0,
  Right = 1
}

export interface ITab {
  title: string;
  type: TabType;
  location: TabLocation;
}