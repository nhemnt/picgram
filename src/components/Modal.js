import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { closeModal } from 'actions/modalAction';
import { useDispatch } from 'react-redux';

const Modal = () => {
    const dispatch = useDispatch();

    const modal = useSelector((state) => state.modalReducer);
    const close = (e) => {
        if (dispatch) dispatch(closeModal());
    };
    const stopPropagation = (e) => {
        if (e) e.stopPropagation();
    };
    const { showModal, url } = modal;
    return (
        <Fragment>
            {showModal && url && (
                <div className="overlay" onClick={close}>
                    <div className="dialog" onClick={stopPropagation}>
                        <img src={url} alt="" />
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default Modal;
