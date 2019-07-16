new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('CUIDADO!')
        },
        alterar(e){
            this.valor = e.target.value
        }
    },
})