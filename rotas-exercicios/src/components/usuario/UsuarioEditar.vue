<template>
    <div class="usuario-editar">
        <h3>Usuario Editar</h3>
        Codigo: {{id}}
        <hr>
        <router-link tag="button" to="/usuario" primario>Confirmar</router-link>
    </div>
</template>

<script>
    export default {
        name: "UsuarioEditar",
        props: ['id'],

        beforeRouteLeave(to, from, next) { //intercepta antes de sair da rota atual
            const ask = confirm('Deseja sair?')
            ask ? next() : next(false)
        }
    }
</script>

<style scoped>

</style>