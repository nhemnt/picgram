import React from 'react';
import { updateLike } from 'actions/imageAction';
import { useDispatch } from 'react-redux';

const Likes = ({ count, id, like }) => {
    const dispatch = useDispatch();
    const handleLike = () => {
        if (dispatch) {
            dispatch(updateLike(id));
        }
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
