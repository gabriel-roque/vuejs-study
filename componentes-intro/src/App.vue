<template>
    <div id="app">
        {{mensagem}}
        <hr>
        <Contador></Contador>
    </div>
</template>

<script>
    import Contador from './components/Contador'

    export default {
        name: 'Home',
        data() {
            return {
                mensagem: 'Meu 1 Component',
            }
        },
        components: {
            Contador
        }
    }
</script>


<style>

</style>