/**
 * Created by Bartlomiej Rutkowski on 23.10.16.
 */
import axios from 'axios';

export const PROD_URL = 'api';
export const DEV_URL = 'http://localhost:8000/api';
const getURL = () => {
    switch(process.env.NODE_ENV) {
        case 'production':
            return PROD_URL;
        case 'development':
            return DEV_URL;
        case 'test':
            return process.env.BASE_URL || ('http://localhost:8000/api');
        default:
            return DEV_URL;
    }
};
const API_URL = getURL();

export function callApiGet(URL, query) {
    return axios
        .get(`${API_URL}/${URL}`, {
            params: {
                ...query
            }
        });
}


export function callApiPost(URL, body) {
    return axios
        .post(`${API_URL}/${URL}`, body);
}

export function sendFile(URL, file, fileName = 'file') {
    const data = new FormData();
    data.append(fileName, file);
    return axios.post(`${API_URL}/${URL}`, data);
}


export function callApiPut(URL, body) {
    return axios
        .put(`${API_URL}/${URL}`, body);
}
/*
 export function callApiDelete(URL, body) {
 return axios
 .put(`${API_URL}/${URL}`, {body});
 }
 */
