<template>
  <div>
    <v-form ref="form" lazy-validation>
     <v-dialog v-model="dialog" width="800px">
      <v-btn color="primary" dark slot="activator" class="mb-2">Nova {{ titulo }}</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">Cadastro de {{ titulo }}</span>
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
          {{ titulo }}s cadastrados
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
  import Dataset from '../components/Datasetrest'
  export default {
    extends: Dataset,
    data: function () {
      return {
        headers: [
          { text: 'Código', align: 'left', value: 'codigo' },
          { text: 'Nome', align: 'left', value: 'nome' },
          { text: 'Endereço', align: 'left', value: 'endereco' },
          { text: 'Cidade', align: 'left', value: 'cidade' },
          { text: 'UF', align: 'left', value: 'uf' },
          { text: 'Telefone', align: 'left', value: 'fone' },
          { text: 'Observação', align: 'left', value: 'obs' },
          { text: '', sortable: false, align: 'left', value: 'editar' }
        ],
        newRegistro: {
          codigo: '',
          nome: '',
          endereco: '',
          cidade: '',
          uf: '',
          fone: '',
          obs: ''
        },
        nometabela: 'lojas',
        titulo: 'Loja'
      }
    }
  }
</script>
