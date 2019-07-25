import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://crud-axios.firebaseio.com/'


Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            headers: {
                "provider": "anonymous",
                "uid": "lU3IOKUpqvbkZe1NyW06pNVHNaH2"
            }
        })
    }
})