import {
  ShowModalActionType,
  SHOW_MODAL,
  HideModalActionType,
  HIDE_MODAL,
  HideAllModalActionType,
  HIDE_ALL_MODAL,
} from './types';

export function showModal(
  modal: string,
  hideOthers?: boolean,
): ShowModalActionType {
  return {
    type: SHOW_MODAL,

    modal,

    hideOthers,
  };
}

export function hideModal(modal: string): HideModalActionType {
  return {
    type: HIDE_MODAL,
    modal,
  };
}

export function hideAllModal(): HideAllModalActionType {
  return { type: HIDE_ALL_MODAL };
}
