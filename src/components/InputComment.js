import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_COMMENT } from 'actions/types';

const InputComment = ({ id }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    const onInputChange = (e) => {
        if (e) {
            setComment(e.target.value);
        }
    };
    const submitComment = (e) => {
        if (e) e.preventDefault();
        dispatch({
            type: ADD_COMMENT,
            payload: {
                id,
                comment
            }
        });
        setComment('');
    };

    return (
        <form className="border-primary d-flex" onSubmit={submitComment}>
            <input
                type="text"
                value={comment}
                pattern=".*\S+.*"
                title="This field is required"
                onChange={onInputChange}
                required
                className="border-primary flex-1"
            />
            <button className="py-1 px-3 btn-primary" type="submit">
                POST
            </button>
        </form>
    );
};

export default InputComment;
