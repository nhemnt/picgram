import {
    SET_IMAGES,
    SET_SEARCH,
    ADD_COMMENT,
    DELETE_COMMENT,
    HANDLE_LIKE_DISLIKE,
    HANDLE_SORT
} from 'actions/types';
import { sortComment, sortLike } from 'helper/utils';
import { COMMENT } from 'helper/constants';

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

        case ADD_COMMENT: {
            const { id, comment } = action.payload;
            return {
                ...state,
                data: state.data.map((current) => {
                    return current.id === id
                        ? { ...current, comments: [comment, ...current.comments] }
                        : current;
                })
            };
        }

        case DELETE_COMMENT: {
            const { id, commentIndex } = action.payload;
            return {
                ...state,
                data: state.data.map((current) => {
                    return id === current.id
                        ? {
                              ...current,
                              comments: current.comments.filter((_, i) => i !== commentIndex)
                          }
                        : current;
                })
            };
        }
        case HANDLE_LIKE_DISLIKE: {
            const { id } = action.payload;
            return {
                ...state,
                data: state.data.map((current) => {
                    return current.id === id
                        ? {
                              ...current,
                              likes: current.likes + (current.like ? -1 : 1),
                              like: !current.like
                          }
                        : current;
                })
            };
        }
        case HANDLE_SORT: {
            const { type } = action.payload;
            return {
                ...state,
                data: [
                    ...(type === COMMENT ? state.data.sort(sortComment) : state.data.sort(sortLike))
                ]
            };
        }

        default:
            return state;
    }
};

export default imageReducer;
