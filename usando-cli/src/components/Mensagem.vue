<template>
    <div id="index">
        <div class="center">
            <h1>{{msg}}</h1>
        </div>
        <div class="center">
            <p> {{nome}} </p>
        </div>
    </div>
</template>


<script>

export default {
    name: 'index',
    data() {
        return {
            msg: 'Ola mundo!'
        }
    },
    props: {
        nome: String
    }
}

</script>

<style>
    .center {
        display: flex;
        justify-content: center;
    }
</style>
