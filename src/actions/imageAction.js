/* eslint-disable default-case */
import API from 'config/API';
import { SET_IMAGES } from './types';
import { imageURL } from 'config';

import store from '../store';

export const updateData = (dispatch, type, payload = []) => {
    dispatch({
        type,
        payload
    });
};

const getData = () => [...store.getState()?.imageReducer?.data];

export const deleteComment = (id, commentIndex) => (dispatch) => {
    const newData = getData().map((current) => {
        return id === current.id
            ? {
                  ...current,
                  comments: current.comments.filter((_, i) => i !== commentIndex)
              }
            : current;
    });
    updateData(dispatch, SET_IMAGES, newData);
};
export const addComment = (id, comment) => (dispatch) => {
    const original = getData() || [];
    const newData = original.map((current) => {
        return current.id === id
            ? { ...current, comments: [comment, ...current.comments] }
            : current;
    });
    updateData(dispatch, SET_IMAGES, newData);
};

export const updateLike = (id) => (dispatch) => {
    const original = getData() || [];
    const newData = original.map((current) => {
        return current.id === id
            ? { ...current, likes: current.likes + (current.like ? -1 : 1), like: !current.like }
            : current;
    });
    updateData(dispatch, SET_IMAGES, newData);
};

export const fetchImages = () => (dispatch) => {
    API.get(imageURL)
        .then((res) => {
            dispatch({
                type: SET_IMAGES,
                payload: res.pics.map((current) => ({ ...current, like: false }))
            });
        })
        .catch((err) => console.log(err));
};
