<!--COMPONENTE FILHO-->
<template>
    <div>
        <button @click="adicionar">+</button>
        <button @click="diminuir">-</button>
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
                let valor = this.contador
                valor++
                this.$emit('updateContador', valor)
            },
            diminuir(){
                let valor = this.contador
                valor--
                this.$emit('updateContador', valor)
            }
        },
        computed: {
           contador(){
                return this.valorContador
           }
        }
    }
</script>

<style scoped>

</style>