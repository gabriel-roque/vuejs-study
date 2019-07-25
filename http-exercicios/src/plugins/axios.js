import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-a63f1.firebaseio.com/'

// Criando uma propriedade global no vue que da acesso ao axios
Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            headers: { // Definindo cabecalhos das requisicoes
                get: {
                    "Authorizacao": "PaoDeBatataJWT-GET"
                },
                post: {
                    "Authorizacao": "PaoDeBatataJWT-POST"
                },
                // "Authorizacao": "PaoDeBatataJWT-GLOBAL"
            }
        })

        // Interceptadores de request
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log("Metodo HTTP utilizado: " + config.method)
            return config
        }, error => Promise.reject(error)) // rejeita a request em caso de erro

        // Interceptadores de resposta
        Vue.prototype.$http.interceptors.response.use(resp => {
            console.log("Interceptando a respota >> Codigo HTTP: " + resp.status)
            return resp
        },error => Promise.reject(error))
    }
})