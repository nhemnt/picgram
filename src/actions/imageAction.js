/* eslint-disable default-case */
import API from 'config/API';
import { SET_IMAGES } from './types';
import { imageURL } from 'config';

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
