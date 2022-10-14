export interface TabType

export interface ITab {
  title: string;
  type: 'File Browser' | 'File Editor';
  popout: 'left' | 'right' | undefined;
}
