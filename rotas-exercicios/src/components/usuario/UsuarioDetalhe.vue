<template>
    <div class="usuario-detalhes">
        <h3>Usuario Detalhe</h3>
        <p><strong>Codigo:</strong> {{id}}</p>
                                <!--  :to="`/usuario/${id}/editar`" -->
        <router-link tag="button" primario
                     :to="{name: 'editarUsuario', params:{id},
                     query: {complete: true, lingua: 'pt' }}">
                    <!--utilizado quando se passa parametros pela rota ex: ...?nome=marta%idade=35-->
            Editar
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "UsuarioDetalhe",
        props: ['id'],
        beforeRouteEnter(to, from, next) {
            const auth = true
            auth ? next() : next(false)
        }
    }
</script>

<style scoped>

</style>