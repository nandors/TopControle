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
                    name='txtdtalancamento'
                    label='dtalancamento'
                    :rules="[ v => !!v || 'dtalancamento requerido']"
                    id='txtdtalancamento'
                    type='text'
                    v-model='newRegistro.dtalancamento'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtdtavencimento'
                    label='dtavencimento'
                    :rules="[ v => !!v || 'dtavencimento requerido']"
                    id='txtdtavencimento'
                    type='text'
                    v-model='newRegistro.dtavencimento'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtdescicao'
                    label='descicao'
                    :rules="[ v => !!v || 'descicao requerido']"
                    id='txtdescicao'
                    type='text'
                    v-model='newRegistro.descicao'
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
                    name='txtsaldo'
                    label='saldo'
                    :rules="[ v => !!v || 'saldo requerido']"
                    id='txtsaldo'
                    type='text'
                    v-model='newRegistro.saldo'
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

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtpago'
                    label='pago'
                    :rules="[ v => !!v || 'pago requerido']"
                    id='txtpago'
                    type='text'
                    v-model='newRegistro.pago'
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
              <td class='text-xs-left'>{{ props.item.dtalancamento }}</td>
              <td class='text-xs-left'>{{ props.item.dtavencimento }}</td>
              <td class='text-xs-left'>{{ props.item.descicao }}</td>
              <td class='text-xs-left'>{{ props.item.valor }}</td>
              <td class='text-xs-left'>{{ props.item.saldo }}</td>
              <td class='text-xs-left'>{{ props.item.obs }}</td>
              <td class='text-xs-left'>{{ props.item.pago }}</td>

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
          { text: 'dtalancamento', align: 'left', value: 'dtalancamento' },
          { text: 'dtavencimento', align: 'left', value: 'dtavencimento' },
          { text: 'descicao', align: 'left', value: 'descicao' },
          { text: 'valor', align: 'left', value: 'valor' },
          { text: 'saldo', align: 'left', value: 'saldo' },
          { text: 'obs', align: 'left', value: 'obs' },
          { text: 'pago', align: 'left', value: 'pago' }
        ],
        newRegistro: {
          chave: '',
          dtalancamento: '',
          dtavencimento: '',
          descicao: '',
          valor: '',
          saldo: '',
          obs: '',
          pago: ''
        },
        nometabela: 'APagar',
        titulo: 'APagar'
      }
    }
  }
</script>
