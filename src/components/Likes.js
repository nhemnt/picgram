import React from 'react';
import { HANDLE_LIKE_DISLIKE } from 'actions/types';
import { useDispatch } from 'react-redux';

const Likes = ({ count, id, like }) => {
    const dispatch = useDispatch();
    const handleLike = () => {
        dispatch({
            type: HANDLE_LIKE_DISLIKE,
            payload: {
                id
            }
        });
    };
    return (
        <div className="p-1">
            <span className="text-danger ml-2">
                <b>{count}</b>
            </span>
            <button className="ml-2 action" onClick={handleLike}>
                {like ? 'Unlike' : 'Like'}
            </button>
        </div>
    );
};

export default Likes;
