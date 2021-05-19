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

// Message Actions

export const createMessage = (content, sender) => {
    const url = api.rootUrl + api.messages;

    console.log('axios', {content, sender});

    return axios.post(url, { content, sender }, { headers });
}

export const getMessages = () => {
    const url = api.rootUrl + api.messages;

    return axios.get(url, {}, { headers });
}