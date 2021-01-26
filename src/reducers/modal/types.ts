export type ModalStateType = {
  [modalname: string]: boolean;
};

export const SHOW_MODAL = 'SHOW_MODAL';
export interface ShowModalActionType {
  type: typeof SHOW_MODAL;
  modal: string;
  hideOthers?: boolean;
}

export const HIDE_MODAL = 'HIDE_MODAL';
export interface HideModalActionType {
  type: typeof HIDE_MODAL;
  modal: string;
}

export const HIDE_ALL_MODAL = 'HIDE_ALL_MODAL';
export interface HideAllModalActionType {
  type: typeof HIDE_ALL_MODAL;
}

export type ModalActionType =
  | ShowModalActionType
  | HideModalActionType
  | HideAllModalActionType;
