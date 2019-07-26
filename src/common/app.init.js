import Vue from 'vue';
import '@assets/css/global.styl';
import '@assets/img/font/iconfont.css';
import '@assets/img/font/iconfont.js';

import adapt from './utils/adapt.js'

export default callback => {

    // 根据页面宽度自适应基准文字大小
    adapt();
    window.addEventListener('resize', () => {
        adapt();
    });
    /*
        Object.keys(Component).forEach((key) => {
            Vue.component(Component[key].name, Component[key]);
        });

        // 全局组件配置
        Vue.use((v, options) => {
            // 创建组件实例方法
            const createVm = function (component) {
                const Component = Vue.extend(component);
                const vm = new Component().$mount();
                document.body.appendChild(vm.$el);
                return vm;
            };

            // 挂载组件实例
            v.prototype.$ui = window.$ui = {
                loader: createVm(Component.Loader),
                dialog: createVm(Component.Dialog),
                message: createVm(Component.Message)
            };

            // 全局事件通信总线实例
            v.prototype.$bus = window.$bus = new Vue();
        * */

    callback && callback();
}