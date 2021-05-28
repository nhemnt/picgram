import { SHOW_MODAL, CLOSE_MODAL } from './types';

export const openModal = (value) => (dispatch) => {
    dispatch({
        type: SHOW_MODAL,
        payload: value
    });
};

export const closeModal = () => (dispatch) => {
    dispatch({
        type: CLOSE_MODAL
    });
};
