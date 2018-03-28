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
                    name='txtchave'
                    label='chave'
                    :rules="[ v => !!v || 'chave requerido']"
                    id='txtchave'
                    type='text'
                    v-model='newRegistro.chave'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcodpedido'
                    label='codpedido'
                    :rules="[ v => !!v || 'codpedido requerido']"
                    id='txtcodpedido'
                    type='text'
                    v-model='newRegistro.codpedido'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtdata'
                    label='data'
                    :rules="[ v => !!v || 'data requerido']"
                    id='txtdata'
                    type='text'
                    v-model='newRegistro.data'
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
                    name='txtentrada'
                    label='entrada'
                    :rules="[ v => !!v || 'entrada requerido']"
                    id='txtentrada'
                    type='text'
                    v-model='newRegistro.entrada'
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
              <td class='text-xs-left'>{{ props.item.chave }}</td>
              <td class='text-xs-left'>{{ props.item.codpedido }}</td>
              <td class='text-xs-left'>{{ props.item.data }}</td>
              <td class='text-xs-left'>{{ props.item.valor }}</td>
              <td class='text-xs-left'>{{ props.item.colegio }}</td>
              <td class='text-xs-left'>{{ props.item.entrada }}</td>

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
          { text: 'chave', align: 'left', value: 'chave' },
          { text: 'codpedido', align: 'left', value: 'codpedido' },
          { text: 'data', align: 'left', value: 'data' },
          { text: 'valor', align: 'left', value: 'valor' },
          { text: 'colegio', align: 'left', value: 'colegio' },
          { text: 'entrada', align: 'left', value: 'entrada' }
        ],
        newRegistro: {
          chave: '',
          codpedido: '',
          data: '',
          valor: '',
          colegio: '',
          entrada: ''
        },
        nometabela: 'Pagamento',
        titulo: 'Pagamento'
      }
    }
  }
</script>
