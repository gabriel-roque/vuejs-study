<!--COMPONENTE FILHO-->
<template>
    <strong>{{valorContador}}</strong>
</template>

<script>
    export default {
        name: "ExibirNumero",
        props: {
            valorContador: Number
        }
    }
</script>

<style scoped>

</style>