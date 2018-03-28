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
                    name='txtidregistro'
                    label='idregistro'
                    :rules="[ v => !!v || 'idregistro requerido']"
                    id='txtidregistro'
                    type='text'
                    v-model='newRegistro.idregistro'
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
                    name='txtsecao'
                    label='secao'
                    :rules="[ v => !!v || 'secao requerido']"
                    id='txtsecao'
                    type='text'
                    v-model='newRegistro.secao'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcodigofornecedor'
                    label='codigofornecedor'
                    :rules="[ v => !!v || 'codigofornecedor requerido']"
                    id='txtcodigofornecedor'
                    type='text'
                    v-model='newRegistro.codigofornecedor'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtdataemissao'
                    label='dataemissao'
                    :rules="[ v => !!v || 'dataemissao requerido']"
                    id='txtdataemissao'
                    type='text'
                    v-model='newRegistro.dataemissao'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtdatarecebimento'
                    label='datarecebimento'
                    :rules="[ v => !!v || 'datarecebimento requerido']"
                    id='txtdatarecebimento'
                    type='text'
                    v-model='newRegistro.datarecebimento'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txttotalprodutos'
                    label='totalprodutos'
                    :rules="[ v => !!v || 'totalprodutos requerido']"
                    id='txttotalprodutos'
                    type='text'
                    v-model='newRegistro.totalprodutos'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtvalortotal'
                    label='valortotal'
                    :rules="[ v => !!v || 'valortotal requerido']"
                    id='txtvalortotal'
                    type='text'
                    v-model='newRegistro.valortotal'
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
                    name='txticms'
                    label='icms'
                    :rules="[ v => !!v || 'icms requerido']"
                    id='txticms'
                    type='text'
                    v-model='newRegistro.icms'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtisento'
                    label='isento'
                    :rules="[ v => !!v || 'isento requerido']"
                    id='txtisento'
                    type='text'
                    v-model='newRegistro.isento'
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
                    name='txtdespesas'
                    label='despesas'
                    :rules="[ v => !!v || 'despesas requerido']"
                    id='txtdespesas'
                    type='text'
                    v-model='newRegistro.despesas'
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
                    name='txtcodpedido'
                    label='codpedido'
                    :rules="[ v => !!v || 'codpedido requerido']"
                    id='txtcodpedido'
                    type='text'
                    v-model='newRegistro.codpedido'
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
              <td class='text-xs-left'>{{ props.item.idregistro }}</td>
              <td class='text-xs-left'>{{ props.item.notafiscal }}</td>
              <td class='text-xs-left'>{{ props.item.secao }}</td>
              <td class='text-xs-left'>{{ props.item.codigofornecedor }}</td>
              <td class='text-xs-left'>{{ props.item.dataemissao }}</td>
              <td class='text-xs-left'>{{ props.item.datarecebimento }}</td>
              <td class='text-xs-left'>{{ props.item.totalprodutos }}</td>
              <td class='text-xs-left'>{{ props.item.valortotal }}</td>
              <td class='text-xs-left'>{{ props.item.frete }}</td>
              <td class='text-xs-left'>{{ props.item.icms }}</td>
              <td class='text-xs-left'>{{ props.item.isento }}</td>
              <td class='text-xs-left'>{{ props.item.outros }}</td>
              <td class='text-xs-left'>{{ props.item.despesas }}</td>
              <td class='text-xs-left'>{{ props.item.ipi }}</td>
              <td class='text-xs-left'>{{ props.item.codpedido }}</td>

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
          { text: 'idregistro', align: 'left', value: 'idregistro' },
          { text: 'notafiscal', align: 'left', value: 'notafiscal' },
          { text: 'secao', align: 'left', value: 'secao' },
          { text: 'codigofornecedor', align: 'left', value: 'codigofornecedor' },
          { text: 'dataemissao', align: 'left', value: 'dataemissao' },
          { text: 'datarecebimento', align: 'left', value: 'datarecebimento' },
          { text: 'totalprodutos', align: 'left', value: 'totalprodutos' },
          { text: 'valortotal', align: 'left', value: 'valortotal' },
          { text: 'frete', align: 'left', value: 'frete' },
          { text: 'icms', align: 'left', value: 'icms' },
          { text: 'isento', align: 'left', value: 'isento' },
          { text: 'outros', align: 'left', value: 'outros' },
          { text: 'despesas', align: 'left', value: 'despesas' },
          { text: 'ipi', align: 'left', value: 'ipi' },
          { text: 'codpedido', align: 'left', value: 'codpedido' }
        ],
        newRegistro: {
          idregistro: '',
          notafiscal: '',
          secao: '',
          codigofornecedor: '',
          dataemissao: '',
          datarecebimento: '',
          totalprodutos: '',
          valortotal: '',
          frete: '',
          icms: '',
          isento: '',
          outros: '',
          despesas: '',
          ipi: '',
          codpedido: ''
        },
        nometabela: 'NOTASAIDA',
        titulo: 'NOTASAIDA'
      }
    }
  }
</script>
