export default {
    namespaced: true,
    state: {
        produtos: []
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        },
    },
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        },
    },
    actions: {
        // Destruction (Operador que expoe o metodo para fora do objeto)
        adicionarProduto({commit}, payload) {
            setTimeout(() => {
                commit('adicionarProduto', payload) // Nome que vai chamar a  mutation
            }, 1000)
        }
    }
}