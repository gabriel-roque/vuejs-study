import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Erro404 from  './components/NaoEncontrado.vue'

import Usuario from './components/usuario/Usuario.vue'
import UsuarioLista from './components/usuario/UsuarioLista.vue'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
import UsuarioEditar from './components/usuario/UsuarioEditar.vue'


Vue.use(Router)
//A partir dentro dos meus components poderei acessar as rotas

const routesObject = [
    {
        path: '/',
        component: Inicio,
        name: 'home'
    }, {
        // Passando parametro na rota
        path: '/usuario',
        component: Usuario,
        // Usando props nao se faz mais necessario usar watch para monitorar a alteracao do parametro da rota
        props: true,
        // Rotas filhas
        children: [
            {path: '', component: UsuarioLista},
            {path: ':id', component: UsuarioDetalhe, props: true,
                beforeEnter: ((to, from, next) => {
                    console.log('Antes da rota -> user detalhe')
                    next()
                })
            },
            {path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario'}
        ]
    }, {
        path: '*',
        redirect: '/404',
    }, {
        path: '/404',
        component: Erro404
    }
]


const router = new Router({
    mode: 'history',
    routes: routesObject
})



router.beforeEach((to, from, next) => {
    console.log(to, from)
    next()
})

export default router;