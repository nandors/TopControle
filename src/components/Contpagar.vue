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
                    name='txtnotafiscal'
                    label='notafiscal'
                    :rules="[ v => !!v || 'notafiscal requerido']"
                    id='txtnotafiscal'
                    type='text'
                    v-model='newRegistro.notafiscal'
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
                    name='txtduplicnumero'
                    label='duplicnumero'
                    :rules="[ v => !!v || 'duplicnumero requerido']"
                    id='txtduplicnumero'
                    type='text'
                    v-model='newRegistro.duplicnumero'
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
                    name='txtvencimento'
                    label='vencimento'
                    :rules="[ v => !!v || 'vencimento requerido']"
                    id='txtvencimento'
                    type='text'
                    v-model='newRegistro.vencimento'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtpagamento'
                    label='pagamento'
                    :rules="[ v => !!v || 'pagamento requerido']"
                    id='txtpagamento'
                    type='text'
                    v-model='newRegistro.pagamento'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtjuros'
                    label='juros'
                    :rules="[ v => !!v || 'juros requerido']"
                    id='txtjuros'
                    type='text'
                    v-model='newRegistro.juros'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtmulta'
                    label='multa'
                    :rules="[ v => !!v || 'multa requerido']"
                    id='txtmulta'
                    type='text'
                    v-model='newRegistro.multa'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtdesconto'
                    label='desconto'
                    :rules="[ v => !!v || 'desconto requerido']"
                    id='txtdesconto'
                    type='text'
                    v-model='newRegistro.desconto'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtvalorpago'
                    label='valorpago'
                    :rules="[ v => !!v || 'valorpago requerido']"
                    id='txtvalorpago'
                    type='text'
                    v-model='newRegistro.valorpago'
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
              <td class='text-xs-left'>{{ props.item.notafiscal }}</td>
              <td class='text-xs-left'>{{ props.item.fornecedor }}</td>
              <td class='text-xs-left'>{{ props.item.duplicnumero }}</td>
              <td class='text-xs-left'>{{ props.item.valor }}</td>
              <td class='text-xs-left'>{{ props.item.vencimento }}</td>
              <td class='text-xs-left'>{{ props.item.pagamento }}</td>
              <td class='text-xs-left'>{{ props.item.juros }}</td>
              <td class='text-xs-left'>{{ props.item.multa }}</td>
              <td class='text-xs-left'>{{ props.item.desconto }}</td>
              <td class='text-xs-left'>{{ props.item.valorpago }}</td>

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
          { text: 'notafiscal', align: 'left', value: 'notafiscal' },
          { text: 'fornecedor', align: 'left', value: 'fornecedor' },
          { text: 'duplicnumero', align: 'left', value: 'duplicnumero' },
          { text: 'valor', align: 'left', value: 'valor' },
          { text: 'vencimento', align: 'left', value: 'vencimento' },
          { text: 'pagamento', align: 'left', value: 'pagamento' },
          { text: 'juros', align: 'left', value: 'juros' },
          { text: 'multa', align: 'left', value: 'multa' },
          { text: 'desconto', align: 'left', value: 'desconto' },
          { text: 'valorpago', align: 'left', value: 'valorpago' }
        ],
        newRegistro: {
          chave: '',
          notafiscal: '',
          fornecedor: '',
          duplicnumero: '',
          valor: '',
          vencimento: '',
          pagamento: '',
          juros: '',
          multa: '',
          desconto: '',
          valorpago: ''
        },
        nometabela: 'ContPagar',
        titulo: 'ContPagar'
      }
    }
  }
</script>
