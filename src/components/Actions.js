import React from 'react';
import Search from './Search';
import { useDispatch } from 'react-redux';
import { sortImages } from 'actions/imageAction';

const Actions = () => {
    const dispatch = useDispatch();
    const sort = (e) => {
        if (e && dispatch) dispatch(sortImages(e.target.name));
    };
    return (
        <section className="d-flex p-1 border-primary flex-wrap">
            <div className="position-absolute-lg">
                <button className="action" name="like" onClick={sort}>
                    Most Liked
                </button>
                <button
                    className="action position-relative before-line"
                    name="comment"
                    onClick={sort}>
                    Most Commented
                </button>
            </div>
            <Search />
        </section>
    );
};

export default Actions;
