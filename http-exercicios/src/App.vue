<template>
    <div id="app">
        <h1>HTTP com Axios</h1>

        <div class="container">

            <b-alert show :variant="mensagem.tipo"
                     fade dismissible
            >{{mensagem.texto}}</b-alert>

            <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" id="nome" placeholder="Ex: Maria"
                       v-model.lazy="usuario.nome">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Ex: mail@gmail.com"
                       v-model.lazy="usuario.email">
            </div>
            <button class="btn btn-primary" @click="salvar">Enviar</button>
            <button class="ml-2 btn btn-success" @click="getUsers">GET</button>
        </div>

        <div class="container mt-5">

            <table class="table">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Acoes</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(usuario, id) in usuarios" :key="id">
                    <th scope="row">{{id}}</th>
                    <td>{{usuario.nome}}</td>
                    <td>{{usuario.email}}</td>
                    <td>
                        <button class="btn btn-success mr-2" @click="editar(id)">Editar</button>
                        <button class="btn btn-danger" @click="deletar(id)">Excluir</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>


</template>

<script>
    import axios from 'axios'

    export default {
        name: 'CrudAxios',
        data() {
            return {
                id: null,
                usuarios: [],
                usuario: {
                    nome: '',
                    email: '',
                },
                mensagem: {
                    texto: '',
                    tipo: ''
                }
            }
        },

        created(){
            this.getUsers()
        },


        methods: {
            salvar() {

                const metodo = this.id ? 'patch' : 'post'
                const finalUrl = this.id ? `${this.id}.json` : '.json'
                this.$http[metodo](`/usuarios/${finalUrl}`, this.usuario)
                    .then(_ => {
                        this.getUsers();
                        this.mensagem.texto = 'Operacao com Sucesso!';
                        this.mensagem.tipo = 'success'
                    })

                // this.$http.post('usuarios.json', {
                //         nome: this.usuario.nome,
                //         email: this.usuario.email
                //     }
                // ).then(
                //     this.clearForm(),
                //     this.getUsers()
                // );
            },

            editar(id) {
                this.id = id
                this.usuario = {...this.usuarios[id]}
            },

            deletar(id) {
                this.$http.delete(`/usuarios/${id}.json`).then(() => {
                    this.getUsers();
                    this.mensagem.texto = 'Exclusao efetuada!';
                    this.mensagem.tipo = 'danger'
                })
            },

            getUsers() {
                this.$http.get('usuarios.json').then(resp => {
                    this.usuarios = resp.data;
                    this.clearForm();
                })

                // poderia usar assim

                // axios.get('usuarios.json').then(resp => {
                //     this.usuarios = resp.data
                // })
            },


            clearForm() {
                this.usuario.nome = '';
                this.usuario.email = '';
                this.id = null;
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        font-size: 1.5rem;
    }

    #app h1 {
        text-align: center;
        margin: 50px;
    }
</style>
