import { SHOW_MODAL, CLOSE_MODAL } from 'actions/types';

const initialState = {
    showModal: false,
    url: null
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                showModal: true,
                url: action.payload
            };
        case CLOSE_MODAL: {
            return {
                ...state,
                showModal: false,
                url: null
            };
        }
        default:
            return state;
    }
};

export default modalReducer;
