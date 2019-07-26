import Axios from 'axios'
import Sha256 from 'js-sha256'
import Config from '@common/app.config.js'


class Http {
    // 类的默认执行方法
    constructor(options) {
        this.options = options;
        this.init(this.options);
        return this.httpInstance(this.options);
    };

    init(options) {

        // 是否拦截, 默认拦截
        this.intercept = typeof options.intercept === 'undefined' || options.intercept;

        // 创建axios实例
        this.httpInstance = Axios.create({
            baseURL: Config.host + Config.api,
            timeout: 30000,
        });

        this.setHeaders();
        this.setInterceptors();
    };

    // 设置拦截器
    setInterceptors() {
        if (!this.intercept) return;

        // 请求拦截
        this.httpInstance.interceptors.request.use( config => {
            return config;
        }, error => {
            this.errorHandle(error);
        })

        // 响应拦截
        this.httpInstance.interceptors.response.use(response => {
            if (response.data.code === '0') {
                return response.data;
            }
            else {
                this.errorHandle(response.data);
            }
        }, error => {
            console.log('响应拦截进入了错误');
            this.errorHandle(error);
        })

    };

    // 设置请求头
    setHeaders() {
        // 设置query参数
        this.options.params = Object.assign(this.options.params || {}, {
            mealcomeTime: Date.parse(new Date()),
            rand: Math.floor(Math.random() * 9000) + 1000,
        })


        let signUrl = Config.api + this.options.url + '?' + Object.keys(this.options.params).map((key, i) => {
            let kvPair = key + '=' + this.options.params[key]
            return i === 0 ? kvPair : '&' + kvPair
        }).join('');
        //
        signUrl = encodeURI(signUrl);
        const signStr = Sha256(signUrl);

        // // 设置headers
        this.options.headers = this.options.headers || {}
        this.options.headers = Object.assign({}, this.options.headers, {
            'sign': signStr,
        })
    };

    // 错误处理
    errorHandle(error) {

    }
}

export default async options => {
    if (options.method !== 'post') {
        options.params = options.data
    }
    let result = await new Http(options);
    if (result) {
        return result.data;
    }
}