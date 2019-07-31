<template>
    <div class="usuario">
        <h2>Usuario</h2>
        <hr>
        <transition mode="out-in"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut">
            <router-view/>
        </transition>

<!--        <button sucesso @click="backToHome">Voltar</button>-->
    </div>
</template>

<script>
    export default {
        name: "usuario",
        // data() {
        //     return {
        //         id: this.$route.params.id
        //     }
        // },
        // watch: {
        //     $route(to) {
        //         this.id = to.params.id
        //     }
        // },
        methods: {
            backToHome() {
                // this.$router.push('/')
                // this.$router.push({path: '/'})
                this.$router.push({name: 'home'})
            }
        }
    }
</script>

<style scoped>

</style>