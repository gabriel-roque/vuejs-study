<template>
    <v-container grid-list-md text-center>
        <v-layout wrap justify-center row fill-height>
            <v-flex xs4>
                <v-card dark color="secondary">
                    <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                            class="pa-lg-5"
                    >
                        <v-text-field
                                v-model="user.name"
                                :counter="10"
                                :rules="nameRules"
                                label="Name"
                                required
                        ></v-text-field>

                        <v-text-field
                                v-model="user.sobrenome"
                                :counter="10"
                                :rules="nameRules"
                                label="Sobrenome"
                                required
                        ></v-text-field>

                        <v-btn
                                v-if="!user.id"
                                :disabled="!valid"
                                color="success"
                                class="mr-4"
                                @click="validate"
                        >
                            Send
                        </v-btn>

                        <v-btn
                                v-else
                                :disabled="!valid"
                                color="blue"
                                class="mr-4"
                                @click="updateUser(user.id)"
                        >
                            Update
                        </v-btn>

                        <v-btn
                                color="error"
                                class="mr-4"
                                @click="reset"
                        >
                            Reset Form
                        </v-btn>

                    </v-form>
                </v-card>
            </v-flex>
            <v-flex xs4 ml-5>
                <v-simple-table
                        dark
                        fixed-header
                        :height="300"
                >
                    <thead>
                    <tr>
                        <th class="text-left">Name</th>
                        <th class="text-left">Sobrenome</th>
                        <th class="text-left">Acoes</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(users, id) in users" :key="id">
                        <td class="text-left">{{ users.name }}</td>
                        <td class="text-left">{{ users.sobrenome }}</td>
                        <td class="text-left">
                            <v-btn fab small color="cyan" class="mr-2" @click="loadUser(id)">
                                <v-icon small class="ml-sm-1">far fa-edit</v-icon>
                            </v-btn>
                            <v-btn fab small color="red" @click="deleteUser(id)">
                                <v-icon small class="ml-sm-1">fa fa-trash-alt</v-icon>
                            </v-btn>
                        </td>
                    </tr>
                    </tbody>
                </v-simple-table>
            </v-flex>
        </v-layout>

        <Mensagem
                :status="msg.snackbar"
                :color="msg.color"
                :text="msg.text"
        />

    </v-container>

</template>

<script>
    import Mensagem from './Mensagem.vue'

    export default {
        name: 'Form',
        data: () => ({
            valid: true,
            user: {
                id: null,
                name: '',
                sobrenome: '',
            },
            users: [],
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            msg: {
                snackbar: false,
                text: '',
                color: null
            }
        }),

        components: {
            Mensagem
        },

        created() {
            this.getUsers();
        },

        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    this.salvar()
                }
            },

            statusMsg(st, msg, color) {
                this.msg.snackbar = st;
                this.msg.text = msg;
                this.msg.color = color
            },

            salvar() {
                this.$http.post('usuarios.json', this.user)
                    .then(resp => {
                        this.reset();
                        this.statusMsg(true, 'Salvo com sucesso!', 'success')
                    })
                    .catch(error => console.log(error))
            },
            deleteUser(id) {
                this.$http.delete(`/usuarios/${id}.json`)
                    .then(() => {
                        this.reset();
                        this.statusMsg(true, 'Deletado com sucesso!', 'red')
                    })
                    .catch(error => console.log(error))
            },
            loadUser(id) {
                this.$http.get(`/usuarios/${id}.json`)
                    .then(resp => {
                        this.user.name = resp.data.name;
                        this.user.sobrenome = resp.data.sobrenome;
                        this.user.id = id
                    })
            },
            updateUser(id) {
                this.$http.patch(`/usuarios/${id}.json`, this.user)
                    .then(resp => {
                        this.reset();
                        this.statusMsg(true, 'Atualizando com sucesso!', 'blue')
                    })
                    .catch(error => console.log(error))
            },
            getUsers() {
                this.$http.get('usuarios.json')
                    .then(resp => {
                        this.users = resp.data
                    })
            },

            reset() {
                this.$refs.form.reset();
                this.user.name = '';
                this.user.sobrenome = '';
                this.user.id = null;
                this.getUsers();
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            },
        },
    }
</script>