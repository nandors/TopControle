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
                    name='txtdescricao'
                    label='descricao'
                    :rules="[ v => !!v || 'descricao requerido']"
                    id='txtdescricao'
                    type='text'
                    v-model='newRegistro.descricao'
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
                    name='txtunitario'
                    label='unitario'
                    :rules="[ v => !!v || 'unitario requerido']"
                    id='txtunitario'
                    type='text'
                    v-model='newRegistro.unitario'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txttotal'
                    label='total'
                    :rules="[ v => !!v || 'total requerido']"
                    id='txttotal'
                    type='text'
                    v-model='newRegistro.total'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txttotalgeral'
                    label='totalgeral'
                    :rules="[ v => !!v || 'totalgeral requerido']"
                    id='txttotalgeral'
                    type='text'
                    v-model='newRegistro.totalgeral'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtproduto'
                    label='produto'
                    :rules="[ v => !!v || 'produto requerido']"
                    id='txtproduto'
                    type='text'
                    v-model='newRegistro.produto'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtgola'
                    label='gola'
                    :rules="[ v => !!v || 'gola requerido']"
                    id='txtgola'
                    type='text'
                    v-model='newRegistro.gola'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtpunho'
                    label='punho'
                    :rules="[ v => !!v || 'punho requerido']"
                    id='txtpunho'
                    type='text'
                    v-model='newRegistro.punho'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcortado'
                    label='cortado'
                    :rules="[ v => !!v || 'cortado requerido']"
                    id='txtcortado'
                    type='text'
                    v-model='newRegistro.cortado'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtpronto'
                    label='pronto'
                    :rules="[ v => !!v || 'pronto requerido']"
                    id='txtpronto'
                    type='text'
                    v-model='newRegistro.pronto'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtentregue'
                    label='entregue'
                    :rules="[ v => !!v || 'entregue requerido']"
                    id='txtentregue'
                    type='text'
                    v-model='newRegistro.entregue'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtestoque'
                    label='estoque'
                    :rules="[ v => !!v || 'estoque requerido']"
                    id='txtestoque'
                    type='text'
                    v-model='newRegistro.estoque'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtmalha'
                    label='malha'
                    :rules="[ v => !!v || 'malha requerido']"
                    id='txtmalha'
                    type='text'
                    v-model='newRegistro.malha'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtsilk'
                    label='silk'
                    :rules="[ v => !!v || 'silk requerido']"
                    id='txtsilk'
                    type='text'
                    v-model='newRegistro.silk'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtestampa'
                    label='estampa'
                    :rules="[ v => !!v || 'estampa requerido']"
                    id='txtestampa'
                    type='text'
                    v-model='newRegistro.estampa'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtbordado'
                    label='bordado'
                    :rules="[ v => !!v || 'bordado requerido']"
                    id='txtbordado'
                    type='text'
                    v-model='newRegistro.bordado'
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
                    name='txtlocalizacao'
                    label='localizacao'
                    :rules="[ v => !!v || 'localizacao requerido']"
                    id='txtlocalizacao'
                    type='text'
                    v-model='newRegistro.localizacao'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcor'
                    label='cor'
                    :rules="[ v => !!v || 'cor requerido']"
                    id='txtcor'
                    type='text'
                    v-model='newRegistro.cor'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txttamanho'
                    label='tamanho'
                    :rules="[ v => !!v || 'tamanho requerido']"
                    id='txttamanho'
                    type='text'
                    v-model='newRegistro.tamanho'
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
              <td class='text-xs-left'>{{ props.item.descricao }}</td>
              <td class='text-xs-left'>{{ props.item.quantidade }}</td>
              <td class='text-xs-left'>{{ props.item.unitario }}</td>
              <td class='text-xs-left'>{{ props.item.total }}</td>
              <td class='text-xs-left'>{{ props.item.totalgeral }}</td>
              <td class='text-xs-left'>{{ props.item.produto }}</td>
              <td class='text-xs-left'>{{ props.item.gola }}</td>
              <td class='text-xs-left'>{{ props.item.punho }}</td>
              <td class='text-xs-left'>{{ props.item.cortado }}</td>
              <td class='text-xs-left'>{{ props.item.pronto }}</td>
              <td class='text-xs-left'>{{ props.item.entregue }}</td>
              <td class='text-xs-left'>{{ props.item.estoque }}</td>
              <td class='text-xs-left'>{{ props.item.malha }}</td>
              <td class='text-xs-left'>{{ props.item.silk }}</td>
              <td class='text-xs-left'>{{ props.item.estampa }}</td>
              <td class='text-xs-left'>{{ props.item.bordado }}</td>
              <td class='text-xs-left'>{{ props.item.colegio }}</td>
              <td class='text-xs-left'>{{ props.item.localizacao }}</td>
              <td class='text-xs-left'>{{ props.item.cor }}</td>
              <td class='text-xs-left'>{{ props.item.tamanho }}</td>

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
          { text: 'descricao', align: 'left', value: 'descricao' },
          { text: 'quantidade', align: 'left', value: 'quantidade' },
          { text: 'unitario', align: 'left', value: 'unitario' },
          { text: 'total', align: 'left', value: 'total' },
          { text: 'totalgeral', align: 'left', value: 'totalgeral' },
          { text: 'produto', align: 'left', value: 'produto' },
          { text: 'gola', align: 'left', value: 'gola' },
          { text: 'punho', align: 'left', value: 'punho' },
          { text: 'cortado', align: 'left', value: 'cortado' },
          { text: 'pronto', align: 'left', value: 'pronto' },
          { text: 'entregue', align: 'left', value: 'entregue' },
          { text: 'estoque', align: 'left', value: 'estoque' },
          { text: 'malha', align: 'left', value: 'malha' },
          { text: 'silk', align: 'left', value: 'silk' },
          { text: 'estampa', align: 'left', value: 'estampa' },
          { text: 'bordado', align: 'left', value: 'bordado' },
          { text: 'colegio', align: 'left', value: 'colegio' },
          { text: 'localizacao', align: 'left', value: 'localizacao' },
          { text: 'cor', align: 'left', value: 'cor' },
          { text: 'tamanho', align: 'left', value: 'tamanho' }
        ],
        newRegistro: {
          chave: '',
          codpedido: '',
          descricao: '',
          quantidade: '',
          unitario: '',
          total: '',
          totalgeral: '',
          produto: '',
          gola: '',
          punho: '',
          cortado: '',
          pronto: '',
          entregue: '',
          estoque: '',
          malha: '',
          silk: '',
          estampa: '',
          bordado: '',
          colegio: '',
          localizacao: '',
          cor: '',
          tamanho: ''
        },
        nometabela: 'ItensPedido',
        titulo: 'ItensPedido'
      }
    }
  }
</script>
