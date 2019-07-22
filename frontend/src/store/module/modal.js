import { createAction, handleActions } from "redux-actions";

const TOGGLE_MODAL = "modal/TOGGLE_MODAL";

export const toggleModal = createAction(TOGGLE_MODAL);

const initialState = {
  modal: false
};

export default handleActions(
  {
    [TOGGLE_MODAL]: (state, action) => ({
      ...state,
      modal: !state.modal
    })
  }, initialState
);

