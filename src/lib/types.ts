export enum TabLocation {
  Default = -1,
  Left = 0,
  Right = 1
}

export interface ITab {
  title: string;
  type: 'File Browser' | 'File Editor';
  popout: TabLocation;
}
