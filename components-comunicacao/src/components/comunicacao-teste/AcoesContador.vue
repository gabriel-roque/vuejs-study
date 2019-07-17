<template>
    <div>
        <button @click="adicionar">+</button>
        <button @click="dimnuir">-</button>
    </div>
</template>

<script>
    export default {
        name: "AcoesContador",
        props: {
            valorContador: Number
        },
        methods: {
            adicionar(){
                this.valorContador++
                this.$emit('updateContador', this.valorContador)
            },
            dimnuir(){
                this.valorContador--
                this.$emit('updateContador', this.valorContador)
            }
        }
    }
</script>

<style scoped>

</style>