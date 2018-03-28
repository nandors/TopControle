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
                    name='txtcompras'
                    label='compras'
                    :rules="[ v => !!v || 'compras requerido']"
                    id='txtcompras'
                    type='text'
                    v-model='newRegistro.compras'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtfatura'
                    label='fatura'
                    :rules="[ v => !!v || 'fatura requerido']"
                    id='txtfatura'
                    type='text'
                    v-model='newRegistro.fatura'
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
                    name='txtvalorpago'
                    label='valorpago'
                    :rules="[ v => !!v || 'valor pago requerido']"
                    id='txtvalorago'
                    type='text'
                    v-model='newRegistro.valorpago'
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
                    name='txtpedido'
                    label='pedido'
                    :rules="[ v => !!v || 'pedido requerido']"
                    id='txtpedido'
                    type='text'
                    v-model='newRegistro.pedido'
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
              <td class='text-xs-left'>{{ props.item.codigo }}</td>
              <td class='text-xs-left'>{{ props.item.compras }}</td>
              <td class='text-xs-left'>{{ props.item.fatura }}</td>
              <td class='text-xs-left'>{{ props.item.valor }}</td>
              <td class='text-xs-left'>{{ props.item.vencimento }}</td>
              <td class='text-xs-left'>{{ props.item.pagamento }}</td>
              <td class='text-xs-left'>{{ props.item.valorpago }}</td>
              <td class='text-xs-left'>{{ props.item.obs }}</td>
              <td class='text-xs-left'>{{ props.item.pedido }}</td>

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
            Sua pesquisa por "{{ search }}" n�o encontrou resultados.
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
          { text: 'codigo', align: 'left', value: 'codigo' },
          { text: 'compras', align: 'left', value: 'compras' },
          { text: 'fatura', align: 'left', value: 'fatura' },
          { text: 'valor', align: 'left', value: 'valor' },
          { text: 'vencimento', align: 'left', value: 'vencimento' },
          { text: 'pagamento', align: 'left', value: 'pagamento' },
          { text: 'valorpago', align: 'left', value: 'valorpago' },
          { text: 'obs', align: 'left', value: 'obs' },
          { text: 'pedido', align: 'left', value: 'pedido' }
        ],
        newRegistro: {
          chave: '',
          codigo: '',
          compras: '',
          fatura: '',
          valor: '',
          vencimento: '',
          pagamento: '',
          valorpago: '',
          obs: '',
          pedido: ''
        },
        nometabela: 'historico',
        titulo: 'historico'
      }
    }
  }
</script>
