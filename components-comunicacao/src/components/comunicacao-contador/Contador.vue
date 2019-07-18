<!--
COMPONENTE PAI
Passa o valor para 2 componenetes filhos
um dele atualiza o valor e volta com o novo valor atualizado atraves de um evento disparado
com o dado ja atualizado envia para outro que apenas exibe o valor
-->
<template>
    <div>
        <h1>Contador: <ExibirNumero :valorContador="contador"/></h1>
        <hr>
        <AcoesContador
                :valorContador="contador"
                @updateContador="contador = $event"
        />
    </div>
</template>

<script>
    import AcoesContador from './AcoesContador.vue'
    import ExibirNumero from './ExibirNumero.vue'

    export default {
        name: "Contador",
        data() {
            return {
                contador: 0
            }
        },
        components: {
            AcoesContador,
            ExibirNumero
        }
    }
</script>

<style scoped>


</style>