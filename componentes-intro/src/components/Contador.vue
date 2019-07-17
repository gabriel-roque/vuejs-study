<template>
    <div>
        <h1>Contador: {{contador}}</h1>
        <button @click="aumentar">+</button>
        <button @click="diminuir">-</button>
        <hr>
        <News></News>

    </div>
</template>

<script>
    import News from './home/News.vue'

    export default {
        name: 'Contador',
        components: {
          News
        },
        data() {
            return {
                contador: 0
            }
        },
        methods:{
            aumentar(){
                this.contador++
            },
            diminuir(){
                this.contador--
            }
        }
    }
</script>


<!-- A tag scoped garante que o css aplicado sera somente neste componente-->
<style scoped>

</style>