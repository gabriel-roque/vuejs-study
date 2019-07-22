<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <!-- Passando um dado via SLOT -->
        <Citacao>
            <p slot="citacao">{{citacoes[indice].texto}}</p>
            <p slot="autor">{{citacoes[indice].autor}}</p>
        </Citacao>
    </div>
</template>

<script>
    import Citacao from '@/components/Citacao.vue'

    export default {
        data() {
            return {
                numero: 0,
                citacoes: [{
                    fonte: 'Jornal do Empreendedor',
                    texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                    autor: 'Margaret Mead'
                }, {
                    fonte: 'Frases de Mãe',
                    texto: 'Isso não é um quarto, é um chiqueiro.',
                    autor: 'Roberta'
                }, {
                    fonte: 'Frases de Pai',
                    texto: 'Vou contar até 3! 1, 2, 2...',
                    autor: 'Gustavo'
                }]
            }
        },
        components: {
            Citacao
        },
        computed: {
            indice() {
                return Math.abs(this.numero % 3)
            }
        }
    }
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
