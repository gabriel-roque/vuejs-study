<template>
    <nav class="menu">
        <ul>
            <!-- exact so deixa ativo a classe se for somente essa rota-->
            <router-link to="/" tag="li" active-class="active" exact>
                <a>Inicio</a></router-link>
            <router-link to="/usuario" tag="li" active-class="active">
                <a>Usuarios</a></router-link>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>

</style>