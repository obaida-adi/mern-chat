import api from '../api';
import axios from 'axios';

export const createRoom = (name) => {
    const url = api.rootUrl + api.room;

    return axios.post(url, { name }, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const getRoom = (id) => {
    const url = api.rootUrl + api.room + id;

    return axios.get(url, { id }, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const addUser = (name, id) => {
    const url = api.rootUrl + api.room + id;

    return axios.get(url, { name }, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const deleteRoom = (id) => {
    const url = api.rootUrl + api.room + id;

    return axios.delete(url, { id }, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}