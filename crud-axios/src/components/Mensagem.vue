<template>
    <div class="text-center ma-2">
        <v-snackbar
                v-model="status"
                :color="color"
        >
            {{ text }}
            <v-btn
                    color="white"
                    text
                    @click="status = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    export default {
        name: "Mensagem",
        props: {
            status: Boolean,
            color: String,
            text: String
        }
    }
</script>
