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
                    name='txtcodigoproduto'
                    label='codigoproduto'
                    :rules="[ v => !!v || 'codigoproduto requerido']"
                    id='txtcodigoproduto'
                    type='text'
                    v-model='newRegistro.codigoproduto'
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
                    name='txtunidademedida'
                    label='unidademedida'
                    :rules="[ v => !!v || 'unidademedida requerido']"
                    id='txtunidademedida'
                    type='text'
                    v-model='newRegistro.unidademedida'
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
                    name='txtoutras'
                    label='outras'
                    :rules="[ v => !!v || 'outras requerido']"
                    id='txtoutras'
                    type='text'
                    v-model='newRegistro.outras'
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
                    name='txtdificm'
                    label='dificm'
                    :rules="[ v => !!v || 'dificm requerido']"
                    id='txtdificm'
                    type='text'
                    v-model='newRegistro.dificm'
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
                    name='txtvalorvenda'
                    label='valorvenda'
                    :rules="[ v => !!v || 'valorvenda requerido']"
                    id='txtvalorvenda'
                    type='text'
                    v-model='newRegistro.valorvenda'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtestoqueminimo'
                    label='estoqueminimo'
                    :rules="[ v => !!v || 'estoqueminimo requerido']"
                    id='txtestoqueminimo'
                    type='text'
                    v-model='newRegistro.estoqueminimo'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtestoquemaximo'
                    label='estoquemaximo'
                    :rules="[ v => !!v || 'estoquemaximo requerido']"
                    id='txtestoquemaximo'
                    type='text'
                    v-model='newRegistro.estoquemaximo'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtestoqueatual'
                    label='estoqueatual'
                    :rules="[ v => !!v || 'estoqueatual requerido']"
                    id='txtestoqueatual'
                    type='text'
                    v-model='newRegistro.estoqueatual'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtultimacompra'
                    label='ultimacompra'
                    :rules="[ v => !!v || 'ultimacompra requerido']"
                    id='txtultimacompra'
                    type='text'
                    v-model='newRegistro.ultimacompra'
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
              <td class='text-xs-left'>{{ props.item.secao }}</td>
              <td class='text-xs-left'>{{ props.item.codigoproduto }}</td>
              <td class='text-xs-left'>{{ props.item.descricao }}</td>
              <td class='text-xs-left'>{{ props.item.unidademedida }}</td>
              <td class='text-xs-left'>{{ props.item.valorunitario }}</td>
              <td class='text-xs-left'>{{ props.item.ipi }}</td>
              <td class='text-xs-left'>{{ props.item.outras }}</td>
              <td class='text-xs-left'>{{ props.item.frete }}</td>
              <td class='text-xs-left'>{{ props.item.dificm }}</td>
              <td class='text-xs-left'>{{ props.item.encargos }}</td>
              <td class='text-xs-left'>{{ props.item.margem }}</td>
              <td class='text-xs-left'>{{ props.item.valorvenda }}</td>
              <td class='text-xs-left'>{{ props.item.estoqueminimo }}</td>
              <td class='text-xs-left'>{{ props.item.estoquemaximo }}</td>
              <td class='text-xs-left'>{{ props.item.estoqueatual }}</td>
              <td class='text-xs-left'>{{ props.item.ultimacompra }}</td>
              <td class='text-xs-left'>{{ props.item.desconto }}</td>

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
          { text: 'secao', align: 'left', value: 'secao' },
          { text: 'codigoproduto', align: 'left', value: 'codigoproduto' },
          { text: 'descricao', align: 'left', value: 'descricao' },
          { text: 'unidademedida', align: 'left', value: 'unidademedida' },
          { text: 'valorunitario', align: 'left', value: 'valorunitario' },
          { text: 'ipi', align: 'left', value: 'ipi' },
          { text: 'outras', align: 'left', value: 'outras' },
          { text: 'frete', align: 'left', value: 'frete' },
          { text: 'dificm', align: 'left', value: 'dificm' },
          { text: 'encargos', align: 'left', value: 'encargos' },
          { text: 'margem', align: 'left', value: 'margem' },
          { text: 'valorvenda', align: 'left', value: 'valorvenda' },
          { text: 'estoqueminimo', align: 'left', value: 'estoqueminimo' },
          { text: 'estoquemaximo', align: 'left', value: 'estoquemaximo' },
          { text: 'estoqueatual', align: 'left', value: 'estoqueatual' },
          { text: 'ultimacompra', align: 'left', value: 'ultimacompra' },
          { text: 'desconto', align: 'left', value: 'desconto' }
        ],
        newRegistro: {
          secao: '',
          codigoproduto: '',
          descricao: '',
          unidademedida: '',
          valorunitario: '',
          ipi: '',
          outras: '',
          frete: '',
          dificm: '',
          encargos: '',
          margem: '',
          valorvenda: '',
          estoqueminimo: '',
          estoquemaximo: '',
          estoqueatual: '',
          ultimacompra: '',
          desconto: ''
        },
        nometabela: 'PRODUTOS',
        titulo: 'PRODUTOS'
      }
    }
  }
</script>
