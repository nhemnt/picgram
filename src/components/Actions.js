import React from 'react';
import Search from './Search';
import { useDispatch } from 'react-redux';
import { HANDLE_SORT } from 'actions/types';
import { COMMENT, LIKE } from 'helper/constants';

const Actions = () => {
    const dispatch = useDispatch();
    const sort = (e) => {
        if (e) {
            dispatch({
                type: HANDLE_SORT,
                payload: {
                    type: e.target.name === LIKE ? LIKE : COMMENT
                }
            });
        }
    };
    return (
        <section className="d-flex p-1 border-primary flex-wrap">
            <div className="position-absolute-lg">
                <button className="action" name={LIKE} onClick={sort}>
                    Most Liked
                </button>
                <button
                    className="action position-relative before-line"
                    name={COMMENT}
                    onClick={sort}>
                    Most Commented
                </button>
            </div>
            <Search />
        </section>
    );
};

export default Actions;
