import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SET_SEARCH } from 'actions/types';

const Search = () => {
    const dispatch = useDispatch();
    const [serach, setSearch] = useState('');

    const onChange = (e) => {
        if (e && e.target) {
            setSearch(e.target.value);
            if (dispatch) dispatch({ type: SET_SEARCH, payload: e.target.value.trim() });
        }
    };
    return (
        <div className="m-auto ">
            <input
                value={serach}
                onChange={onChange}
                type="search"
                placeholder="Search images..."
                className="search p-1"
            />
        </div>
    );
};

export default Search;
