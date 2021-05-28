import React from 'react';
import { deleteComment } from 'actions/imageAction';
import { useDispatch } from 'react-redux';

const Comments = ({ comments = [], id }) => {
    const dispatch = useDispatch();
    const deletePostComment = (index) => {
        if (dispatch) dispatch(deleteComment(id, index));
    };
    return (
        <div className="max-h-200">
            {comments.map((y, i) => (
                <p
                    key={i}
                    title={y}
                    className="border-primary text-capital bg-success p-1 m-0 text-ellipsis max-height-30 justify-content-s-b  d-flex">
                    <b>{y}</b>
                    <span
                        className="text-danger cursor-pointer"
                        onClick={() => deletePostComment(i)}>
                        <b>&#10005;</b>
                    </span>
                </p>
            ))}
        </div>
    );
};

export default Comments;
