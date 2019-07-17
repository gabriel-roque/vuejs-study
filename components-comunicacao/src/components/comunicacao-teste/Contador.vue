<template>
    <div class="center">
        <h1>Contador: {{contador}}</h1>
        <hr>
        <AcoesContador
                :valorContador="contador"
                @updateContador="contador = $event"
        />
    </div>
</template>

<script>
    import AcoesContador from './AcoesContador.vue'

    export default {
        name: "Contador",
        data() {
            return {
                contador: 0
            }
        },
        components: {
            AcoesContador
        }
    }
</script>

<style scoped>


</style>