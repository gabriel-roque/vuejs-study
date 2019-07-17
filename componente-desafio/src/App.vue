<template>
    <v-app>
        <Menu/>
        <Toolbar/>
        <v-content>
            <Slider/>
        </v-content>
        <Footer/>
    </v-app>
</template>

<script>
    import Menu from './components/templates/Menu.vue'
    import Toolbar from './components/home/Toolbar.vue'
    import Slider from './components/home/Slider.vue'
    import Footer from './components/templates/Footer.vue'

    export default {
        components: {
            Menu,
            Toolbar,
            Slider,
            Footer,
        }
    }
</script>
