import api from '../api';
import axios from 'axios';

const headers = {
    "Content-Type": "application/json"
}

// User Actions

export const createUser = (name) => {
    const url = api.rootUrl + api.users;

    return axios.post(url, { name }, { headers });
}

export const getUsers = () => {
    const url = api.rootUrl + api.users;

    return axios.get(url, {}, { headers });
}

export const deleteUser = (id) => {
    const url = api.rootUrl + api.users + id;

    return axios.delete(url, { id }, { headers });
}

// Message Actions

export const createMessage = (message, sender) => {
    const url = api.rootUrl + api.messages;

    return axios.post(url, { data: message, sender }, { headers });
}

export const getMessages = () => {
    const url = api.rootUrl + api.messages;

    return axios.get(url, {}, { headers });
}

export const deleteMessage = (id) => {
    const url = api.rootUrl + api.messages + id;

    return axios.delete(url, { id }, { headers });
}