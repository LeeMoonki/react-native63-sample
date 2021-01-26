import {
  ModalStateType,
  ModalActionType,
  SHOW_MODAL,
  HIDE_MODAL,
  HIDE_ALL_MODAL,
} from './types';

const initState: ModalStateType = {
  basic: false,
};

const hideAllModal = (state: ModalStateType): ModalStateType => {
  const newState = { ...state };

  for (const k in newState) {
    newState[k] = false;
  }

  return newState;
};

export default function modalReducer(
  state = initState,
  action: ModalActionType,
): ModalStateType {
  switch (action.type) {
    case SHOW_MODAL: {
      let s: ModalStateType = {};
      if (action.hideOthers) {
        s = hideAllModal(state);
      } else {
        s = state;
      }

      s[action.modal] = true;

      return s;
    }
    case HIDE_MODAL: {
      return {
        ...state,
        [action.modal]: false,
      };
    }
    case HIDE_ALL_MODAL: {
      return hideAllModal(state);
    }
    default:
      return state;
  }
}
