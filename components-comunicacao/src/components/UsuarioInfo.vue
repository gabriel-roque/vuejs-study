<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <h6>Esse e um componente FILHO</h6>
        <p>Nome do Usuario: <strong>{{nome}}</strong></p>
        <button @click="resetNome">Reiniciar</button>
        <button @click="reiniciarFn">Reiniciar (Callback)</button>
    </div>
</template>

<script>
    export default {
        props: {
            nome: {
                type: String,
                required: true
            },
            //Recebi uma funcao do comp PAI, posso chamar ela, ou seja CALLBACK
            reiniciarFn: Function
        },
        methods: {
            resetNome(){
                this.nome = 'Pedro'
                this.$emit('nomeMudou', this.nome)
            }
        }
    }
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
