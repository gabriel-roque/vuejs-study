<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <h6>Esse é um componente PAI</h6>
        <p>Nome: <strong>{{nome}}</strong></p>

        <button @click="alterarNome">Alterar Nome</button>
        <hr>

<!--    A comunicacao de um component PAI >> FILHO e simples, apenas passa o valor da propriedade esperada    -->
<!--    Porem de FILHO >> PAI e necessario disparar um evento para notificar alteracao ao PAI ou function com CALLBACK    -->

        <div class="componentes">
            <app-usuario-info
                    :nome="nome"
                    @nomeMudou="nome = $event"
                    :reiniciarFn="reiniciarNome"
            />
            <app-usuario-editar/>
        </div>

    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Pedro'
        }
    },
    methods: {
        alterarNome(){
            this.nome = 'Ana'
        },
        reiniciarNome(){
            this.nome = 'Pedro'
        }
    },
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
