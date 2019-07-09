new Vue({
    el: '#desafio',
    data: {
        nome: 'Gabriel Roque',
        idade: 20,
        numero: 0,
        linkImg: 'https://i.imgur.com/cWxuoBe.jpg'
    },
    methods: {
        randomNumber: () => {
            this.numero = Math.random()
            return numero
        }
    }
})