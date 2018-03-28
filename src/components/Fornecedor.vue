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
                    name='txtbairro'
                    label='bairro'
                    :rules="[ v => !!v || 'bairro requerido']"
                    id='txtbairro'
                    type='text'
                    v-model='newRegistro.bairro'
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
                    name='txtendereco'
                    label='endereco'
                    :rules="[ v => !!v || 'endereco requerido']"
                    id='txtendereco'
                    type='text'
                    v-model='newRegistro.endereco'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcidade'
                    label='cidade'
                    :rules="[ v => !!v || 'cidade requerido']"
                    id='txtcidade'
                    type='text'
                    v-model='newRegistro.cidade'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtuf'
                    label='uf'
                    :rules="[ v => !!v || 'uf requerido']"
                    id='txtuf'
                    type='text'
                    v-model='newRegistro.uf'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcep'
                    label='cep'
                    :rules="[ v => !!v || 'cep requerido']"
                    id='txtcep'
                    type='text'
                    v-model='newRegistro.cep'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcgc'
                    label='cgc'
                    :rules="[ v => !!v || 'cgc requerido']"
                    id='txtcgc'
                    type='text'
                    v-model='newRegistro.cgc'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtfone'
                    label='fone'
                    :rules="[ v => !!v || 'fone requerido']"
                    id='txtfone'
                    type='text'
                    v-model='newRegistro.fone'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtimail'
                    label='imail'
                    :rules="[ v => !!v || 'imail requerido']"
                    id='txtimail'
                    type='text'
                    v-model='newRegistro.imail'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txthomepage'
                    label='homepage'
                    :rules="[ v => !!v || 'homepage requerido']"
                    id='txthomepage'
                    type='text'
                    v-model='newRegistro.homepage'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtincrcaoestadual'
                    label='incrcaoestadual'
                    :rules="[ v => !!v || 'incrcaoestadual requerido']"
                    id='txtincrcaoestadual'
                    type='text'
                    v-model='newRegistro.incrcaoestadual'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcontato'
                    label='contato'
                    :rules="[ v => !!v || 'contato requerido']"
                    id='txtcontato'
                    type='text'
                    v-model='newRegistro.contato'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txttelefax'
                    label='telefax'
                    :rules="[ v => !!v || 'telefax requerido']"
                    id='txttelefax'
                    type='text'
                    v-model='newRegistro.telefax'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtfoneempresa1'
                    label='foneempresa1'
                    :rules="[ v => !!v || 'foneempresa1 requerido']"
                    id='txtfoneempresa1'
                    type='text'
                    v-model='newRegistro.foneempresa1'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtvendedor'
                    label='vendedor'
                    :rules="[ v => !!v || 'vendedor requerido']"
                    id='txtvendedor'
                    type='text'
                    v-model='newRegistro.vendedor'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txttelvendedor'
                    label='telvendedor'
                    :rules="[ v => !!v || 'telvendedor requerido']"
                    id='txttelvendedor'
                    type='text'
                    v-model='newRegistro.telvendedor'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcodigosecao'
                    label='codigosecao'
                    :rules="[ v => !!v || 'codigosecao requerido']"
                    id='txtcodigosecao'
                    type='text'
                    v-model='newRegistro.codigosecao'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtfantasia'
                    label='fantasia'
                    :rules="[ v => !!v || 'fantasia requerido']"
                    id='txtfantasia'
                    type='text'
                    v-model='newRegistro.fantasia'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtmarca'
                    label='marca'
                    :rules="[ v => !!v || 'marca requerido']"
                    id='txtmarca'
                    type='text'
                    v-model='newRegistro.marca'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcelvendedor'
                    label='celvendedor'
                    :rules="[ v => !!v || 'celvendedor requerido']"
                    id='txtcelvendedor'
                    type='text'
                    v-model='newRegistro.celvendedor'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtresvendedor'
                    label='resvendedor'
                    :rules="[ v => !!v || 'resvendedor requerido']"
                    id='txtresvendedor'
                    type='text'
                    v-model='newRegistro.resvendedor'
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
              <td class='text-xs-left'>{{ props.item.bairro }}</td>
              <td class='text-xs-left'>{{ props.item.codigo }}</td>
              <td class='text-xs-left'>{{ props.item.fornecedor }}</td>
              <td class='text-xs-left'>{{ props.item.endereco }}</td>
              <td class='text-xs-left'>{{ props.item.cidade }}</td>
              <td class='text-xs-left'>{{ props.item.uf }}</td>
              <td class='text-xs-left'>{{ props.item.cep }}</td>
              <td class='text-xs-left'>{{ props.item.cgc }}</td>
              <td class='text-xs-left'>{{ props.item.fone }}</td>
              <td class='text-xs-left'>{{ props.item.imail }}</td>
              <td class='text-xs-left'>{{ props.item.homepage }}</td>
              <td class='text-xs-left'>{{ props.item.incrcaoestadual }}</td>
              <td class='text-xs-left'>{{ props.item.contato }}</td>
              <td class='text-xs-left'>{{ props.item.telefax }}</td>
              <td class='text-xs-left'>{{ props.item.foneempresa1 }}</td>
              <td class='text-xs-left'>{{ props.item.vendedor }}</td>
              <td class='text-xs-left'>{{ props.item.telvendedor }}</td>
              <td class='text-xs-left'>{{ props.item.codigosecao }}</td>
              <td class='text-xs-left'>{{ props.item.fantasia }}</td>
              <td class='text-xs-left'>{{ props.item.marca }}</td>
              <td class='text-xs-left'>{{ props.item.celvendedor }}</td>
              <td class='text-xs-left'>{{ props.item.resvendedor }}</td>

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
          { text: 'bairro', align: 'left', value: 'bairro' },
          { text: 'codigo', align: 'left', value: 'codigo' },
          { text: 'fornecedor', align: 'left', value: 'fornecedor' },
          { text: 'endereco', align: 'left', value: 'endereco' },
          { text: 'cidade', align: 'left', value: 'cidade' },
          { text: 'uf', align: 'left', value: 'uf' },
          { text: 'cep', align: 'left', value: 'cep' },
          { text: 'cgc', align: 'left', value: 'cgc' },
          { text: 'fone', align: 'left', value: 'fone' },
          { text: 'imail', align: 'left', value: 'imail' },
          { text: 'homepage', align: 'left', value: 'homepage' },
          { text: 'incrcaoestadual', align: 'left', value: 'incrcaoestadual' },
          { text: 'contato', align: 'left', value: 'contato' },
          { text: 'telefax', align: 'left', value: 'telefax' },
          { text: 'foneempresa1', align: 'left', value: 'foneempresa1' },
          { text: 'vendedor', align: 'left', value: 'vendedor' },
          { text: 'telvendedor', align: 'left', value: 'telvendedor' },
          { text: 'codigosecao', align: 'left', value: 'codigosecao' },
          { text: 'fantasia', align: 'left', value: 'fantasia' },
          { text: 'marca', align: 'left', value: 'marca' },
          { text: 'celvendedor', align: 'left', value: 'celvendedor' },
          { text: 'resvendedor', align: 'left', value: 'resvendedor' }
        ],
        newRegistro: {
          chave: '',
          bairro: '',
          codigo: '',
          fornecedor: '',
          endereco: '',
          cidade: '',
          uf: '',
          cep: '',
          cgc: '',
          fone: '',
          imail: '',
          homepage: '',
          incrcaoestadual: '',
          contato: '',
          telefax: '',
          foneempresa1: '',
          vendedor: '',
          telvendedor: '',
          codigosecao: '',
          fantasia: '',
          marca: '',
          celvendedor: '',
          resvendedor: ''
        },
        nometabela: 'Fornecedor',
        titulo: 'Fornecedor'
      }
    }
  }
</script>
