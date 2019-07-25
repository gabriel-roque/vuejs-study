<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>CRUD AXIOS</span>
                <span class="font-weight-light">|FIREBASE</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-content>
            <Crud/>
        </v-content>
    </v-app>
</template>

<script>
    import Crud from './components/Crud.vue'

    export default {
        name: 'Home',
        components: {
            Crud,
        },
    };
</script>
