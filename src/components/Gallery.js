import React, { useMemo } from 'react';

import { useSelector } from 'react-redux';
import InputComment from './InputComment';
import Likes from './Likes';
import Comments from './Comments';
import { openModal } from 'actions/modalAction';
import { useDispatch } from 'react-redux';
import { filterData } from 'helper/utils';

const Gallery = () => {
    const dispatch = useDispatch();
    const { data, search } = useSelector((state) => state.imageReducer);

    const handleModal = (e) => {
        if (dispatch && e) dispatch(openModal(e.target.src));
    };

    const viewData = useMemo(() => filterData(data, 'category', search), [search, data]);
    return (
        <section className="container d-flex border-primary">
            {viewData?.map((x) => (
                <div className="border-primary grid" key={x.id}>
                    <img src={x.url} alt="" className="img" onClick={handleModal} />
                    <div className="d-flex justify-content-s-b">
                        <Likes id={x.id} count={x.likes} like={x.like} />
                        <span className="p-1">{x.category}</span>
                    </div>
                    <InputComment id={x.id} />
                    <Comments id={x.id} comments={x.comments} />
                </div>
            ))}
        </section>
    );
};

export default Gallery;
