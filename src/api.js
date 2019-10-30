import myAxios from 'axios/index';

let baseURL = '';

if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    baseURL = 'http://192.168.31.235:8282'
}

const axios = myAxios.create({
    baseURL: baseURL
});

axios.interceptors.request.use(
    config => {
        // let token = sessionStorage.getItem('token');
        // Object.assign(config.headers, {'token': token});
        return config;
    },
    error => {
        return error
    }
);

axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return error
    }
);

//封装Axios
export const request = function (method, url, params, paramsEx) {
    if (paramsEx.length > 0) {
        for (let item of paramsEx) {
            url = url + '/' + item;
        }
    }

    switch (method) {
        case 'get':
            return axios.get(url, {params: params}).then(res => res.data);
        case 'post':
            return axios.post(url, params).then(res => res.data);
        case 'put':
            return axios.put(url, params).then(res => res.data);
        case 'delete':
            return axios.delete(url, {params: params}).then(res => res.data);
        case 'export':
            return axios.get(url, {
                params: params,
                headers: {'Content-Type': 'application/vnd.ms-excel'},
                responseType: 'arraybuffer'
            }).then(res => res.data);
    }
};

//请求模板
export const APIGet = (params = null, ...paramsEx) => {return request('get', '/admin/account/ifLogin', params, paramsEx)};
export const APIPost = (params = null, ...paramsEx) => {return request('post', '/admin/account/ifLogin', params, paramsEx)};
export const APIPut = (params = null, ...paramsEx) => {return request('put', '/admin/account/ifLogin', params, paramsEx)};
export const APIDelete = (params = null, ...paramsEx) => {return request('delete', '/admin/account/ifLogin', params, paramsEx)};

//投诉管理
export const ComplaintAdd = (params = null, ...paramsEx) => {return request('post', '/function/api/v1/complaint/insertComplaint', params, paramsEx)};

