<template>
    <div id="app">
        <h1>Registrar Reclamação</h1>
        <div class="conteudo">
            <form class="painel" v-if="!enviado">
                <div class="cabecalho">Formulário</div>
                <Rotulo nome="E-mail">
                    <input type="text" v-model.lazy.trim="email">
                    <!-- lazy so atualiza dado depois que sair do foco do input-->
                    <!-- remove espacos em brancos do input -->
                </Rotulo>
                <Rotulo nome="Senha">
                    <input type="password" v-model.lazy.trim="senha">
                </Rotulo>
                <Rotulo nome="Idade">
                    <input type="number" v-model.number.lazy.trim="idade">
                    <!-- transforma para numero -->
                </Rotulo>
                <Rotulo nome="Mensagem" >
                    <textarea name="" cols="30" rows="5" v-model.lazy.trim="mensagem"></textarea>
                </Rotulo>
                <Rotulo nome="Características do Problema">
                    <span class="mr-4"><input type="checkbox" name="problema" value="reproduzivel"
                                              v-model="problema.reproduzivel"> Reproduzível</span>
                    <span><input type="checkbox" name="problema" value="intermitente"
                                 v-model="problema.intermitente"> Intermitente</span>
                </Rotulo>
                <Rotulo nome="Qual produto?">
                    <span class="mr-4"><input type="radio" v-model="produto" value="web"> Web</span>
                    <span class="mr-4"><input type="radio" v-model="produto" value="mobile"> Mobile</span>
                    <span><input type="radio" v-model="produto" value="outro"> Outro</span>
                </Rotulo>
                <Rotulo nome="Prioridade">
                    <select v-model="prioridade">
                        <template v-for="(valor, index) in prioridadeData">
                            <option
                                    :value="valor.valor"
                                    :key="index">{{valor.nome}}
                            </option>
                        </template>
                    </select>
                </Rotulo>
                <Rotulo nome="Primeira Reclamação?">
                    <Escolha
                            :reclamacao="reclamacao"
                            @updateReclamacao="reclamacao = $event"
                    />
                </Rotulo>
                <hr>
                <button @click.prevent="enviar">Enviar</button>
            </form>
            <div class="painel" v-if="enviado">
                <div class="cabecalho">Resultado</div>
                <Rotulo nome="E-mail">
                    <span>{{email}}</span>
                </Rotulo>
                <Rotulo nome="Senha">
                    <span>{{senha}}</span>
                </Rotulo>
                <Rotulo nome="Idade">
                    <span>{{idade}}</span>
                </Rotulo>
                <Rotulo nome="Mensagem">
                    <span>{{mensagem}}</span>
                </Rotulo>
                <Rotulo nome="Marque as Opções">
                    <span>???</span>
                </Rotulo>
                <Rotulo nome="Qual produto?">
                    <span>{{produto}}</span>
                </Rotulo>
                <Rotulo nome="Prioridade">
                    <span>{{prioridade}}</span>
                </Rotulo>
                <Rotulo nome="Primeira Reclamação?">
                    <span v-if="reclamacao">Sim</span>
                    <span v-else>Nao</span>
                </Rotulo>
            </div>
        </div>
    </div>
</template>

<script>
    import Rotulo from './components/Rotulo.vue'
    import Escolha from './components/Escolha.vue'

    export default {
        name: 'app',
        components: {Rotulo, Escolha},

        methods: {
            enviar(){
                this.enviado = !this.enviado
            }
        },

        data() {
            return {
                email: null,
                senha: null,
                idade: null,
                mensagem: null,
                problema: {
                    reproduzivel: false,
                    intermitente: false,
                },
                produto: 'web',
                prioridadeData: [
                    {'nome': 'Alta', 'valor': 3},
                    {'nome': 'Media', 'valor': 2},
                    {'nome': 'Baixa', 'valor': 1},
                ],
                prioridade: 1,
                reclamacao: false,
                enviado: false
            }
        }
    }
</script>

<style>

    body {
        background-color: #ECECEC;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        display: flex;
        flex-direction: column;
    }

    .conteudo {
        display: flex;
    }

    .painel {
        flex: 1;
        background: #FFF;
        margin: 0px 10px;
        padding: 20px;
        border: 1px solid #AAA;
        border-radius: 5px;
    }

    .painel .cabecalho {
        width: 100%;
        background-color: #DDD;
        padding: 10px 0px;
        border-radius: 5px;
        font-size: 1.4rem;
    }

    #app form button {
        float: right;
        margin: 10px 0px;
        padding: 10px 20px;
        font-size: 1.4rem;
        border-radius: 5px;
        color: #FFF;
        background-color: #2196F3;
    }

    #app h1 {
        font-weight: 200;
        margin: 20px;
        padding: 0;
    }

    .mr-4 {
        margin-right: 40px;
    }
</style>
