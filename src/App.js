import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//components
import Header from 'components/Header';
import Actions from 'components/Actions';
import Gallery from 'components/Gallery';

import { fetchImages } from 'actions/imageAction';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (dispatch) dispatch(fetchImages());
    }, [dispatch]);
    return (
        <main className="App">
            <Header />
            <Actions />
            <Gallery />
        </main>
    );
}

export default App;
