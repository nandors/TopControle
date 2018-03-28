<template>
  <div>
    <v-form ref="form" lazy-validation>
     <v-dialog v-model="dialog" width="800px">
      <v-btn color="primary" dark slot="activator" class="mb-2">Nova Loja</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">Cadastro de Lojas</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                    name="txtCodigo"
                    label="Código"
                    :rules="[ v => !!v || 'Código é requerido']"
                    id="txtCodigo"
                    type="text"
                    v-model="newRegistro.codigo"
                    required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                    name="txtNome"
                    label="Nome"
                    :rules="[ v => !!v || 'Nome é requerido']"
                    id="txtNome"
                    type="text"
                    v-model="newRegistro.nome"
                    required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                    name="txtEndereco"
                    label="Endereço"
                    :rules="[ v => !!v || 'Endereço é requerido']"
                    id="txtEndereco"
                    type="text"
                    v-model="newRegistro.endereco"
                    required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                    name="txtCidade"
                    label="Cidade"
                    :rules="[ v => !!v || 'Cidade é requerida']"
                    id="txtCidade"
                    type="text"
                    v-model="newRegistro.cidade"
                    required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                    name="txtUf"
                    label="UF"
                    :rules="[ v => !!v || 'UF é requerida']"
                    id="txtUf"
                    type="text"
                    v-model="newRegistro.uf"
                    required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                    name="txtFone"
                    label="Fone"
                    :rules="[ v => !!v || 'Fone é requerido']"
                    id="txtFone"
                    type="text"
                    v-model="newRegistro.fone"
                    required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                    name="txtObs"
                    label="Observação"
                    :rules="[ v => !!v || 'Observação é requerida']"
                    id="txtObs"
                    type="text"
                    v-model="newRegistro.obs"
                    required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <input type="hidden" id="registroKey">
            <v-btn color="blue darken-1" flat @click.native="close">Cancelar</v-btn>
            <v-btn id="btnNew" color="blue darken-1" flat @click.native="addRegistro">Incluir</v-btn>
            <v-btn id="btnUp"  class="btn--disabled" color="blue darken-1" flat @click.native="updatebtn">Atualizar</v-btn>
          </v-card-actions>
       </v-card>
     </v-dialog>
    </v-form>
      <v-card>
        <v-card-title>
          Lojas cadastrados
          <v-spacer></v-spacer>
          <v-text-field
            append-icon="search"
            label="Pesquisar"
            single-line
            hide-details
            v-model="search"
          ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="registros"
            :search="search"
            item-key="codigo"
            class="elevation-1"
            rows-per-page-text= "Linhas por páginas"
          >
          <template slot="items" slot-scope="props">
            <td class="text-xs-left">{{ props.item.codigo }}</td>
            <td class="text-xs-left">{{ props.item.nome }}</td>
            <td class="text-xs-left">{{ props.item.endereco }}</td>
            <td class="text-xs-left">{{ props.item.cidade }}</td>
            <td class="text-xs-left">{{ props.item.uf }}</td>
            <td class="text-xs-left">{{ props.item.fone }}</td>
            <td class="text-xs-left">{{ props.item.obs }}</td>
            <td class="justify-center layout px-0">
              <v-btn icon class="mx-0" @click="updateRegistro(props.item)">
                <v-icon color="teal">edit</v-icon>
              </v-btn>
              <v-btn icon class="mx-0" @click="removeRegistro(props.item)">
                <v-icon color="pink">delete</v-icon>
              </v-btn>
            </td>
          </template>
          <template slot="pageText" slot-scope="props">
            Linhas {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
          </template>
          <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Sua pesquisa por "{{ search }}" não encontrou resultados.
          </v-alert>
        </v-data-table>
      </v-card>
  </div>
</template>
<script>

import Firebase from 'firebase'
import toastr from 'toastr'
import VueFire from 'vuefire'
import Vue from 'vue'

Vue.use(VueFire)
let db = Firebase.database()
let tabelaRef = db.ref('lojas')

export default {
  firebase: {
    registros: tabelaRef
  },
  data: () => ({
    dialog: false,
    headers: [
      { text: 'Código', align: 'left', value: 'codigo' },
      { text: 'Nome', align: 'left', value: 'nome' },
      { text: 'Endereço', align: 'left', value: 'endereco' },
      { text: 'Cidade', align: 'left', value: 'cidade' },
      { text: 'UF', align: 'left', value: 'uf' },
      { text: 'Fone', align: 'left', value: 'fone' },
      { text: 'Observação', align: 'left', value: 'obs' },
      { text: '', sortable: false, align: 'left', value: 'editar' }
    ],
    items: [],
    valid: true,
    search: '',
    newRegistro: {
      codigo: '',
      nome: '',
      endereco: '',
      cidade: '',
      uf: '',
      fone: '',
      obs: ''
    }
  }),
  computed: {
    loading () {
      return this.$store.getters.getLoading
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    addRegistro: function () {
//      const maplat = document.getElementById('getlat').value
//      const maplng = document.getElementById('getlng').value
//      mapRef.push({'lat': maplat, 'lng': maplng})
      if (this.$refs.form.validate()) {
        tabelaRef.push(this.newRegistro)
        this.clear()
        this.close()
      }
    },
    updateRegistro: function (tabela) {
      this.newRegistro.title = tabela.title
      this.newRegistro.author = tabela.author
      this.newRegistro.url = tabela.url
      const btnUpdate = document.getElementById('btnUp')
      btnUpdate.classList.remove('btn--disabled')
      const btnNew = document.getElementById('btnNew')
      btnNew.classList.add('btn--disabled')
      const inHidden = document.getElementById('registroKey')
      inHidden.value = tabela['.key']
      this.dialog = true
    },
    updatebtn: function () {
      const getIdUpdate = document.getElementById('registroKey')
      tabelaRef.child(getIdUpdate.value).set(this.newRegistro)
      this.clear()
      const btnUpdate = document.getElementById('btnUp')
      btnUpdate.classList.add('btn--disabled')
      this.close()
    },
    removeRegistro: function (tabela) {
      confirm('Confirma a exclusão?') && tabelaRef.child(tabela['.key']).remove() && toastr.success('Registro removido')
    },
    close () {
      const btnUpdate = document.getElementById('btnUp')
      btnUpdate.classList.add('btn--disabled')
      const btnNew = document.getElementById('btnNew')
      btnNew.classList.remove('btn--disabled')
      this.clear()
      this.dialog = false
    },
    clear () {
      this.$refs.form.reset()
    }

  }
}
</script>
