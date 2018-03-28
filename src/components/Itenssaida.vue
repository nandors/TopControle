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
                    name='txtindregistro'
                    label='indregistro'
                    :rules="[ v => !!v || 'indregistro requerido']"
                    id='txtindregistro'
                    type='text'
                    v-model='newRegistro.indregistro'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtnumeropedidocompra'
                    label='numeropedidocompra'
                    :rules="[ v => !!v || 'numeropedidocompra requerido']"
                    id='txtnumeropedidocompra'
                    type='text'
                    v-model='newRegistro.numeropedidocompra'
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
                    name='txtcodigopoduto'
                    label='codigopoduto'
                    :rules="[ v => !!v || 'codigopoduto requerido']"
                    id='txtcodigopoduto'
                    type='text'
                    v-model='newRegistro.codigopoduto'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtquantidade'
                    label='quantidade'
                    :rules="[ v => !!v || 'quantidade requerido']"
                    id='txtquantidade'
                    type='text'
                    v-model='newRegistro.quantidade'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtvalorunitario'
                    label='valorunitario'
                    :rules="[ v => !!v || 'valorunitario requerido']"
                    id='txtvalorunitario'
                    type='text'
                    v-model='newRegistro.valorunitario'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtipi'
                    label='ipi'
                    :rules="[ v => !!v || 'ipi requerido']"
                    id='txtipi'
                    type='text'
                    v-model='newRegistro.ipi'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtoutros'
                    label='outros'
                    :rules="[ v => !!v || 'outros requerido']"
                    id='txtoutros'
                    type='text'
                    v-model='newRegistro.outros'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtfrete'
                    label='frete'
                    :rules="[ v => !!v || 'frete requerido']"
                    id='txtfrete'
                    type='text'
                    v-model='newRegistro.frete'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtdificms'
                    label='dificms'
                    :rules="[ v => !!v || 'dificms requerido']"
                    id='txtdificms'
                    type='text'
                    v-model='newRegistro.dificms'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtencargos'
                    label='encargos'
                    :rules="[ v => !!v || 'encargos requerido']"
                    id='txtencargos'
                    type='text'
                    v-model='newRegistro.encargos'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtmargem'
                    label='margem'
                    :rules="[ v => !!v || 'margem requerido']"
                    id='txtmargem'
                    type='text'
                    v-model='newRegistro.margem'
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
                    name='txticmcredito'
                    label='icmcredito'
                    :rules="[ v => !!v || 'icmcredito requerido']"
                    id='txticmcredito'
                    type='text'
                    v-model='newRegistro.icmcredito'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtdatasaida'
                    label='datasaida'
                    :rules="[ v => !!v || 'datasaida requerido']"
                    id='txtdatasaida'
                    type='text'
                    v-model='newRegistro.datasaida'
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
              <td class='text-xs-left'>{{ props.item.indregistro }}</td>
              <td class='text-xs-left'>{{ props.item.numeropedidocompra }}</td>
              <td class='text-xs-left'>{{ props.item.notafiscal }}</td>
              <td class='text-xs-left'>{{ props.item.fornecedor }}</td>
              <td class='text-xs-left'>{{ props.item.codigopoduto }}</td>
              <td class='text-xs-left'>{{ props.item.quantidade }}</td>
              <td class='text-xs-left'>{{ props.item.valorunitario }}</td>
              <td class='text-xs-left'>{{ props.item.ipi }}</td>
              <td class='text-xs-left'>{{ props.item.outros }}</td>
              <td class='text-xs-left'>{{ props.item.frete }}</td>
              <td class='text-xs-left'>{{ props.item.dificms }}</td>
              <td class='text-xs-left'>{{ props.item.encargos }}</td>
              <td class='text-xs-left'>{{ props.item.margem }}</td>
              <td class='text-xs-left'>{{ props.item.desconto }}</td>
              <td class='text-xs-left'>{{ props.item.icmcredito }}</td>
              <td class='text-xs-left'>{{ props.item.datasaida }}</td>

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
          { text: 'indregistro', align: 'left', value: 'indregistro' },
          { text: 'numeropedidocompra', align: 'left', value: 'numeropedidocompra' },
          { text: 'notafiscal', align: 'left', value: 'notafiscal' },
          { text: 'fornecedor', align: 'left', value: 'fornecedor' },
          { text: 'codigopoduto', align: 'left', value: 'codigopoduto' },
          { text: 'quantidade', align: 'left', value: 'quantidade' },
          { text: 'valorunitario', align: 'left', value: 'valorunitario' },
          { text: 'ipi', align: 'left', value: 'ipi' },
          { text: 'outros', align: 'left', value: 'outros' },
          { text: 'frete', align: 'left', value: 'frete' },
          { text: 'dificms', align: 'left', value: 'dificms' },
          { text: 'encargos', align: 'left', value: 'encargos' },
          { text: 'margem', align: 'left', value: 'margem' },
          { text: 'desconto', align: 'left', value: 'desconto' },
          { text: 'icmcredito', align: 'left', value: 'icmcredito' },
          { text: 'datasaida', align: 'left', value: 'datasaida' }
        ],
        newRegistro: {
          indregistro: '',
          numeropedidocompra: '',
          notafiscal: '',
          fornecedor: '',
          codigopoduto: '',
          quantidade: '',
          valorunitario: '',
          ipi: '',
          outros: '',
          frete: '',
          dificms: '',
          encargos: '',
          margem: '',
          desconto: '',
          icmcredito: '',
          datasaida: ''
        },
        nometabela: 'itensSAIDA',
        titulo: 'itensSAIDA'
      }
    }
  }
</script>
