import axios from 'axios';

const ax = axios.create({
    baseURL: 'http://iscope.asyadcapital.com:2101/api',
});

let globalToken;

ax.interceptors.request.use(
    (config) => {
        if (config.url.includes('Login')) return config;
        config.headers.Authorization = `bearer ${globalToken}`;
        return config;
    },
    (err) => Promise.reject(err)
);

export const userAx = {
    login: (data) =>
        ax.post('/Users/GetLookupLogin', data).then((res) => {
            globalToken = res.data.token;
            return res;
        }),
    getAll: (data) => ax.post('/Users/Search', data),
    resetPass: (data) => ax.post('/Users/ResetUserPassword', data),
    createUser: (data) => ax.post('/Users/Add', data),
    editUser: (data) => ax.post('/Users/Edit', data),
};
