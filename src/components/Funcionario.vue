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
                    name='txtnome'
                    label='nome'
                    :rules="[ v => !!v || 'nome requerido']"
                    id='txtnome'
                    type='text'
                    v-model='newRegistro.nome'
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
                    name='txttel1'
                    label='tel1'
                    :rules="[ v => !!v || 'tel1 requerido']"
                    id='txttel1'
                    type='text'
                    v-model='newRegistro.tel1'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txttel2'
                    label='tel2'
                    :rules="[ v => !!v || 'tel2 requerido']"
                    id='txttel2'
                    type='text'
                    v-model='newRegistro.tel2'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtfuncao'
                    label='funcao'
                    :rules="[ v => !!v || 'funcao requerido']"
                    id='txtfuncao'
                    type='text'
                    v-model='newRegistro.funcao'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtativo'
                    label='ativo'
                    :rules="[ v => !!v || 'ativo requerido']"
                    id='txtativo'
                    type='text'
                    v-model='newRegistro.ativo'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtsalario'
                    label='salario'
                    :rules="[ v => !!v || 'salario requerido']"
                    id='txtsalario'
                    type='text'
                    v-model='newRegistro.salario'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtfoto'
                    label='foto'
                    :rules="[ v => !!v || 'foto requerido']"
                    id='txtfoto'
                    type='text'
                    v-model='newRegistro.foto'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtadmissao'
                    label='admissao'
                    :rules="[ v => !!v || 'admissao requerido']"
                    id='txtadmissao'
                    type='text'
                    v-model='newRegistro.admissao'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtdemissao'
                    label='demissao'
                    :rules="[ v => !!v || 'demissao requerido']"
                    id='txtdemissao'
                    type='text'
                    v-model='newRegistro.demissao'
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
              <td class='text-xs-left'>{{ props.item.nome }}</td>
              <td class='text-xs-left'>{{ props.item.endereco }}</td>
              <td class='text-xs-left'>{{ props.item.cidade }}</td>
              <td class='text-xs-left'>{{ props.item.uf }}</td>
              <td class='text-xs-left'>{{ props.item.tel1 }}</td>
              <td class='text-xs-left'>{{ props.item.tel2 }}</td>
              <td class='text-xs-left'>{{ props.item.funcao }}</td>
              <td class='text-xs-left'>{{ props.item.ativo }}</td>
              <td class='text-xs-left'>{{ props.item.salario }}</td>
              <td class='text-xs-left'>{{ props.item.foto }}</td>
              <td class='text-xs-left'>{{ props.item.admissao }}</td>
              <td class='text-xs-left'>{{ props.item.demissao }}</td>

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
          { text: 'nome', align: 'left', value: 'nome' },
          { text: 'endereco', align: 'left', value: 'endereco' },
          { text: 'cidade', align: 'left', value: 'cidade' },
          { text: 'uf', align: 'left', value: 'uf' },
          { text: 'tel1', align: 'left', value: 'tel1' },
          { text: 'tel2', align: 'left', value: 'tel2' },
          { text: 'funcao', align: 'left', value: 'funcao' },
          { text: 'ativo', align: 'left', value: 'ativo' },
          { text: 'salario', align: 'left', value: 'salario' },
          { text: 'foto', align: 'left', value: 'foto' },
          { text: 'admissao', align: 'left', value: 'admissao' },
          { text: 'demissao', align: 'left', value: 'demissao' }
        ],
        newRegistro: {
          codigo: '',
          nome: '',
          endereco: '',
          cidade: '',
          uf: '',
          tel1: '',
          tel2: '',
          funcao: '',
          ativo: '',
          salario: '',
          foto: '',
          admissao: '',
          demissao: ''
        },
        nometabela: 'Funcionario',
        titulo: 'Funcionario'
      }
    }
  }
</script>
