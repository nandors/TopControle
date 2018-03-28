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
                    name='txtcodigo'
                    label='codigo'
                    :rules="[ v => !!v || 'codigo requerido']"
                    id='txtcodigo'
                    type='text'
                    v-model='newRegistro.codigo'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtdtaentra'
                    label='dtaentra'
                    :rules="[ v => !!v || 'dtaentra requerido']"
                    id='txtdtaentra'
                    type='text'
                    v-model='newRegistro.dtaentra'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtpedido'
                    label='pedido'
                    :rules="[ v => !!v || 'pedido requerido']"
                    id='txtpedido'
                    type='text'
                    v-model='newRegistro.pedido'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtvalor'
                    label='valor'
                    :rules="[ v => !!v || 'valor requerido']"
                    id='txtvalor'
                    type='text'
                    v-model='newRegistro.valor'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtfornecedor'
                    label='fornecedor'
                    :rules="[ v => !!v || 'fornecedor requerido']"
                    id='txtfornecedor'
                    type='text'
                    v-model='newRegistro.fornecedor'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtdtaped'
                    label='dtaped'
                    :rules="[ v => !!v || 'dtaped requerido']"
                    id='txtdtaped'
                    type='text'
                    v-model='newRegistro.dtaped'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtpreventrega'
                    label='preventrega'
                    :rules="[ v => !!v || 'preventrega requerido']"
                    id='txtpreventrega'
                    type='text'
                    v-model='newRegistro.preventrega'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtentrega'
                    label='entrega'
                    :rules="[ v => !!v || 'entrega requerido']"
                    id='txtentrega'
                    type='text'
                    v-model='newRegistro.entrega'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcolegio'
                    label='colegio'
                    :rules="[ v => !!v || 'colegio requerido']"
                    id='txtcolegio'
                    type='text'
                    v-model='newRegistro.colegio'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtobs'
                    label='obs'
                    :rules="[ v => !!v || 'obs requerido']"
                    id='txtobs'
                    type='text'
                    v-model='newRegistro.obs'
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
              <td class='text-xs-left'>{{ props.item.codigo }}</td>
              <td class='text-xs-left'>{{ props.item.dtaentra }}</td>
              <td class='text-xs-left'>{{ props.item.pedido }}</td>
              <td class='text-xs-left'>{{ props.item.valor }}</td>
              <td class='text-xs-left'>{{ props.item.fornecedor }}</td>
              <td class='text-xs-left'>{{ props.item.dtaped }}</td>
              <td class='text-xs-left'>{{ props.item.preventrega }}</td>
              <td class='text-xs-left'>{{ props.item.entrega }}</td>
              <td class='text-xs-left'>{{ props.item.colegio }}</td>
              <td class='text-xs-left'>{{ props.item.obs }}</td>

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
          { text: 'codigo', align: 'left', value: 'codigo' },
          { text: 'dtaentra', align: 'left', value: 'dtaentra' },
          { text: 'pedido', align: 'left', value: 'pedido' },
          { text: 'valor', align: 'left', value: 'valor' },
          { text: 'fornecedor', align: 'left', value: 'fornecedor' },
          { text: 'dtaped', align: 'left', value: 'dtaped' },
          { text: 'preventrega', align: 'left', value: 'preventrega' },
          { text: 'entrega', align: 'left', value: 'entrega' },
          { text: 'colegio', align: 'left', value: 'colegio' },
          { text: 'obs', align: 'left', value: 'obs' }
        ],
        newRegistro: {
          codigo: '',
          dtaentra: '',
          pedido: '',
          valor: '',
          fornecedor: '',
          dtaped: '',
          preventrega: '',
          entrega: '',
          colegio: '',
          obs: ''
        },
        nometabela: 'entradas',
        titulo: 'entradas'
      }
    }
  }
</script>
