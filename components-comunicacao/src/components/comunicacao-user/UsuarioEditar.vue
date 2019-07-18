<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <h6>Esse e um componente FILHO</h6>
        <label for="nome">Insira uma nome: </label>
        <input id="nome" type="text" @keyup.enter="updateNome">
    </div>
</template>

<script>
    export default {
        props:{
            nome: String
        },
        methods: {
            updateNome(e){
                let nome = e.target.value
                this.$emit('updateNome', nome)
            }
        }
    }
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
