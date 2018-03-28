<template>
  <div>
    <v-form ref="form" lazy-validation>
     <v-dialog v-model="dialog" width="800px">
      <v-btn color="primary" dark slot="activator" class="mb-2">Adicionar {{ titulo }}</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">Cadastro de {{ titulo }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcod'
                    label='cod'
                    :rules="[ v => !!v || 'cod requerido']"
                    id='txtcod'
                    type='text'
                    v-model='newRegistro.cod'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtnome'
                    label='nome'
                    :rules="[ v => !!v || 'nome requerido']"
                    id='txtnome'
                    type='text'
                    v-model='newRegistro.nome'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtfornecedores'
                    label='fornecedores'
                    :rules="[ v => !!v || 'fornecedores requerido']"
                    id='txtfornecedores'
                    type='text'
                    v-model='newRegistro.fornecedores'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtobervacao'
                    label='obervacao'
                    :rules="[ v => !!v || 'obervacao requerido']"
                    id='txtobervacao'
                    type='text'
                    v-model='newRegistro.obervacao'
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
            rows-per-page-text= "Linhas por paginas"
          >
          <template slot="items" slot-scope="props">
              <td class='text-xs-left'>{{ props.item.cod }}</td>
              <td class='text-xs-left'>{{ props.item.nome }}</td>
              <td class='text-xs-left'>{{ props.item.fornecedores }}</td>
              <td class='text-xs-left'>{{ props.item.obervacao }}</td>

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
          { text: 'cod', align: 'left', value: 'cod' },
          { text: 'nome', align: 'left', value: 'nome' },
          { text: 'fornecedores', align: 'left', value: 'fornecedores' },
          { text: 'obervacao', align: 'left', value: 'obervacao' }
        ],
        newRegistro: {
          cod: '',
          nome: '',
          fornecedores: '',
          obervacao: ''
        },
        nometabela: 'ProdutoCompra',
        titulo: 'ProdutoCompra'
      }
    }
  }
</script>
