import Axios from 'axios'
import config from '@/config/base.js'
Axios.defaults.headers['Content-Type'] = 'application/json';
Axios.defaults.timeout = 30000;

let request = function (path, params, isPost) {
    if (process.env.NODE_ENV === 'production') {
        Axios.defaults.baseURL = config.baseUrl;
    } else {
        Axios.defaults.baseURL = '/'
    }

    // eslint-disable-next-line no-undefined
    if (params === undefined) {
        params = {}
    }
    return new Promise(resolve => {
        if (isPost) {
            return Axios.post(path, params, {}).then(
                res => {
                    resolve(res);
                },
                err => {
                    resolve({code: -1, message: '请求错误', text: JSON.stringify(err)});
                });
        } else {
            return Axios.get(path, {
                params: params,
            }).then(
                res => {
                    resolve(res);
                },
                err => {
                    resolve({code: -1, message: '请求错误', text: JSON.stringify(err)});
                });
        }
    });
};


export default {
    post(path, params, isChain) {
        return request(path, params, true, isChain);
    },
    get(path, params) {
        return request(path, params, false);
    }
}




