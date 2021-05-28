import { SET_IMAGES, SET_SEARCH } from 'actions/types';

const initialState = {
    data: [],
    search: ''
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES:
            return {
                ...state,
                data: action?.payload || []
            };
        case SET_SEARCH: {
            return {
                ...state,
                search: action?.payload || ''
            };
        }
        default:
            return state;
    }
};

export default imageReducer;
