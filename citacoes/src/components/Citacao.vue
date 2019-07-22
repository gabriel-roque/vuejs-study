<template>
    <div class="citacao">
        <!-- Carregando Valor via SLOT  -->
        <slot name="citacao"></slot>
        <slot name="autor"></slot>
    </div>
</template>

<script>
export default {
    props: {
        citacao: String
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
