<template>
    <div id="app">
        <app-usuario/>
        <Contador/>

    </div>
</template>

<script>
    import AppUsuario from "./components/comunicacao-user/Usuario.vue"
    import Contador from './components/comunicacao-contador/Contador.vue'

    export default {
        name: "app",
        components: {
            AppUsuario,
            Contador
        }
    }
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        font-size: 1.7rem;
    }

    h1, h2, p {
        margin: 10px;
        padding: 0px;
    }

    button {
        font-size: 1.5rem;
        padding: 5px 15px;
        border-radius: 4px;
        margin: 10px;
    }
</style>
